import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";
import type {
  GridState,
  GridAction,
  GridContextValue,
  BlockConfig,
  ResponsiveModes,
  ViewportInfo,
} from "../../types";
import { useGridMode } from "../../hooks/useGridMode";
import { useGridPersistence } from "../../hooks/useGridPersistence";
import {
  calculateConstrainedSize,
  pxToFr,
  getFlexSpacePx,
} from "../../utils/calculations";

/**
 * Grid state reducer
 */
function gridStateReducer(state: GridState, action: GridAction): GridState {
  switch (action.type) {
    case "RESIZE_BLOCK":
      const block = state.blocks[action.payload.blockId];
      if (!block) return state;

      return {
        ...state,
        blocks: {
          ...state.blocks,
          [action.payload.blockId]: {
            ...block,
            defaultSize: action.payload.size,
            size: action.payload.size,
          },
        },
      };

    case "COLLAPSE_BLOCK":
      const collapseBlock = state.blocks[action.payload.blockId];
      if (!collapseBlock) return state;

      const collapseSize = collapseBlock.collapseTo || 0;
      return {
        ...state,
        blocks: {
          ...state.blocks,
          [action.payload.blockId]: {
            ...collapseBlock,
            // Preserve original size for expand
            originalDefaultSize:
              collapseBlock.originalDefaultSize || collapseBlock.defaultSize,
            defaultSize: collapseSize,
            size: collapseSize,
          },
        },
      };

    case "EXPAND_BLOCK":
      const expandBlock = state.blocks[action.payload.blockId];
      if (!expandBlock) return state;

      // Restore to the original default size defined in configuration
      const originalSize =
        expandBlock.originalDefaultSize || expandBlock.defaultSize || 100;
      return {
        ...state,
        blocks: {
          ...state.blocks,
          [action.payload.blockId]: {
            ...expandBlock,
            defaultSize: originalSize,
            size: originalSize,
          },
        },
      };

    case "SET_ACTIVE_DIVIDER":
      return {
        ...state,
        activeDivider: action.payload.dividerId,
      };

    case "SWITCH_MODE":
      return {
        ...state,
        activeMode: action.payload.mode,
      };

    case "UPDATE_VIEWPORT":
      return {
        ...state,
        viewport: action.payload.viewport,
      };

    case "LOAD_STATE":
      return {
        ...state,
        ...action.payload.state,
        // Always preserve current viewport
        viewport: state.viewport,
      };

    case "RESET_STATE":
      // Reset block sizes to their original defaults
      const resetBlocks = Object.fromEntries(
        Object.entries(state.blocks).map(([id, block]) => [
          id,
          {
            ...block,
            size: block.defaultSize,
            // Reset to original defaultSize stored somewhere, or current defaultSize
          },
        ])
      );
      return {
        ...state,
        blocks: resetBlocks,
        activeDivider: undefined,
        resize: {
          isDragging: false,
          startPosition: { x: 0, y: 0 },
          initialSize: 0,
        },
      };

    case "START_RESIZE":
      return {
        ...state,
        resize: {
          isDragging: true,
          activeBlockId: action.payload.blockId,
          activeDividerId: action.payload.dividerId,
          startPosition: action.payload.startPosition,
          initialSize: action.payload.initialSize,
          initialAdjacentBlockId: action.payload.initialAdjacentBlockId,
          initialAdjacentSize: action.payload.initialAdjacentSize,
        },
      };

    case "UPDATE_RESIZE":
      return {
        ...state,
        resize: {
          ...state.resize,
          // The resize calculation happens in the resize handler, not the reducer
        },
      };

    case "END_RESIZE":
      return {
        ...state,
        resize: {
          isDragging: false,
          startPosition: { x: 0, y: 0 },
          initialSize: 0,
        },
      };

    default:
      return state;
  }
}

/**
 * Create initial grid state from block configurations
 */
function createInitialState(
  blocks: BlockConfig[],
  viewport: ViewportInfo,
  activeMode: string
): GridState {
  const blocksMap = blocks.reduce((acc, block) => {
    acc[block.id] = {
      ...block,
      size: block.defaultSize,
      originalDefaultSize: block.defaultSize, // Store original size for expand functionality
    };
    return acc;
  }, {} as Record<string, BlockConfig>);

  return {
    blocks: blocksMap,
    activeMode,
    viewport,
    resize: {
      isDragging: false,
      startPosition: { x: 0, y: 0 },
      initialSize: 0,
    },
  };
}

// Context
const GridContext = createContext<GridContextValue | null>(null);

export interface GridProviderProps {
  children: React.ReactNode;
  blocks: BlockConfig[];
  modes?: ResponsiveModes;
  gridId?: string;
  persist?:
    | boolean
    | "localStorage"
    | "sessionStorage"
    | ((state: GridState) => void);
  persistKey?: string;
  onModeChange?: (newMode: string, previousMode: string) => void;
  onLayoutChange?: (blocks: BlockConfig[]) => void;
}

/**
 * Grid context provider component
 */
export function GridProvider({
  children,
  blocks,
  modes,
  gridId = "default",
  persist = false,
  persistKey,
  onModeChange,
  onLayoutChange,
}: GridProviderProps) {
  // Mode management
  const { activeMode, viewport, setMode: setModeInternal } = useGridMode(modes);

  // Initialize state
  const [state, dispatch] = useReducer(
    gridStateReducer,
    createInitialState(blocks, viewport, activeMode)
  );

  // Update viewport in state when it changes
  useEffect(() => {
    dispatch({
      type: "UPDATE_VIEWPORT",
      payload: { viewport },
    });
  }, [viewport]);

  // Update active mode in state when it changes
  useEffect(() => {
    const previousMode = state.activeMode;
    if (activeMode !== previousMode) {
      dispatch({
        type: "SWITCH_MODE",
        payload: { mode: activeMode },
      });
      onModeChange?.(activeMode, previousMode);
    }
  }, [activeMode, state.activeMode, onModeChange]);

  // Persistence
  const { saveState, clearState } = useGridPersistence({
    gridId: persistKey || gridId,
    enabled: persist,
    state,
    onStateLoad: (loadedState) => {
      dispatch({ type: "LOAD_STATE", payload: { state: loadedState } });
    },
    autoSave: true,
  });

  // Helper functions for resize operations

  const getEventPosition = (
    event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent
  ): { x: number; y: number } => {
    if ("touches" in event) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
    return { x: event.clientX, y: event.clientY };
  };

  // Create context value
  const contextValue: GridContextValue = useMemo(
    () => ({
      state: {
        ...state,
        activeMode,
        viewport,
      },
      dispatch,

      // Grid operations
      resizeBlock: (blockId: string, size: number) => {
        dispatch({
          type: "RESIZE_BLOCK",
          payload: { blockId, size },
        });
      },

      collapseBlock: (blockId: string) => {
        dispatch({
          type: "COLLAPSE_BLOCK",
          payload: { blockId },
        });
      },

      expandBlock: (blockId: string) => {
        dispatch({
          type: "EXPAND_BLOCK",
          payload: { blockId },
        });
      },

      switchMode: (mode: string) => {
        setModeInternal(mode);
      },

      // Resize operations
      startResize: (
        blockId: string,
        dividerId: string,
        event: React.MouseEvent | React.TouchEvent
      ) => {
        const block = state.blocks[blockId];
        if (!block) return;

        const startPosition = getEventPosition(event);

        // Find adjacent block for two-way resizing
        const siblingBlocks = Object.values(state.blocks).filter(
          (b) => b.parentId === block.parentId
        );
        const sortedSiblings = siblingBlocks.sort(
          (a, b) => (a.order || 0) - (b.order || 0)
        );
        const blockIndex = sortedSiblings.findIndex((b) => b.id === blockId);

        let adjacentBlock = null;
        if (block.dividerPosition === "start" && blockIndex > 0) {
          adjacentBlock = sortedSiblings[blockIndex - 1];
        } else if (
          block.dividerPosition === "end" &&
          blockIndex < sortedSiblings.length - 1
        ) {
          adjacentBlock = sortedSiblings[blockIndex + 1];
        }

        // Validation: Prevent resizing fr blocks when adjacent to px blocks
        if (
          adjacentBlock &&
          block.sizeUnit === "fr" &&
          adjacentBlock.sizeUnit === "px"
        ) {
          console.warn(
            `Cannot resize fr block "${blockId}" when adjacent to px block "${adjacentBlock.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
          );
          return;
        }

        dispatch({
          type: "START_RESIZE",
          payload: {
            blockId,
            dividerId,
            startPosition,
            initialSize: block.defaultSize || 0,
            initialAdjacentBlockId: adjacentBlock?.id,
            initialAdjacentSize: adjacentBlock
              ? adjacentBlock.originalDefaultSize ||
                adjacentBlock.defaultSize ||
                0
              : undefined,
          },
        });

        // Prevent text selection during drag
        document.body.style.userSelect = "none";
        const parentBlock = block.parentId
          ? state.blocks[block.parentId]
          : null;
        const direction = parentBlock?.direction || "row";
        document.body.style.cursor =
          direction === "row" ? "col-resize" : "row-resize";
      },

      updateResize: (event: MouseEvent | TouchEvent) => {
        if (!state.resize.isDragging || !state.resize.activeBlockId) return;

        const block = state.blocks[state.resize.activeBlockId];
        if (!block) return;

        const currentPosition = getEventPosition(event);

        // Find the parent block to determine the resize direction
        const parentBlock = block.parentId
          ? state.blocks[block.parentId]
          : null;
        const direction = parentBlock?.direction || "row";

        // Calculate delta based on the parent's direction
        // If parent arranges children in 'row', dividers move horizontally (X axis)
        // If parent arranges children in 'column', dividers move vertically (Y axis)
        const deltaPx =
          direction === "row"
            ? currentPosition.x - state.resize.startPosition.x
            : currentPosition.y - state.resize.startPosition.y;

        if (block.sizeUnit === "px") {
          // Handle pixel-based resizing
          // Get position from divider's data attribute
          const dividerEl = document.querySelector(`[data-block-id="${state.resize.activeDividerId}"]`);
          const dividerPosition = dividerEl?.getAttribute('data-block-divider-position') || 'end';

          // For position="start": divider is BEFORE the block
          // - Dragging left (negative delta) should GROW the block (need inversion)
          // - Dragging right (positive delta) should SHRINK the block (need inversion)
          // For position="end": divider is AFTER the block
          // - Dragging right (positive delta) should GROW the block (no inversion)
          // - Dragging left (negative delta) should SHRINK the block (no inversion)
          const shouldInvertDelta = dividerPosition === "start";

          const newSize = calculateConstrainedSize(
            deltaPx,
            state.resize.initialSize,
            block.minSize,
            block.maxSize,
            shouldInvertDelta
          );

          dispatch({
            type: "RESIZE_BLOCK",
            payload: { blockId: state.resize.activeBlockId, size: newSize },
          });
        } else if (block.sizeUnit === "fr") {
          // Handle fractional resizing (two-way)
          const siblingBlocks = Object.values(state.blocks).filter(
            (b) => b.parentId === block.parentId
          );
          const frBlocks = siblingBlocks.filter((b) => b.sizeUnit === "fr");

          // Measure the actual parent container dimensions
          const parentElement = block.parentId
            ? document.querySelector(`[data-block-id="${block.parentId}"]`)
            : document.querySelector(`[data-block-id="root"]`);

          const containerSize = parentElement
            ? direction === "row"
              ? parentElement.clientWidth
              : parentElement.clientHeight
            : 1200; // Fallback only if element not found
          // Measure actual pixel space used by px blocks (not configured defaultSize)
          const pxBlocks = siblingBlocks
            .filter((b) => b.sizeUnit === "px")
            .reduce((sum, b) => {
              const el = document.querySelector(`[data-block-id="${b.id}"]`);
              if (!el) return sum;
              const size =
                direction === "row" ? el.clientWidth : el.clientHeight;
              return sum + size;
            }, 0);

          // Measure actual divider sizes from DOM (not calculated count × 8px)
          const dividers = Array.from(
            parentElement?.querySelectorAll('[data-block-type="divider"]') || []
          );
          const gapSpace = dividers.reduce((sum, el) => {
            if (!(el instanceof HTMLElement)) return sum;
            const size = direction === "row" ? el.clientWidth : el.clientHeight;
            return sum + size;
          }, 0);

          const fixedSpace = pxBlocks;
          const flexSpace = getFlexSpacePx(containerSize, fixedSpace, gapSpace);
          // Use current sizes, not original defaults, for accurate calculations during multi-step resizes
          const totalFr = frBlocks.reduce(
            (sum, b) => sum + (b.defaultSize || 1),
            0
          );
          const pixelsPerFr = totalFr > 0 ? flexSpace / totalFr : 0;

          if (pixelsPerFr === 0) return; // Prevent division by zero

          const deltaFr = pxToFr(deltaPx, pixelsPerFr);

          // Find adjacent block based on block order
          const sortedFrBlocks = frBlocks.sort(
            (a, b) => (a.order || 0) - (b.order || 0)
          );
          const blockIndex = sortedFrBlocks.findIndex(
            (b) => b.id === state.resize.activeBlockId
          );

          // Get actual position from divider's data attribute first
          const dividerEl = document.querySelector(`[data-block-id="${state.resize.activeDividerId}"]`);
          const dividerPosition = dividerEl?.getAttribute('data-block-divider-position') || 'end';

          let adjacentBlock = null;
          if (dividerPosition === "start" && blockIndex > 0) {
            adjacentBlock = sortedFrBlocks[blockIndex - 1];
          } else if (
            dividerPosition === "end" &&
            blockIndex < sortedFrBlocks.length - 1
          ) {
            adjacentBlock = sortedFrBlocks[blockIndex + 1];
          }

          if (adjacentBlock) {
            let targetDelta: number;
            let adjacentDelta: number;

            if (dividerPosition === "start") {
              // Divider at start: moving right grows target, shrinks previous
              targetDelta = deltaFr;
              adjacentDelta = -deltaFr;
            } else {
              // Divider at end: moving right grows target, shrinks next
              targetDelta = deltaFr;
              adjacentDelta = -deltaFr;
            }

            // Apply minimum size constraints using initial sizes
            const minSize = 0.1; // Minimum fr size
            const newTargetSize = Math.max(
              minSize,
              state.resize.initialSize + targetDelta
            );
            const newAdjacentSize = Math.max(
              minSize,
              (state.resize.initialAdjacentSize || 1) + adjacentDelta
            );

            // Ensure zero-sum by adjusting if constraints were applied
            const actualTargetDelta = newTargetSize - state.resize.initialSize;
            const actualAdjacentDelta =
              newAdjacentSize - (state.resize.initialAdjacentSize || 1);

            if (Math.abs(actualTargetDelta + actualAdjacentDelta) < 0.01) {
              dispatch({
                type: "RESIZE_BLOCK",
                payload: {
                  blockId: state.resize.activeBlockId,
                  size: newTargetSize,
                },
              });
              dispatch({
                type: "RESIZE_BLOCK",
                payload: { blockId: adjacentBlock.id, size: newAdjacentSize },
              });
            }
          }
        }
      },

      endResize: () => {
        dispatch({ type: "END_RESIZE" });

        // Restore normal cursor and text selection
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
      },

      // Persistence
      persistState: () => saveState(state),
      resetState: () => {
        dispatch({ type: "RESET_STATE" });
        clearState();
      },
    }),
    [state, activeMode, viewport, saveState, clearState, setModeInternal]
  );

  // Notify parent of layout changes
  useEffect(() => {
    if (onLayoutChange) {
      const blockConfigs = Object.values(state.blocks);
      onLayoutChange(blockConfigs);
    }
  }, [state.blocks, onLayoutChange]);

  return (
    <GridContext.Provider value={contextValue}>{children}</GridContext.Provider>
  );
}

/**
 * Hook to access grid context
 */
export function useGridContext(): GridContextValue {
  const context = useContext(GridContext);
  if (!context) {
    throw new Error("useGridContext must be used within a GridProvider");
  }
  return context;
}

/**
 * Hook to access grid state
 */
export function useGridState() {
  const { state } = useGridContext();
  return state;
}

/**
 * Hook to access grid actions
 */
export function useGridActions() {
  const {
    resizeBlock,
    collapseBlock,
    expandBlock,
    switchMode,
    persistState,
    resetState,
  } = useGridContext();
  return {
    resizeBlock,
    collapseBlock,
    expandBlock,
    switchMode,
    persistState,
    resetState,
  };
}

/**
 * Hook to access resize operations
 */
export function useGridResize() {
  const { startResize, updateResize, endResize, state } = useGridContext();
  return {
    startResize,
    updateResize,
    endResize,
    isDragging: state.resize.isDragging,
    activeBlockId: state.resize.activeBlockId,
    activeDividerId: state.resize.activeDividerId,
  };
}
