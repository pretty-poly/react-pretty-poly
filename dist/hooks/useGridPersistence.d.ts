import { GridState } from '../types';

export interface UseGridPersistenceOptions {
    gridId: string;
    enabled: boolean | 'localStorage' | 'sessionStorage' | ((state: GridState) => void);
    state: GridState;
    onStateLoad?: (state: Partial<GridState>) => void;
    autoSave?: boolean;
    saveDelay?: number;
}
/**
 * Hook for handling grid state persistence
 */
export declare function useGridPersistence({ gridId, enabled, state, onStateLoad, autoSave, saveDelay }: UseGridPersistenceOptions): {
    saveState: (stateToSave?: GridState) => void;
    debouncedSave: (stateToSave?: GridState) => void;
    clearState: () => void;
    isEnabled: boolean;
};
//# sourceMappingURL=useGridPersistence.d.ts.map