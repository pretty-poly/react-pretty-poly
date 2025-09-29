import { BlockConfig, Direction } from '../types';

export interface UseGridResizeOptions {
    blocks: BlockConfig[];
    containerRef: React.RefObject<HTMLElement>;
    onSizeChange?: (blockId: string, newSize: number) => void;
    direction?: Direction;
}
/**
 * Hook for handling grid resize operations
 * Now uses the context-based resize system instead of managing state locally
 */
export declare function useGridResize({ blocks, containerRef, onSizeChange, direction }: UseGridResizeOptions): {
    isDragging: boolean;
    activeBlockId: string | undefined;
    activeDividerId: string | undefined;
    startResize: (blockId: string, dividerId: string, event: React.MouseEvent | React.TouchEvent) => void;
    resetBlock: (blockId: string) => void;
    collapseBlock: (blockId: string) => void;
    expandBlock: (blockId: string) => void;
    isBlockCollapsed: (blockId: string) => boolean;
    getContainerSize: () => number;
    calculatePixelsPerFr: () => number;
};
//# sourceMappingURL=useGridResize.d.ts.map