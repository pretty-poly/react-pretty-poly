import { GridState } from '../types';

export interface StorageAdapter {
    save: (key: string, data: unknown) => void;
    load: (key: string) => unknown | null;
    remove: (key: string) => void;
    clear: () => void;
}
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
 * @param type Storage type preference
 * @returns Storage adapter
 */
export declare function getStorageAdapter(type: 'localStorage' | 'sessionStorage' | 'memory'): StorageAdapter;
/**
 * Generate storage key
 * @param gridId Grid identifier
 * @returns Full storage key
 */
export declare function getStorageKey(gridId: string): string;
/**
 * Save grid state
 * @param gridId Grid identifier
 * @param state Grid state to save
 * @param adapter Storage adapter to use
 */
export declare function saveGridState(gridId: string, state: GridState, adapter?: StorageAdapter): void;
/**
 * Load grid state
 * @param gridId Grid identifier
 * @param adapter Storage adapter to use
 * @returns Loaded grid state or null
 */
export declare function loadGridState(gridId: string, adapter?: StorageAdapter): Partial<GridState> | null;
/**
 * Remove grid state
 * @param gridId Grid identifier
 * @param adapter Storage adapter to use
 */
export declare function removeGridState(gridId: string, adapter?: StorageAdapter): void;
/**
 * Get all saved grid states
 * @param adapter Storage adapter to use
 * @returns Map of grid ID to state
 */
export declare function getAllGridStates(adapter?: StorageAdapter): Record<string, Partial<GridState>>;
/**
 * Create a custom storage adapter from a function
 * @param saveState Function to save state
 * @returns Custom storage adapter
 */
export declare function createCustomAdapter(saveState: (state: GridState) => void): StorageAdapter;
//# sourceMappingURL=storage.d.ts.map