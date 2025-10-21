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
} from "@/lib/grid-types";
import { useGridMode } from "@/hooks/use-grid-mode";
import { useGridPersistence } from "@/hooks/use-grid-persistence";
import { useGridResizeOperations } from "@/hooks/use-grid-resize-operations";

/**
 * Grid state reducer
 */
function gridStateReducer(state: GridState, action: GridAction): GridState {
  switch (action.type) {
    case "HIDE_BLOCK":
      return {
        ...state,
        hiddenBlocks: new Set([...state.hiddenBlocks, action.payload.blockId]),
      };

    case "SHOW_BLOCK": {
      const newHiddenBlocks = new Set(state.hiddenBlocks);
      newHiddenBlocks.delete(action.payload.blockId);
      return {
        ...state,
        hiddenBlocks: newHiddenBlocks,
      };
    }

    case "TOGGLE_BLOCK_VISIBILITY": {
      const isHidden = state.hiddenBlocks.has(action.payload.blockId);
      const toggledHiddenBlocks = new Set(state.hiddenBlocks);
      if (isHidden) {
        toggledHiddenBlocks.delete(action.payload.blockId);
      } else {
        toggledHiddenBlocks.add(action.payload.blockId);
      }
      return {
        ...state,
        hiddenBlocks: toggledHiddenBlocks,
      };
    }

    case "RESIZE_BLOCK": {
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
    }

    case "COLLAPSE_BLOCK": {
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
    }

    case "EXPAND_BLOCK": {
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
    }

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

    case "RESET_STATE": {
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
    }

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

    case "SPLIT_BLOCK": {
      const { targetBlockId, direction, firstChildId, secondChildId, initialSize = 1 } = action.payload;
      const targetBlock = state.blocks[targetBlockId];

      // Validate target exists and is a group
      if (!targetBlock) {
        console.warn(`Cannot split: block ${targetBlockId} not found`);
        return state;
      }

      if (targetBlock.type !== "group") {
        console.warn(`Cannot split: block ${targetBlockId} is not a group`);
        return state;
      }

      // Validate canSplit flag
      if (targetBlock.canSplit !== true) {
        console.warn(`Cannot split: block ${targetBlockId} does not have canSplit enabled`);
        return state;
      }

      const splitDirection = direction === "horizontal" ? "column" : "row";

      // Determine view type for new panes
      const newViewType = action.payload.newViewType || targetBlock.defaultViewType;

      // Case 1: Group with undefined direction - set direction and REPLACE children
      if (!targetBlock.direction) {
        const existingChildren = targetBlock.children || [];
        const oldChildId = existingChildren[0];
        const oldChild = oldChildId ? state.blocks[oldChildId] : undefined;

        // Update group: set direction and replace children
        const updatedGroup: BlockConfig = {
          ...targetBlock,
          direction: splitDirection,
          children: [firstChildId, secondChildId],
        };

        // First child inherits content from original child
        const firstChild: BlockConfig = {
          id: firstChildId,
          type: "block",
          parentId: targetBlockId,
          order: 0,
          defaultSize: initialSize,
          sizeUnit: "fr",
          viewType: oldChild?.viewType,
          viewState: oldChild?.viewState,
        };

        // Second child gets default or specified view type
        const secondChild: BlockConfig = {
          id: secondChildId,
          type: "block",
          parentId: targetBlockId,
          order: 1,
          defaultSize: initialSize,
          sizeUnit: "fr",
          viewType: newViewType,
        };

        // Delete old children from state
        const newBlocks = { ...state.blocks };
        existingChildren.forEach(childId => {
          delete newBlocks[childId];
        });

        // Add updated blocks
        return {
          ...state,
          blocks: {
            ...newBlocks,
            [targetBlockId]: updatedGroup,
            [firstChildId]: firstChild,
            [secondChildId]: secondChild,
          },
        };
      }

      // Case 2: Group with defined direction - add to existing children
      if (targetBlock.direction) {
        // Check if directions match
        if (targetBlock.direction !== splitDirection) {
          console.warn(`Cannot split group ${targetBlockId}: direction mismatch (has ${targetBlock.direction}, requested ${splitDirection})`);
          return state;
        }

        const updatedGroup: BlockConfig = {
          ...targetBlock,
          children: [...(targetBlock.children || []), secondChildId],
        };

        const newChild: BlockConfig = {
          id: secondChildId,
          type: "block",
          parentId: targetBlockId,
          order: (targetBlock.children?.length || 0),
          defaultSize: initialSize,
          sizeUnit: "fr",
          viewType: newViewType,
        };

        return {
          ...state,
          blocks: {
            ...state.blocks,
            [targetBlockId]: updatedGroup,
            [secondChildId]: newChild,
          },
        };
      }

      return state;
    }

    case "UNSPLIT_BLOCK": {
      const { blockId } = action.payload;
      const targetBlock = state.blocks[blockId];
      if (!targetBlock || targetBlock.type !== "group" || !targetBlock.children) {
        return state;
      }

      // Remove child blocks
      const newBlocks = { ...state.blocks };
      targetBlock.children.forEach(childId => {
        delete newBlocks[childId];
      });

      // Convert group back to block
      const restoredBlock: BlockConfig = {
        ...targetBlock,
        type: "block",
        children: undefined,
        viewType: undefined, // User will need to set content
      };
      newBlocks[blockId] = restoredBlock;

      return {
        ...state,
        blocks: newBlocks,
      };
    }

    case "ADD_BLOCK": {
      const { parentId, block } = action.payload;
      const parentBlock = state.blocks[parentId];
      if (!parentBlock) return state;

      // Add block to parent's children if parent is a group
      const updatedParent = parentBlock.type === "group" && parentBlock.children
        ? {
            ...parentBlock,
            children: [...parentBlock.children, block.id],
          }
        : parentBlock;

      return {
        ...state,
        blocks: {
          ...state.blocks,
          [parentId]: updatedParent,
          [block.id]: block,
        },
      };
    }

    case "REMOVE_BLOCK": {
      const { blockId } = action.payload;
      const blockToRemove = state.blocks[blockId];
      if (!blockToRemove) return state;

      const newBlocks = { ...state.blocks };

      // Remove from parent's children array
      if (blockToRemove.parentId) {
        const parentBlock = newBlocks[blockToRemove.parentId];
        if (parentBlock && parentBlock.type === "group" && parentBlock.children) {
          newBlocks[blockToRemove.parentId] = {
            ...parentBlock,
            children: parentBlock.children.filter(id => id !== blockId),
          };
        }
      }

      // Remove the block itself
      delete newBlocks[blockId];

      // Also remove from hidden blocks if present
      const newHiddenBlocks = new Set(state.hiddenBlocks);
      newHiddenBlocks.delete(blockId);

      return {
        ...state,
        blocks: newBlocks,
        hiddenBlocks: newHiddenBlocks,
      };
    }

    case "SET_BLOCK_VIEW_TYPE": {
      const { blockId, viewType } = action.payload;
      const block = state.blocks[blockId];
      if (!block) return state;

      return {
        ...state,
        blocks: {
          ...state.blocks,
          [blockId]: {
            ...block,
            viewType,
          },
        },
      };
    }

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
    hiddenBlocks: new Set<string>(),  // Initialize with no hidden blocks
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

      // Block visibility operations
      hideBlock: (blockId: string) => {
        dispatch({
          type: "HIDE_BLOCK",
          payload: { blockId },
        });
      },

      showBlock: (blockId: string) => {
        dispatch({
          type: "SHOW_BLOCK",
          payload: { blockId },
        });
      },

      toggleBlockVisibility: (blockId: string) => {
        dispatch({
          type: "TOGGLE_BLOCK_VISIBILITY",
          payload: { blockId },
        });
      },

      // Split operations (LayoutService primitives)
      splitBlock: (blockId: string, direction: 'horizontal' | 'vertical', options = {}) => {
        const { initialSize = 1, viewType, position = 'after' } = options;

        // Generate unique IDs using timestamp to prevent collisions
        const timestamp = Date.now();
        const firstChildId = `${blockId}-${timestamp}-1`;
        const secondChildId = `${blockId}-${timestamp}-2`;

        dispatch({
          type: "SPLIT_BLOCK",
          payload: {
            targetBlockId: blockId,
            direction,
            newBlockId: position === 'before' ? firstChildId : secondChildId,
            firstChildId,
            secondChildId,
            initialSize,
            newViewType: viewType,
            position,
          },
        });

        // Return the new block ID
        return position === 'before' ? firstChildId : secondChildId;
      },

      unsplitBlock: (blockId: string) => {
        dispatch({
          type: "UNSPLIT_BLOCK",
          payload: { blockId },
        });
      },

      canSplit: (blockId: string) => {
        const block = state.blocks[blockId];

        // Only groups can be split
        if (!block || block.type !== "group") return false;

        // Check if group has canSplit flag enabled
        if (block.canSplit !== true) return false;

        // Check minimum size constraints if specified
        const minSplitSize = block.splitConfig?.minSplitSize || 200;
        if (block.sizeUnit === "px" && (block.defaultSize || 0) < minSplitSize * 2) {
          return false;
        }

        return true;
      },

      addBlock: (parentId: string, blockConfig: Partial<BlockConfig>) => {
        const newBlockId = blockConfig.id || `block-${Date.now()}`;
        const block: BlockConfig = {
          id: newBlockId,
          type: "block",
          parentId,
          defaultSize: 1,
          sizeUnit: "fr",
          ...blockConfig,
        };

        dispatch({
          type: "ADD_BLOCK",
          payload: { parentId, block },
        });

        return newBlockId;
      },

      removeBlock: (blockId: string) => {
        dispatch({
          type: "REMOVE_BLOCK",
          payload: { blockId },
        });
      },

      // View type operations (future ViewRegistry support)
      setBlockViewType: (blockId: string, viewType: string) => {
        dispatch({
          type: "SET_BLOCK_VIEW_TYPE",
          payload: { blockId, viewType },
        });
      },

      getBlockViewType: (blockId: string) => {
        return state.blocks[blockId]?.viewType;
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
    hideBlock,
    showBlock,
    toggleBlockVisibility,
    switchMode,
    persistState,
    resetState,
  } = useGridContext();
  return {
    resizeBlock,
    collapseBlock,
    expandBlock,
    hideBlock,
    showBlock,
    toggleBlockVisibility,
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

/**
 * Hook to access a specific block's state
 * @param blockId - The ID of the block to access
 * @returns Block state with calculated isCollapsed property
 */
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

/**
 * Hook to check if a block is hidden
 * @param blockId - The ID of the block to check
 * @returns True if the block is hidden
 */
export function useIsBlockHidden(blockId: string): boolean {
  const { state } = useGridContext();
  return state.hiddenBlocks.has(blockId);
}

/**
 * Hook to hide a block
 * Returns a memoized callback
 */
export function useHideBlock(): (blockId: string) => void {
  const { hideBlock } = useGridContext();
  return hideBlock;
}

/**
 * Hook to show a block
 * Returns a memoized callback
 */
export function useShowBlock(): (blockId: string) => void {
  const { showBlock } = useGridContext();
  return showBlock;
}

/**
 * Hook to toggle block visibility
 * Returns a memoized callback
 */
export function useToggleBlockVisibility(): (blockId: string) => void {
  const { toggleBlockVisibility } = useGridContext();
  return toggleBlockVisibility;
}

/**
 * Hook to access split operations
 */
export function useSplitBlock() {
  const { splitBlock, unsplitBlock, canSplit, state } = useGridContext();
  return {
    splitBlock,
    unsplitBlock,
    canSplit,
    state,
  };
}

/**
 * Hook to split a block
 * Returns a memoized callback
 */
export function useSplit(): (blockId: string, direction: 'horizontal' | 'vertical', options?: {
  initialSize?: number;
  viewType?: string;
  position?: 'before' | 'after';
}) => string {
  const { splitBlock } = useGridContext();
  return splitBlock;
}

/**
 * Hook to check if a block can be split
 * Returns a memoized callback
 */
export function useCanSplit(): (blockId: string) => boolean {
  const { canSplit } = useGridContext();
  return canSplit;
}

/**
 * Hook to access view type operations
 */
export function useBlockViewType(blockId: string) {
  const { getBlockViewType, setBlockViewType } = useGridContext();
  return {
    viewType: getBlockViewType(blockId),
    setViewType: (viewType: string) => setBlockViewType(blockId, viewType),
  };
}
