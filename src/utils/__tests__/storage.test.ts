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
  createCustomAdapter
} from '../storage'
import type { GridState } from '../../types'

const mockGridState: GridState = {
  blocks: {
    'block1': {
      id: 'block1',
      type: 'block',
      defaultSize: 300,
      sizeUnit: 'px'
    }
  },
  activeMode: 'desktop',
  viewport: {
    width: 1024,
    height: 768,
    orientation: 'landscape'
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
      localStorage.setItem('pretty-poly-grid-test', 'should-be-removed')

      localStorageAdapter.clear()

      expect(localStorage.getItem('other-app-key')).toBe('should-remain')
      expect(localStorage.getItem('pretty-poly-grid-test')).toBe(null)
    })

    it('handles JSON parsing errors gracefully', () => {
      // Manually set invalid JSON
      localStorage.setItem('test-key', 'invalid-json')
      expect(localStorageAdapter.load('test-key')).toBe(null)
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
      memoryStorageAdapter.save('pretty-poly-grid-test', { test: 'data' })
      memoryStorageAdapter.save('other-key', { other: 'data' })

      memoryStorageAdapter.clear()

      expect(memoryStorageAdapter.load('pretty-poly-grid-test')).toBe(null)
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
      // @ts-ignore
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
        blocks: mockGridState.blocks,
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
})