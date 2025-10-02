import { GridState, GridAction } from '../types';

/**
 * Hook for managing grid resize operations
 * Extracted from GridProvider to reduce complexity and improve testability
 */
export declare function useGridResizeOperations(state: GridState, dispatch: React.Dispatch<GridAction>): {
    startResize: (blockId: string, dividerId: string, event: React.MouseEvent | React.TouchEvent) => void;
    updateResize: (event: MouseEvent | TouchEvent) => void;
    endResize: () => void;
};
//# sourceMappingURL=useGridResizeOperations.d.ts.map