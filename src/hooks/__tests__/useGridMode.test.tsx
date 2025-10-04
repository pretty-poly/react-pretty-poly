import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useGridMode } from '../useGridMode'
import { setViewportSize } from '../../test/test-utils'
import type { ResponsiveModes } from '../../types'

// Mock window dimensions
const mockViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })
}

const customModes: ResponsiveModes = {
  small: { type: 'stack', breakpoint: 0, maxWidth: 480 },
  medium: { type: 'tabs', breakpoint: 481, minWidth: 481, maxWidth: 768 },
  large: { type: 'grid', breakpoint: 769, minWidth: 769 }
}

describe('useGridMode', () => {
  beforeEach(() => {
    mockViewport(1024, 768) // Default desktop viewport
  })

  describe('default behavior', () => {
    it('initializes with desktop mode for large screens', () => {
      mockViewport(1024, 768)
      const { result } = renderHook(() => useGridMode())

      expect(result.current.activeMode).toBe('desktop')
      expect(result.current.currentLayoutType).toBe('grid')
    })

    it('initializes with mobile mode for small screens', () => {
      mockViewport(600, 800)
      const { result } = renderHook(() => useGridMode())

      expect(result.current.activeMode).toBe('mobile')
      expect(result.current.currentLayoutType).toBe('dock')
    })

    it('initializes with tablet mode for medium screens', () => {
      mockViewport(800, 600)
      const { result } = renderHook(() => useGridMode())

      expect(result.current.activeMode).toBe('tablet')
      expect(result.current.currentLayoutType).toBe('tabs')
    })
  })

  describe('custom modes', () => {
    it('uses custom mode configuration', () => {
      mockViewport(500, 800)
      const { result } = renderHook(() => useGridMode(customModes))

      expect(result.current.activeMode).toBe('medium')
      expect(result.current.currentLayoutType).toBe('tabs')
    })

    it('falls back to first mode if no matches', () => {
      mockViewport(2000, 1000) // Very large screen
      const { result } = renderHook(() => useGridMode(customModes))

      expect(result.current.activeMode).toBe('large')
    })
  })

  describe('viewport changes', () => {
    it('updates mode when viewport changes', () => {
      const { result } = renderHook(() => useGridMode())

      // Start desktop
      expect(result.current.activeMode).toBe('desktop')

      // Change to mobile
      act(() => {
        setViewportSize(600, 800)
      })

      expect(result.current.activeMode).toBe('mobile')
    })

    it('updates orientation correctly', () => {
      mockViewport(800, 600) // Landscape
      const { result } = renderHook(() => useGridMode())

      expect(result.current.viewport.orientation).toBe('landscape')

      // Change to portrait
      act(() => {
        setViewportSize(600, 800)
      })

      expect(result.current.viewport.orientation).toBe('portrait')
    })
  })

  describe('forced mode', () => {
    it('allows forcing a specific mode', () => {
      const { result } = renderHook(() => useGridMode())

      expect(result.current.activeMode).toBe('desktop')

      act(() => {
        result.current.setMode('mobile')
      })

      expect(result.current.activeMode).toBe('mobile')
      expect(result.current.isForced).toBe(true)
    })

    it('clears forced mode when set to null', () => {
      const { result } = renderHook(() => useGridMode())

      act(() => {
        result.current.setMode('mobile')
      })

      expect(result.current.isForced).toBe(true)

      act(() => {
        result.current.setMode(null)
      })

      expect(result.current.isForced).toBe(false)
      expect(result.current.activeMode).toBe('desktop') // Back to viewport-based
    })

    it('warns when trying to set non-existent mode', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const { result } = renderHook(() => useGridMode())

      act(() => {
        result.current.setMode('non-existent')
      })

      expect(consoleSpy).toHaveBeenCalledWith('Mode "non-existent" not found in configuration')
      consoleSpy.mockRestore()
    })
  })

  describe('feature support', () => {
    it('correctly identifies grid mode features', () => {
      mockViewport(1024, 768)
      const { result } = renderHook(() => useGridMode())

      expect(result.current.supportsFeature('resizing')).toBe(true)
      expect(result.current.supportsFeature('dividers')).toBe(true)
      expect(result.current.supportsFeature('collapse')).toBe(true)
      expect(result.current.supportsFeature('tabs')).toBe(false)
      expect(result.current.supportsFeature('dock')).toBe(false)
    })

    it('correctly identifies dock mode features', () => {
      mockViewport(600, 800)
      const { result } = renderHook(() => useGridMode())

      expect(result.current.supportsFeature('dock')).toBe(true)
      expect(result.current.supportsFeature('resizing')).toBe(false)
      expect(result.current.supportsFeature('dividers')).toBe(false)
    })

    it('correctly identifies sidebar mode features', () => {
      mockViewport(800, 600)
      const { result } = renderHook(() => useGridMode())

      expect(result.current.supportsFeature('resizing')).toBe(false)
      expect(result.current.supportsFeature('collapse')).toBe(false)
      expect(result.current.supportsFeature('dividers')).toBe(false)
    })
  })

  describe('mode checking', () => {
    it('correctly identifies current mode', () => {
      const { result } = renderHook(() => useGridMode())

      expect(result.current.isMode('desktop')).toBe(true)
      expect(result.current.isMode('mobile')).toBe(false)
      expect(result.current.isMode('tablet')).toBe(false)
    })
  })

  describe('available modes', () => {
    it('returns all available mode names', () => {
      const { result } = renderHook(() => useGridMode(customModes))

      expect(result.current.availableModes).toEqual(['small', 'medium', 'large'])
    })
  })

  describe('breakpoint info', () => {
    it('provides breakpoint information', () => {
      mockViewport(800, 600) // Tablet mode
      const { result } = renderHook(() => useGridMode())

      const { breakpointInfo } = result.current

      expect(breakpointInfo.current).toBe('tablet')
      expect(breakpointInfo.currentBreakpoint).toBe(768)
      expect(breakpointInfo.nextMode).toBe('desktop')
      expect(breakpointInfo.nextBreakpoint).toBe(1024)
      expect(breakpointInfo.prevMode).toBe('mobile')
      expect(breakpointInfo.prevBreakpoint).toBe(0)
      expect(breakpointInfo.isSmallest).toBe(false)
      expect(breakpointInfo.isLargest).toBe(false)
    })

    it('identifies smallest and largest modes', () => {
      mockViewport(600, 800) // Mobile mode
      const { result } = renderHook(() => useGridMode())

      expect(result.current.breakpointInfo.isSmallest).toBe(true)
      expect(result.current.breakpointInfo.isLargest).toBe(false)

      act(() => {
        setViewportSize(1200, 800) // Desktop mode
      })

      expect(result.current.breakpointInfo.isSmallest).toBe(false)
      expect(result.current.breakpointInfo.isLargest).toBe(true)
    })
  })

  describe('custom matcher', () => {
    it('uses custom matcher function', () => {
      const modesWithMatcher: ResponsiveModes = {
        portrait: {
          type: 'stack',
          matcher: (viewport) => viewport.orientation === 'portrait'
        },
        landscape: {
          type: 'grid',
          matcher: (viewport) => viewport.orientation === 'landscape'
        }
      }

      mockViewport(600, 800) // Portrait
      const { result } = renderHook(() => useGridMode(modesWithMatcher))

      expect(result.current.activeMode).toBe('portrait')
      expect(result.current.currentLayoutType).toBe('stack')

      act(() => {
        setViewportSize(800, 600) // Landscape
      })

      expect(result.current.activeMode).toBe('landscape')
      expect(result.current.currentLayoutType).toBe('grid')
    })
  })
})