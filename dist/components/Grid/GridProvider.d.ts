import { default as React } from 'react';
import { GridState, GridContextValue, BlockConfig, ResponsiveModes } from '../../types';

export interface GridProviderProps {
    children: React.ReactNode;
    blocks: BlockConfig[];
    modes?: ResponsiveModes;
    gridId?: string;
    persist?: boolean | "localStorage" | "sessionStorage" | ((state: GridState) => void);
    persistKey?: string;
    onModeChange?: (newMode: string, previousMode: string) => void;
    onLayoutChange?: (blocks: BlockConfig[]) => void;
}
/**
 * Grid context provider component
 */
export declare function GridProvider({ children, blocks, modes, gridId, persist, persistKey, onModeChange, onLayoutChange, }: GridProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Hook to access grid context
 */
export declare function useGridContext(): GridContextValue;
/**
 * Hook to access grid state
 */
export declare function useGridState(): GridState;
/**
 * Hook to access grid actions
 */
export declare function useGridActions(): {
    resizeBlock: (blockId: string, size: number) => void;
    collapseBlock: (blockId: string) => void;
    expandBlock: (blockId: string) => void;
    hideBlock: (blockId: string) => void;
    showBlock: (blockId: string) => void;
    toggleBlockVisibility: (blockId: string) => void;
    switchMode: (mode: string) => void;
    persistState: () => void;
    resetState: () => void;
};
/**
 * Hook to access resize operations
 */
export declare function useGridResize(): {
    startResize: (blockId: string, dividerId: string, event: React.MouseEvent | React.TouchEvent) => void;
    updateResize: (event: MouseEvent | TouchEvent) => void;
    endResize: () => void;
    isDragging: boolean;
    activeBlockId: string | undefined;
    activeDividerId: string | undefined;
};
/**
 * Hook to access a specific block's state
 * @param blockId - The ID of the block to access
 * @returns Block state with calculated isCollapsed property
 */
export declare function useBlockState(blockId: string): {
    size: number;
    isCollapsed: boolean;
    id: string;
    type: import('../..').BlockType;
    direction?: import('../..').Direction;
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    sizeUnit?: import('../..').SizeUnit;
    originalDefaultSize?: number;
    resizable?: boolean;
    collapsible?: boolean;
    collapseAt?: number;
    collapseTo?: number;
    dividerPosition?: import('../..').DividerPosition;
    dividerSize?: number;
    parentId?: string;
    order?: number;
    children?: string[];
} | null;
/**
 * Hook to access the parent block's state
 * @param blockId - The ID of the child block whose parent you want to access
 * @returns Parent block state with calculated isCollapsed property, or null if no parent
 */
export declare function useParentBlockState(blockId: string): {
    size: number;
    isCollapsed: boolean;
    id: string;
    type: import('../..').BlockType;
    direction?: import('../..').Direction;
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    sizeUnit?: import('../..').SizeUnit;
    originalDefaultSize?: number;
    resizable?: boolean;
    collapsible?: boolean;
    collapseAt?: number;
    collapseTo?: number;
    dividerPosition?: import('../..').DividerPosition;
    dividerSize?: number;
    parentId?: string;
    order?: number;
    children?: string[];
} | null;
/**
 * Hook to check if a block is hidden
 * @param blockId - The ID of the block to check
 * @returns True if the block is hidden
 */
export declare function useIsBlockHidden(blockId: string): boolean;
/**
 * Hook to hide a block
 * Returns a memoized callback
 */
export declare function useHideBlock(): (blockId: string) => void;
/**
 * Hook to show a block
 * Returns a memoized callback
 */
export declare function useShowBlock(): (blockId: string) => void;
/**
 * Hook to toggle block visibility
 * Returns a memoized callback
 */
export declare function useToggleBlockVisibility(): (blockId: string) => void;
//# sourceMappingURL=GridProvider.d.ts.map