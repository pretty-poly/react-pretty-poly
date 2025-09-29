import { GridProps, GridState } from '../../types';

/**
 * Grid API for imperative control
 */
export interface GridAPI {
    resizeBlock: (blockId: string, size: number) => void;
    collapseBlock: (blockId: string) => void;
    expandBlock: (blockId: string) => void;
    switchMode: (mode: string) => void;
    persistState: () => void;
    resetState: () => void;
    getState: () => GridState;
}
/**
 * Main Grid component with provider wrapper
 */
export declare const Grid: import('react').ForwardRefExoticComponent<GridProps & import('react').RefAttributes<GridAPI>>;
//# sourceMappingURL=Grid.d.ts.map