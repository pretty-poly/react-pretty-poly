import { BlockConfig } from '../types';

export interface UseGridKeyboardOptions {
    enabled?: boolean;
    blocks: BlockConfig[];
    onResizeBlock?: (blockId: string, delta: number) => void;
    onFocusBlock?: (blockId: string) => void;
    onCollapseBlock?: (blockId: string) => void;
    onExpandBlock?: (blockId: string) => void;
    onSplitBlock?: (blockId: string, direction: 'horizontal' | 'vertical') => void;
    containerRef?: React.RefObject<HTMLElement>;
    stepSize?: number;
    largeStepSize?: number;
}
/**
 * Hook for keyboard navigation and control of grid layouts
 */
export declare function useGridKeyboard({ enabled, blocks, onResizeBlock, onFocusBlock, onCollapseBlock, onExpandBlock, onSplitBlock, containerRef, stepSize, largeStepSize }: UseGridKeyboardOptions): {
    focusBlock: (blockId: string) => void;
    getFocusableBlocks: () => HTMLElement[];
    getFocusedBlock: () => HTMLElement | null;
    isEnabled: boolean;
};
//# sourceMappingURL=useGridKeyboard.d.ts.map