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
import { useGridResizeOperations } from "../../hooks/useGridResizeOperations";

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

      // Respect minSize to prevent CSS Grid breakage (negative sizes)
      const targetCollapseSize = collapseBlock.collapseTo ?? 0;
      const minSizeConstraint = collapseBlock.minSize ?? 0;
      const collapseSize = Math.max(targetCollapseSize, minSizeConstraint);

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

  // Resize operations (extracted to custom hook)
  const { startResize, updateResize, endResize } = useGridResizeOperations(state, dispatch);

  // Create context value
  const contextValue: GridContextValue = useMemo(
    () => ({
      gridId,
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

      // Resize operations (using extracted hook)
      startResize,
      updateResize,
      endResize,

      // Persistence
      persistState: () => saveState(state),
      resetState: () => {
        dispatch({ type: "RESET_STATE" });
        clearState();
      },
    }),
    [gridId, state, activeMode, viewport, saveState, clearState, setModeInternal, startResize, updateResize, endResize]
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
// eslint-disable-next-line react-refresh/only-export-components
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
// eslint-disable-next-line react-refresh/only-export-components
export function useGridState() {
  const { state } = useGridContext();
  return state;
}

/**
 * Hook to access grid actions
 */
// eslint-disable-next-line react-refresh/only-export-components
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
// eslint-disable-next-line react-refresh/only-export-components
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

/**
 * Hook to access a specific block's state
 * @param blockId - The ID of the block to access
 * @returns Block state with calculated isCollapsed property
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useBlockState(blockId: string) {
  const { state } = useGridContext();
  const block = state.blocks[blockId];

  if (!block) {
    console.warn(`Block with id "${blockId}" not found in grid state`);
    return null;
  }

  const currentSize = block.size ?? block.defaultSize ?? 0;
  const collapseTo = block.collapseTo ?? 0;
  const isCollapsed = currentSize <= collapseTo;

  return {
    ...block,
    size: currentSize,
    isCollapsed,
  };
}

/**
 * Hook to access the parent block's state
 * @param blockId - The ID of the child block whose parent you want to access
 * @returns Parent block state with calculated isCollapsed property, or null if no parent
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useParentBlockState(blockId: string) {
  const { state } = useGridContext();
  const block = state.blocks[blockId];

  if (!block || !block.parentId) {
    return null;
  }

  const parentBlock = state.blocks[block.parentId];
  if (!parentBlock) {
    console.warn(`Parent block "${block.parentId}" not found for block "${blockId}"`);
    return null;
  }

  const currentSize = parentBlock.size ?? parentBlock.defaultSize ?? 0;
  const collapseTo = parentBlock.collapseTo ?? 0;
  const isCollapsed = currentSize <= collapseTo;

  return {
    ...parentBlock,
    size: currentSize,
    isCollapsed,
  };
}
