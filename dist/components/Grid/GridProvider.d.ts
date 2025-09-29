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
//# sourceMappingURL=GridProvider.d.ts.map