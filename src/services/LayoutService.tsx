import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import type { BlockConfig } from '../types'

/**
 * Layout configuration that can be saved/loaded
 * Combines block structure with view type assignments
 */
export interface LayoutConfiguration {
  id: string
  name: string
  blocks: BlockConfig[]
  viewTypes: Record<string, string> // blockId -> viewTypeId
  metadata?: {
    createdAt?: string
    description?: string
    tags?: string[]
  }
}

/**
 * LayoutService manages layout state and view type assignments
 * This is the glue between ViewRegistry (what views exist) and Grid (where they go)
 */
export class LayoutService {
  private viewTypes: Record<string, string> = {} // blockId -> viewTypeId
  private layouts = new Map<string, LayoutConfiguration>()
  private changeListeners = new Set<(viewTypes: Record<string, string>) => void>()
  private layoutListeners = new Set<() => void>()

  /**
   * Set which view type a block should display
   */
  setBlockViewType(blockId: string, viewTypeId: string): void {
    const previousType = this.viewTypes[blockId]

    if (previousType === viewTypeId) {
      return // No change
    }

    this.viewTypes[blockId] = viewTypeId
    this.notifyChange()
  }

  /**
   * Get the current view type for a block
   */
  getBlockViewType(blockId: string): string | undefined {
    return this.viewTypes[blockId]
  }

  /**
   * Get all current view type assignments
   */
  getAllViewTypes(): Record<string, string> {
    return { ...this.viewTypes }
  }

  /**
   * Set multiple view type assignments at once
   */
  setViewTypes(viewTypes: Record<string, string>): void {
    this.viewTypes = { ...viewTypes }
    this.notifyChange()
  }

  /**
   * Clear view type assignment for a block
   */
  clearBlockViewType(blockId: string): void {
    delete this.viewTypes[blockId]
    this.notifyChange()
  }

  /**
   * Clear all view type assignments
   */
  clearAllViewTypes(): void {
    this.viewTypes = {}
    this.notifyChange()
  }

  /**
   * Save a layout configuration
   */
  saveLayout(layout: LayoutConfiguration): void {
    this.layouts.set(layout.id, {
      ...layout,
      metadata: {
        ...layout.metadata,
        createdAt: layout.metadata?.createdAt || new Date().toISOString(),
      },
    })
    this.notifyLayoutChange()
  }

  /**
   * Load a layout configuration
   * Returns the layout if found
   */
  loadLayout(layoutId: string): LayoutConfiguration | undefined {
    return this.layouts.get(layoutId)
  }

  /**
   * Apply a saved layout (sets current view types)
   */
  applyLayout(layoutId: string): boolean {
    const layout = this.layouts.get(layoutId)

    if (!layout) {
      console.warn(`Layout not found: ${layoutId}`)
      return false
    }

    this.setViewTypes(layout.viewTypes)
    return true
  }

  /**
   * Delete a saved layout
   */
  deleteLayout(layoutId: string): boolean {
    const deleted = this.layouts.delete(layoutId)
    if (deleted) {
      this.notifyLayoutChange()
    }
    return deleted
  }

  /**
   * Get all saved layouts
   */
  getAllLayouts(): LayoutConfiguration[] {
    return Array.from(this.layouts.values()).sort((a, b) => {
      const dateA = new Date(a.metadata?.createdAt || 0)
      const dateB = new Date(b.metadata?.createdAt || 0)
      return dateB.getTime() - dateA.getTime() // Newest first
    })
  }

  /**
   * Check if a layout exists
   */
  hasLayout(layoutId: string): boolean {
    return this.layouts.has(layoutId)
  }

  /**
   * Create a layout configuration from current state
   */
  createLayoutFromCurrentState(
    id: string,
    name: string,
    blocks: BlockConfig[],
    metadata?: LayoutConfiguration['metadata']
  ): LayoutConfiguration {
    return {
      id,
      name,
      blocks: [...blocks],
      viewTypes: this.getAllViewTypes(),
      metadata,
    }
  }

  /**
   * Subscribe to view type changes
   * @returns Unsubscribe function
   */
  onViewTypesChange(listener: (viewTypes: Record<string, string>) => void): () => void {
    this.changeListeners.add(listener)
    return () => this.changeListeners.delete(listener)
  }

  /**
   * Subscribe to saved layout changes (add/remove/update layouts)
   * @returns Unsubscribe function
   */
  onLayoutsChange(listener: () => void): () => void {
    this.layoutListeners.add(listener)
    return () => this.layoutListeners.delete(listener)
  }

  /**
   * Get count of saved layouts
   */
  get layoutCount(): number {
    return this.layouts.size
  }

  /**
   * Clear all saved layouts
   */
  clearAllLayouts(): void {
    this.layouts.clear()
    this.notifyLayoutChange()
  }

  /**
   * Export layouts as JSON
   */
  exportLayouts(): string {
    const layouts = Array.from(this.layouts.values())
    return JSON.stringify(layouts, null, 2)
  }

  /**
   * Import layouts from JSON
   */
  importLayouts(json: string): number {
    try {
      const layouts = JSON.parse(json) as LayoutConfiguration[]
      let imported = 0

      for (const layout of layouts) {
        if (layout.id && layout.name && layout.blocks && layout.viewTypes) {
          this.saveLayout(layout)
          imported++
        }
      }

      return imported
    } catch (error) {
      console.error('Error importing layouts:', error)
      return 0
    }
  }

  private notifyChange(): void {
    const viewTypes = this.getAllViewTypes()
    this.changeListeners.forEach(listener => listener(viewTypes))
  }

  private notifyLayoutChange(): void {
    this.layoutListeners.forEach(listener => listener())
  }
}

/**
 * React Context for LayoutService
 */
const LayoutServiceContext = createContext<LayoutService | null>(null)

/**
 * Hook to access the LayoutService
 * @throws Error if used outside LayoutServiceProvider
 */
export function useLayoutService(): LayoutService {
  const service = useContext(LayoutServiceContext)
  if (!service) {
    throw new Error('useLayoutService must be used within LayoutServiceProvider')
  }
  return service
}

/**
 * Hook to get the current view type for a block
 */
export function useBlockViewType(blockId: string): string | undefined {
  const service = useLayoutService()
  const [viewType, setViewType] = useState(() => service.getBlockViewType(blockId))

  useEffect(() => {
    const updateViewType = (viewTypes: Record<string, string>) => {
      setViewType(viewTypes[blockId])
    }

    const unsubscribe = service.onViewTypesChange(updateViewType)
    return unsubscribe
  }, [service, blockId])

  return viewType
}

/**
 * Hook to get all view type assignments with automatic updates
 */
export function useViewTypes(): Record<string, string> {
  const service = useLayoutService()
  const [viewTypes, setViewTypes] = useState(() => service.getAllViewTypes())

  useEffect(() => {
    const unsubscribe = service.onViewTypesChange(setViewTypes)
    return unsubscribe
  }, [service])

  return viewTypes
}

/**
 * Hook to set a block's view type
 * Returns a memoized callback
 */
export function useSetBlockViewType(): (blockId: string, viewTypeId: string) => void {
  const service = useLayoutService()

  return useCallback(
    (blockId: string, viewTypeId: string) => {
      service.setBlockViewType(blockId, viewTypeId)
    },
    [service]
  )
}

/**
 * Hook to get all saved layouts with automatic updates
 */
export function useLayouts(): LayoutConfiguration[] {
  const service = useLayoutService()
  const [layouts, setLayouts] = useState(() => service.getAllLayouts())

  useEffect(() => {
    const updateLayouts = () => {
      setLayouts(service.getAllLayouts())
    }

    const unsubscribe = service.onLayoutsChange(updateLayouts)
    return unsubscribe
  }, [service])

  return layouts
}

/**
 * Hook to save current layout state
 * Returns a memoized callback
 */
export function useSaveLayout(): (
  id: string,
  name: string,
  blocks: BlockConfig[],
  metadata?: LayoutConfiguration['metadata']
) => void {
  const service = useLayoutService()

  return useCallback(
    (id: string, name: string, blocks: BlockConfig[], metadata?: LayoutConfiguration['metadata']) => {
      const layout = service.createLayoutFromCurrentState(id, name, blocks, metadata)
      service.saveLayout(layout)
    },
    [service]
  )
}

/**
 * Hook to load and apply a saved layout
 * Returns a memoized callback
 */
export function useApplyLayout(): (layoutId: string) => boolean {
  const service = useLayoutService()

  return useCallback(
    (layoutId: string) => {
      return service.applyLayout(layoutId)
    },
    [service]
  )
}

/**
 * Provider component for LayoutService
 */
export interface LayoutServiceProviderProps {
  children: React.ReactNode
  /** Optional pre-configured service instance */
  service?: LayoutService
  /** Initial view type assignments */
  initialViewTypes?: Record<string, string>
}

export function LayoutServiceProvider({
  children,
  service: providedService,
  initialViewTypes,
}: LayoutServiceProviderProps) {
  const [service] = useState(() => {
    const svc = providedService ?? new LayoutService()
    if (initialViewTypes) {
      svc.setViewTypes(initialViewTypes)
    }
    return svc
  })

  return (
    <LayoutServiceContext.Provider value={service}>
      {children}
    </LayoutServiceContext.Provider>
  )
}
