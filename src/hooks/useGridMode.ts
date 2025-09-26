import { useState, useEffect, useCallback, useMemo } from 'react'
import type { ResponsiveModes, LayoutMode, ViewportInfo } from '../types'

/**
 * Default responsive mode configurations
 */
export const defaultModes: ResponsiveModes = {
  mobile: {
    type: 'dock',
    breakpoint: 0,
    maxWidth: 767
  },
  tablet: {
    type: 'sidebar',
    breakpoint: 768,
    minWidth: 768,
    maxWidth: 1023
  },
  desktop: {
    type: 'grid',
    breakpoint: 1024,
    minWidth: 1024
  }
}

/**
 * Hook for managing responsive grid modes
 */
export function useGridMode(modes: ResponsiveModes = defaultModes) {
  const [viewport, setViewport] = useState<ViewportInfo>(() => {
    if (typeof window === 'undefined') {
      return { width: 1024, height: 768, orientation: 'landscape' }
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    }
  })

  const [forcedMode, setForcedMode] = useState<string | null>(null)

  /**
   * Update viewport information
   */
  const updateViewport = useCallback(() => {
    if (typeof window === 'undefined') return

    const newViewport: ViewportInfo = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    }

    setViewport(newViewport)
  }, [])

  /**
   * Find the active mode based on current viewport and modes configuration
   */
  const activeMode = useMemo(() => {
    if (forcedMode && modes[forcedMode]) {
      return forcedMode
    }

    // Find the best matching mode
    const matchingModes = Object.entries(modes).filter(([_, config]) => {
      // If mode has a custom matcher, use it
      if (config.matcher) {
        return config.matcher(viewport)
      }

      // Otherwise use breakpoint logic
      const matchesMin = !config.minWidth || viewport.width >= config.minWidth
      const matchesMax = !config.maxWidth || viewport.width <= config.maxWidth

      return matchesMin && matchesMax
    })

    // Sort by specificity (modes with both min and max are more specific)
    matchingModes.sort(([, a], [, b]) => {
      const aSpecific = (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0)
      const bSpecific = (b.minWidth ? 1 : 0) + (b.maxWidth ? 1 : 0)
      return bSpecific - aSpecific
    })

    // Return the most specific matching mode, or fall back to first available
    return matchingModes[0]?.[0] || Object.keys(modes)[0] || 'desktop'
  }, [viewport, modes, forcedMode])

  /**
   * Get the current mode configuration
   */
  const currentModeConfig = useMemo(() => {
    return modes[activeMode]
  }, [modes, activeMode])

  /**
   * Get the current layout type
   */
  const currentLayoutType = useMemo(() => {
    return currentModeConfig?.type || 'grid'
  }, [currentModeConfig])

  /**
   * Force a specific mode (useful for testing or user preference)
   */
  const setMode = useCallback((modeName: string | null) => {
    if (modeName && !modes[modeName]) {
      console.warn(`Mode "${modeName}" not found in configuration`)
      return
    }
    setForcedMode(modeName)
  }, [modes])

  /**
   * Check if a specific mode is currently active
   */
  const isMode = useCallback((modeName: string) => {
    return activeMode === modeName
  }, [activeMode])

  /**
   * Get all available mode names
   */
  const availableModes = useMemo(() => {
    return Object.keys(modes)
  }, [modes])

  /**
   * Check if the current mode supports a specific feature
   */
  const supportsFeature = useCallback((feature: 'resizing' | 'dividers' | 'collapse' | 'tabs' | 'dock'): boolean => {
    switch (currentLayoutType) {
      case 'grid':
        return ['resizing', 'dividers', 'collapse'].includes(feature)
      case 'sidebar':
        return ['resizing', 'collapse'].includes(feature)
      case 'tabs':
        return feature === 'tabs'
      case 'dock':
        return feature === 'dock'
      case 'stack':
      case 'accordion':
        return false
      default:
        return false
    }
  }, [currentLayoutType])

  /**
   * Get responsive breakpoint information
   */
  const breakpointInfo = useMemo(() => {
    const sortedModes = Object.entries(modes)
      .map(([name, config]) => ({ name, ...config }))
      .sort((a, b) => (a.breakpoint || 0) - (b.breakpoint || 0))

    const currentIndex = sortedModes.findIndex(mode => mode.name === activeMode)
    const nextMode = sortedModes[currentIndex + 1]
    const prevMode = sortedModes[currentIndex - 1]

    return {
      current: activeMode,
      currentBreakpoint: currentModeConfig?.breakpoint || 0,
      nextMode: nextMode?.name,
      nextBreakpoint: nextMode?.breakpoint,
      prevMode: prevMode?.name,
      prevBreakpoint: prevMode?.breakpoint,
      isSmallest: currentIndex === 0,
      isLargest: currentIndex === sortedModes.length - 1
    }
  }, [modes, activeMode, currentModeConfig])

  // Set up viewport change listener
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => updateViewport()
    const handleOrientationChange = () => {
      // Delay to allow orientation change to complete
      setTimeout(updateViewport, 100)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [updateViewport])

  return {
    // Current state
    viewport,
    activeMode,
    currentModeConfig,
    currentLayoutType: currentLayoutType as LayoutMode,

    // Mode management
    setMode,
    isMode,
    availableModes,

    // Features and capabilities
    supportsFeature,
    breakpointInfo,

    // Utilities
    isForced: !!forcedMode,
    updateViewport
  }
}