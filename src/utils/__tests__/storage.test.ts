import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  localStorageAdapter,
  sessionStorageAdapter,
  memoryStorageAdapter,
  getStorageAdapter,
  saveGridState,
  loadGridState,
  removeGridState,
  getAllGridStates,
  createCustomAdapter,
  mergePersistedGridState
} from '@/lib/grid-storage'
import type { GridState } from '@/lib/grid-types'

const mockGridState: GridState = {
  blocks: {
    'block1': {
      id: 'block1',
      type: 'block',
      defaultSize: 300,
      sizeUnit: 'px'
    }
  },
  hiddenBlocks: new Set<string>(),
  activeMode: 'desktop',
  viewport: {
    width: 1024,
    height: 768,
    orientation: 'landscape'
  },
  resize: {
    isDragging: false,
    startPosition: { x: 0, y: 0 },
    initialSize: 0
  }
}

describe('storage utilities', () => {
  beforeEach(() => {
    // Clear all storage before each test
    localStorage.clear()
    sessionStorage.clear()
  })

  describe('localStorageAdapter', () => {
    it('saves and loads data correctly', () => {
      const key = 'test-key'
      const data = { test: 'value' }

      localStorageAdapter.save(key, data)
      expect(localStorageAdapter.load(key)).toEqual(data)
    })

    it('returns null for non-existent keys', () => {
      expect(localStorageAdapter.load('non-existent')).toBe(null)
    })

    it('removes data correctly', () => {
      const key = 'test-key'
      localStorageAdapter.save(key, { test: 'value' })
      localStorageAdapter.remove(key)
      expect(localStorageAdapter.load(key)).toBe(null)
    })

    it('clears only pretty-poly keys', () => {
      localStorage.setItem('other-app-key', 'should-remain')
      localStorage.setItem('pretty-poly-grid-v2-test', 'should-be-removed')

      localStorageAdapter.clear()

      expect(localStorage.getItem('other-app-key')).toBe('should-remain')
      expect(localStorage.getItem('pretty-poly-grid-v2-test')).toBe(null)
    })

    it('handles JSON parsing errors gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      // Manually set invalid JSON
      localStorage.setItem('test-key', 'invalid-json')
      expect(localStorageAdapter.load('test-key')).toBe(null)
      expect(consoleSpy).toHaveBeenCalled()
      consoleSpy.mockRestore()
    })
  })

  describe('sessionStorageAdapter', () => {
    it('works with sessionStorage', () => {
      const key = 'session-test'
      const data = { session: 'data' }

      sessionStorageAdapter.save(key, data)
      expect(sessionStorageAdapter.load(key)).toEqual(data)
    })
  })

  describe('memoryStorageAdapter', () => {
    it('works with in-memory storage', () => {
      const key = 'memory-test'
      const data = { memory: 'data' }

      memoryStorageAdapter.save(key, data)
      expect(memoryStorageAdapter.load(key)).toEqual(data)
    })

    it('clears memory storage correctly', () => {
      memoryStorageAdapter.save('pretty-poly-grid-v2-test', { test: 'data' })
      memoryStorageAdapter.save('other-key', { other: 'data' })

      memoryStorageAdapter.clear()

      expect(memoryStorageAdapter.load('pretty-poly-grid-v2-test')).toBe(null)
      expect(memoryStorageAdapter.load('other-key')).toEqual({ other: 'data' })
    })
  })

  describe('getStorageAdapter', () => {
    it('returns correct adapter for each type', () => {
      expect(getStorageAdapter('localStorage')).toBe(localStorageAdapter)
      expect(getStorageAdapter('sessionStorage')).toBe(sessionStorageAdapter)
      expect(getStorageAdapter('memory')).toBe(memoryStorageAdapter)
    })

    it('falls back to memory adapter when storage unavailable', () => {
      // Mock localStorage as undefined
      const originalLocalStorage = global.localStorage
      // @ts-expect-error - intentionally deleting localStorage to test fallback behavior
      delete global.localStorage

      expect(getStorageAdapter('localStorage')).toBe(memoryStorageAdapter)

      // Restore
      global.localStorage = originalLocalStorage
    })
  })

  describe('saveGridState and loadGridState', () => {
    it('saves and loads grid state correctly', () => {
      const gridId = 'test-grid'

      saveGridState(gridId, mockGridState)
      const loaded = loadGridState(gridId)

      expect(loaded).toEqual({
        blocks: {
          block1: {
            id: 'block1',
            defaultSize: 300
          }
        },
        hiddenBlocks: [],
        activeMode: mockGridState.activeMode
      })
      expect(loaded).not.toHaveProperty('viewport') // Should not persist viewport
    })

    it('returns null for non-existent grid', () => {
      expect(loadGridState('non-existent')).toBe(null)
    })

    it('uses custom adapter when provided', () => {
      const customAdapter = memoryStorageAdapter
      const gridId = 'custom-test'

      saveGridState(gridId, mockGridState, customAdapter)
      const loaded = loadGridState(gridId, customAdapter)

      expect(loaded).toBeDefined()
    })
  })

  describe('removeGridState', () => {
    it('removes grid state correctly', () => {
      const gridId = 'remove-test'

      saveGridState(gridId, mockGridState)
      expect(loadGridState(gridId)).toBeDefined()

      removeGridState(gridId)
      expect(loadGridState(gridId)).toBe(null)
    })
  })

  describe('getAllGridStates', () => {
    it('returns all stored grid states', () => {
      saveGridState('grid1', mockGridState)
      saveGridState('grid2', { ...mockGridState, activeMode: 'mobile' })

      const allStates = getAllGridStates()

      expect(Object.keys(allStates)).toContain('grid1')
      expect(Object.keys(allStates)).toContain('grid2')
      expect(allStates['grid1']).toBeDefined()
      expect(allStates['grid2']).toBeDefined()
    })

    it('returns empty object when no states exist', () => {
      expect(getAllGridStates()).toEqual({})
    })

    it('works with sessionStorage adapter', () => {
      saveGridState('session-grid', mockGridState, sessionStorageAdapter)

      const allStates = getAllGridStates(sessionStorageAdapter)
      expect(allStates['session-grid']).toBeDefined()
    })
  })

  describe('createCustomAdapter', () => {
    it('creates a custom adapter with save function', () => {
      const mockSave = vi.fn()
      const customAdapter = createCustomAdapter(mockSave)

      const testState: GridState = mockGridState
      customAdapter.save('test-key', testState)

      expect(mockSave).toHaveBeenCalledWith(testState)
    })

    it('custom adapter load returns null', () => {
      const customAdapter = createCustomAdapter(() => {})
      expect(customAdapter.load('any-key')).toBe(null)
    })
  })

  describe('mergePersistedGridState', () => {
    it('keeps current config and applies mutable persisted state', () => {
      const configuredBlocks = [
        {
          id: 'block1',
          type: 'block' as const,
          defaultSize: 240,
          minSize: 100,
          sizeUnit: 'px' as const,
          viewType: 'current'
        },
        {
          id: 'block2',
          type: 'block' as const,
          defaultSize: 1,
          sizeUnit: 'fr' as const
        }
      ]

      const merged = mergePersistedGridState(
        {
          blocks: {
            block1: {
              id: 'block1',
              type: 'block',
              defaultSize: 320,
              size: 320,
              viewType: 'persisted',
              tabState: {
                tabs: [{ id: 'tab-1', label: 'Tab 1', viewType: 'detail' }],
                activeTabId: 'tab-1',
                history: ['tab-1'],
                historyIndex: 0,
                scrollOffset: 12
              }
            },
            stale: {
              id: 'stale',
              type: 'block',
              defaultSize: 999
            }
          },
          hiddenBlocks: new Set(['block2', 'stale']),
          activeMode: 'desktop'
        },
        configuredBlocks
      )

      expect(merged.blocks?.block1).toMatchObject({
        id: 'block1',
        defaultSize: 320,
        minSize: 100,
        size: 320,
        sizeUnit: 'px',
        viewType: 'persisted'
      })
      expect(merged.blocks?.block2).toMatchObject(configuredBlocks[1])
      expect(merged.blocks?.stale).toBeUndefined()
      expect(merged.hiddenBlocks).toEqual(new Set(['block2']))
    })

    it('allows collapsible persisted sizes below minSize', () => {
      const merged = mergePersistedGridState(
        {
          blocks: {
            sidebar: {
              id: 'sidebar',
              type: 'block',
              defaultSize: 48,
              size: 48,
              originalDefaultSize: 320
            }
          }
        },
        [
          {
            id: 'sidebar',
            type: 'block',
            defaultSize: 320,
            minSize: 200,
            sizeUnit: 'px',
            collapsible: true,
            collapseTo: 48
          }
        ]
      )

      expect(merged.blocks?.sidebar.defaultSize).toBe(48)
      expect(merged.blocks?.sidebar.size).toBe(48)
      expect(merged.blocks?.sidebar.originalDefaultSize).toBe(320)
    })
  })
})
