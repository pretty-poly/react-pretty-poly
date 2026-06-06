import { BlockConfig, GridState } from '../types';

export interface StorageAdapter {
    save: (key: string, data: unknown) => void;
    load: (key: string) => unknown;
    remove: (key: string) => void;
    clear: () => void;
}
/**
 * Reconcile a persisted grid state with the current block configuration.
 */
export declare function mergePersistedGridState(persistedState: Partial<GridState> | null | undefined, configuredBlocks: BlockConfig[]): Partial<GridState>;
/**
 * localStorage adapter
 */
export declare const localStorageAdapter: StorageAdapter;
/**
 * sessionStorage adapter
 */
export declare const sessionStorageAdapter: StorageAdapter;
export declare const memoryStorageAdapter: StorageAdapter;
/**
 * Get appropriate storage adapter
 */
export declare function getStorageAdapter(type: 'localStorage' | 'sessionStorage' | 'memory'): StorageAdapter;
/**
 * Generate storage key
 */
export declare function getStorageKey(gridId: string): string;
/**
 * Save grid state
 */
export declare function saveGridState(gridId: string, state: GridState, adapter?: StorageAdapter): void;
/**
 * Load grid state
 */
export declare function loadGridState(gridId: string, adapter?: StorageAdapter): Partial<GridState> | null;
/**
 * Remove grid state
 */
export declare function removeGridState(gridId: string, adapter?: StorageAdapter): void;
/**
 * Get all saved grid states
 */
export declare function getAllGridStates(adapter?: StorageAdapter): Record<string, Partial<GridState>>;
/**
 * Create a custom storage adapter from a function
 */
export declare function createCustomAdapter(saveState: (state: GridState) => void): StorageAdapter;
//# sourceMappingURL=storage.d.ts.map