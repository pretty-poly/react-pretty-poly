import type { GridState } from "@/lib/grid-types"

/**
 * Storage utilities for grid state persistence
 */

const STORAGE_KEY_PREFIX = 'pretty-poly-grid-'

export interface StorageAdapter {
  save: (key: string, data: unknown) => void
  load: (key: string) => unknown
  remove: (key: string) => void
  clear: () => void
}

/**
 * localStorage adapter
 */
export const localStorageAdapter: StorageAdapter = {
  save: (key: string, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.warn('Failed to save to localStorage:', error)
    }
  },

  load: (key: string) => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) as unknown : null
    } catch (error) {
      console.warn('Failed to load from localStorage:', error)
      return null
    }
  },

  remove: (key: string) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error)
    }
  },

  clear: () => {
    try {
      // Remove only our keys
      const keysToRemove = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(STORAGE_KEY_PREFIX)) {
          keysToRemove.push(key)
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.warn('Failed to clear localStorage:', error)
    }
  }
}

/**
 * sessionStorage adapter
 */
export const sessionStorageAdapter: StorageAdapter = {
  save: (key: string, data: unknown) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.warn('Failed to save to sessionStorage:', error)
    }
  },

  load: (key: string) => {
    try {
      const stored = sessionStorage.getItem(key)
      return stored ? JSON.parse(stored) as unknown : null
    } catch (error) {
      console.warn('Failed to load from sessionStorage:', error)
      return null
    }
  },

  remove: (key: string) => {
    try {
      sessionStorage.removeItem(key)
    } catch (error) {
      console.warn('Failed to remove from sessionStorage:', error)
    }
  },

  clear: () => {
    try {
      // Remove only our keys
      const keysToRemove = []
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i)
        if (key && key.startsWith(STORAGE_KEY_PREFIX)) {
          keysToRemove.push(key)
        }
      }
      keysToRemove.forEach(key => sessionStorage.removeItem(key))
    } catch (error) {
      console.warn('Failed to clear sessionStorage:', error)
    }
  }
}

/**
 * Memory adapter (for testing or when storage is not available)
 */
const memoryStorage = new Map<string, unknown>()

export const memoryStorageAdapter: StorageAdapter = {
  save: (key: string, data: unknown) => {
    memoryStorage.set(key, data)
  },

  load: (key: string) => {
    return memoryStorage.get(key) || null
  },

  remove: (key: string) => {
    memoryStorage.delete(key)
  },

  clear: () => {
    // Remove only our keys
    for (const key of memoryStorage.keys()) {
      if (key.startsWith(STORAGE_KEY_PREFIX)) {
        memoryStorage.delete(key)
      }
    }
  }
}

/**
 * Get appropriate storage adapter
 * @param type Storage type preference
 * @returns Storage adapter
 */
export function getStorageAdapter(type: 'localStorage' | 'sessionStorage' | 'memory'): StorageAdapter {
  switch (type) {
    case 'localStorage':
      return typeof localStorage !== 'undefined' ? localStorageAdapter : memoryStorageAdapter
    case 'sessionStorage':
      return typeof sessionStorage !== 'undefined' ? sessionStorageAdapter : memoryStorageAdapter
    case 'memory':
    default:
      return memoryStorageAdapter
  }
}

/**
 * Generate storage key
 * @param gridId Grid identifier
 * @returns Full storage key
 */
export function getStorageKey(gridId: string): string {
  return `${STORAGE_KEY_PREFIX}${gridId}`
}

/**
 * Save grid state
 * @param gridId Grid identifier
 * @param state Grid state to save
 * @param adapter Storage adapter to use
 */
export function saveGridState(
  gridId: string,
  state: GridState,
  adapter: StorageAdapter = localStorageAdapter
): void {
  const key = getStorageKey(gridId)

  // Only save the parts we need to persist
  const persistableState = {
    blocks: state.blocks,
    activeMode: state.activeMode,
    // Don't persist viewport or transient state like activeDivider
  }

  adapter.save(key, persistableState)
}

/**
 * Load grid state
 * @param gridId Grid identifier
 * @param adapter Storage adapter to use
 * @returns Loaded grid state or null
 */
export function loadGridState(
  gridId: string,
  adapter: StorageAdapter = localStorageAdapter
): Partial<GridState> | null {
  const key = getStorageKey(gridId)
  return adapter.load(key) as Partial<GridState> | null
}

/**
 * Remove grid state
 * @param gridId Grid identifier
 * @param adapter Storage adapter to use
 */
export function removeGridState(
  gridId: string,
  adapter: StorageAdapter = localStorageAdapter
): void {
  const key = getStorageKey(gridId)
  adapter.remove(key)
}

/**
 * Get all saved grid states
 * @param adapter Storage adapter to use
 * @returns Map of grid ID to state
 */
export function getAllGridStates(
  adapter: StorageAdapter = localStorageAdapter
): Record<string, Partial<GridState>> {
  const states: Record<string, Partial<GridState>> = {}

  try {
    // This is a bit hacky but works for localStorage/sessionStorage
    if (adapter === localStorageAdapter && typeof localStorage !== 'undefined') {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(STORAGE_KEY_PREFIX)) {
          const gridId = key.substring(STORAGE_KEY_PREFIX.length)
          const state = adapter.load(key)
          if (state) {
            states[gridId] = state
          }
        }
      }
    } else if (adapter === sessionStorageAdapter && typeof sessionStorage !== 'undefined') {
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i)
        if (key && key.startsWith(STORAGE_KEY_PREFIX)) {
          const gridId = key.substring(STORAGE_KEY_PREFIX.length)
          const state = adapter.load(key)
          if (state) {
            states[gridId] = state
          }
        }
      }
    } else if (adapter === memoryStorageAdapter) {
      for (const key of memoryStorage.keys()) {
        if (key.startsWith(STORAGE_KEY_PREFIX)) {
          const gridId = key.substring(STORAGE_KEY_PREFIX.length)
          const state = adapter.load(key)
          if (state) {
            states[gridId] = state
          }
        }
      }
    }
  } catch (error) {
    console.warn('Failed to get all grid states:', error)
  }

  return states
}

/**
 * Create a custom storage adapter from a function
 * @param saveState Function to save state
 * @returns Custom storage adapter
 */
export function createCustomAdapter(saveState: (state: GridState) => void): StorageAdapter {
  return {
    save: (_key: string, data: unknown) => saveState(data as GridState),
    load: () => null, // Custom adapters typically don't load
    remove: () => {},
    clear: () => {}
  }
}