import type { BlockConfig, GridState, Tab, TabState } from '../types'

/**
 * Storage utilities for grid state persistence.
 *
 * Pretty Poly persists mutable layout state only. Static block configuration is
 * merged back from the active app configuration when a saved state is loaded.
 */

const STORAGE_KEY_PREFIX = 'pretty-poly-grid-v2-'

type PersistedBlockState = Pick<
  BlockConfig,
  'id' | 'defaultSize' | 'size' | 'originalDefaultSize' | 'viewType' | 'viewState' | 'tabState'
>

type PersistedGridState = {
  blocks?: Record<string, PersistedBlockState>
  hiddenBlocks?: string[]
  activeMode?: string
}

export interface StorageAdapter {
  save: (key: string, data: unknown) => void
  load: (key: string) => unknown
  remove: (key: string) => void
  clear: () => void
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function finiteNumber(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined
}

function persistedHiddenBlocks(value: unknown): Set<string> {
  if (value instanceof Set) {
    return new Set(
      [...value].filter((blockId): blockId is string => typeof blockId === 'string')
    )
  }

  if (Array.isArray(value)) {
    return new Set(
      value.filter((blockId): blockId is string => typeof blockId === 'string')
    )
  }

  return new Set()
}

function sanitizedTab(tab: unknown): Tab | null {
  if (!isRecord(tab) || typeof tab.id !== 'string' || typeof tab.label !== 'string') {
    return null
  }

  return {
    id: tab.id,
    label: tab.label,
    viewType: typeof tab.viewType === 'string' ? tab.viewType : undefined,
    viewState: tab.viewState,
    closable: typeof tab.closable === 'boolean' ? tab.closable : undefined,
    disabled: typeof tab.disabled === 'boolean' ? tab.disabled : undefined,
    isDirty: typeof tab.isDirty === 'boolean' ? tab.isDirty : undefined,
    isPinned: typeof tab.isPinned === 'boolean' ? tab.isPinned : undefined,
    metadata: tab.metadata,
  }
}

function sanitizedTabState(value: unknown): TabState | undefined {
  if (!isRecord(value) || !Array.isArray(value.tabs)) {
    return undefined
  }

  const tabs = value.tabs
    .map((tab) => sanitizedTab(tab))
    .filter((tab): tab is Tab => tab !== null)

  if (tabs.length === 0) {
    return undefined
  }

  const tabIds = new Set(tabs.map((tab) => tab.id))
  const activeTabId =
    typeof value.activeTabId === 'string' && tabIds.has(value.activeTabId)
      ? value.activeTabId
      : tabs[0].id
  const history = Array.isArray(value.history)
    ? value.history.filter((id): id is string => typeof id === 'string' && tabIds.has(id))
    : [activeTabId]
  const normalizedHistory = history.length > 0 ? history : [activeTabId]
  const requestedHistoryIndex = finiteNumber(value.historyIndex) ?? normalizedHistory.length - 1
  const historyIndex = Math.min(
    Math.max(Math.trunc(requestedHistoryIndex), 0),
    normalizedHistory.length - 1
  )

  return {
    tabs,
    activeTabId,
    history: normalizedHistory,
    historyIndex,
    scrollOffset: finiteNumber(value.scrollOffset) ?? 0,
  }
}

function sanitizedBlockState(block: BlockConfig): PersistedBlockState {
  return {
    id: block.id,
    defaultSize: block.defaultSize,
    size: block.size,
    originalDefaultSize: block.originalDefaultSize,
    viewType: block.viewType,
    viewState: block.viewState,
    tabState: block.tabState ? sanitizedTabState(block.tabState) : undefined,
  }
}

function clampBlockSize(
  size: number | undefined,
  configuredBlock: BlockConfig
): number | undefined {
  if (size === undefined) return undefined
  const min = configuredBlock.minSize
  const max = configuredBlock.maxSize
  const lowerBound = min !== undefined && !configuredBlock.collapsible ? min : undefined

  if (lowerBound !== undefined && size < lowerBound) {
    return lowerBound
  }

  if (max !== undefined && size > max) {
    return max
  }

  return size
}

/**
 * Reconcile a persisted grid state with the current block configuration.
 */
export function mergePersistedGridState(
  persistedState: Partial<GridState> | null | undefined,
  configuredBlocks: BlockConfig[]
): Partial<GridState> {
  if (!persistedState) {
    return {}
  }

  const persistedBlocks = isRecord(persistedState.blocks) ? persistedState.blocks : {}
  const configuredBlockIds = new Set(configuredBlocks.map((block) => block.id))
  const mergedBlocks = configuredBlocks.reduce<Record<string, BlockConfig>>((acc, block) => {
    const persistedBlock = persistedBlocks[block.id]

    if (!isRecord(persistedBlock)) {
      acc[block.id] = block
      return acc
    }

    const defaultSize = clampBlockSize(finiteNumber(persistedBlock.defaultSize), block)
    const size = clampBlockSize(finiteNumber(persistedBlock.size), block)
    const originalDefaultSize = clampBlockSize(
      finiteNumber(persistedBlock.originalDefaultSize),
      block
    )

    acc[block.id] = {
      ...block,
      defaultSize: defaultSize ?? block.defaultSize,
      size: size ?? defaultSize ?? block.size ?? block.defaultSize,
      originalDefaultSize:
        originalDefaultSize ?? block.originalDefaultSize ?? block.defaultSize,
      viewType:
        typeof persistedBlock.viewType === 'string' ? persistedBlock.viewType : block.viewType,
      viewState: Object.prototype.hasOwnProperty.call(persistedBlock, 'viewState')
        ? persistedBlock.viewState
        : block.viewState,
      tabState: sanitizedTabState(persistedBlock.tabState) ?? block.tabState,
    }

    return acc
  }, {})

  return {
    blocks: mergedBlocks,
    hiddenBlocks: new Set(
      [...persistedHiddenBlocks(persistedState.hiddenBlocks)].filter((blockId) =>
        configuredBlockIds.has(blockId)
      )
    ),
    activeMode: typeof persistedState.activeMode === 'string' ? persistedState.activeMode : undefined,
  }
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
    for (const key of memoryStorage.keys()) {
      if (key.startsWith(STORAGE_KEY_PREFIX)) {
        memoryStorage.delete(key)
      }
    }
  }
}

/**
 * Get appropriate storage adapter
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
 */
export function getStorageKey(gridId: string): string {
  return `${STORAGE_KEY_PREFIX}${gridId}`
}

/**
 * Save grid state
 */
export function saveGridState(
  gridId: string,
  state: GridState,
  adapter: StorageAdapter = localStorageAdapter
): void {
  const key = getStorageKey(gridId)
  const persistableState: PersistedGridState = {
    blocks: Object.fromEntries(
      Object.entries(state.blocks).map(([id, block]) => [id, sanitizedBlockState(block)])
    ),
    hiddenBlocks: [...state.hiddenBlocks],
    activeMode: state.activeMode,
  }

  adapter.save(key, persistableState)
}

/**
 * Load grid state
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
 */
export function getAllGridStates(
  adapter: StorageAdapter = localStorageAdapter
): Record<string, Partial<GridState>> {
  const states: Record<string, Partial<GridState>> = {}

  try {
    if (adapter === localStorageAdapter && typeof localStorage !== 'undefined') {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(STORAGE_KEY_PREFIX)) {
          const gridId = key.substring(STORAGE_KEY_PREFIX.length)
          const state = adapter.load(key)
          if (state) {
            states[gridId] = state as Partial<GridState>
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
            states[gridId] = state as Partial<GridState>
          }
        }
      }
    } else if (adapter === memoryStorageAdapter) {
      for (const key of memoryStorage.keys()) {
        if (key.startsWith(STORAGE_KEY_PREFIX)) {
          const gridId = key.substring(STORAGE_KEY_PREFIX.length)
          const state = adapter.load(key)
          if (state) {
            states[gridId] = state as Partial<GridState>
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
 */
export function createCustomAdapter(saveState: (state: GridState) => void): StorageAdapter {
  return {
    save: (_key: string, data: unknown) => saveState(data as GridState),
    load: () => null,
    remove: () => {},
    clear: () => {}
  }
}
