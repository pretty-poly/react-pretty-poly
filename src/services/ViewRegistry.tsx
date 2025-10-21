/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'

/**
 * Describes a type of view that can be displayed in a block
 * Inspired by Blender's Area concept - blocks can display any registered view type
 */
export interface ViewDescriptor {
  /** Unique identifier for this view type */
  id: string

  /** Display name for the view type */
  title: string

  /** Optional icon component */
  icon?: React.ComponentType<{ className?: string }>

  /** The React component to render for this view */
  component: React.ComponentType<ViewProps>

  /** Category for organization (e.g., 'editor', 'tools', 'data') */
  category?: string

  /** Display order in menus/lists */
  order?: number

  /** Default size when created (in current size unit) */
  defaultSize?: number

  /** Context expression for conditional availability (future feature) */
  when?: string
}

/**
 * Props passed to view components when rendered
 */
export interface ViewProps {
  /** ID of the view type being rendered */
  viewId: string

  /** ID of the block containing this view */
  blockId?: string

  /** Callback when view wants to be closed */
  onClose?: () => void

  /** Callback when view receives focus */
  onFocus?: () => void

  /** Additional props can be passed through */
  [key: string]: unknown
}

/**
 * ViewRegistry manages the registration and lookup of view types
 * This is the core primitive that enables polymorphic blocks
 */
export class ViewRegistry {
  private views = new Map<string, ViewDescriptor>()
  private listeners = new Set<() => void>()

  /**
   * Register a new view type
   * @returns Disposable function to unregister the view
   */
  registerView(descriptor: ViewDescriptor): () => void {
    if (this.views.has(descriptor.id)) {
      console.warn(`View type "${descriptor.id}" is already registered. Overwriting.`)
    }

    this.views.set(descriptor.id, descriptor)
    this.notify()

    // Return disposable
    return () => {
      this.views.delete(descriptor.id)
      this.notify()
    }
  }

  /**
   * Register multiple views at once
   * @returns Disposable function to unregister all views
   */
  registerViews(descriptors: ViewDescriptor[]): () => void {
    const disposables = descriptors.map(d => this.registerView(d))
    return () => disposables.forEach(dispose => dispose())
  }

  /**
   * Get a specific view descriptor by ID
   */
  getView(id: string): ViewDescriptor | undefined {
    return this.views.get(id)
  }

  /**
   * Get all registered view descriptors, optionally sorted by order
   */
  getAllViews(sorted = true): ViewDescriptor[] {
    const views = Array.from(this.views.values())

    if (sorted) {
      return views.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    }

    return views
  }

  /**
   * Get views filtered by category
   */
  getViewsByCategory(category: string): ViewDescriptor[] {
    return this.getAllViews().filter(v => v.category === category)
  }

  /**
   * Get all unique categories
   */
  getCategories(): string[] {
    const categories = new Set<string>()
    this.views.forEach(view => {
      if (view.category) {
        categories.add(view.category)
      }
    })
    return Array.from(categories).sort()
  }

  /**
   * Check if a view type exists
   */
  hasView(id: string): boolean {
    return this.views.has(id)
  }

  /**
   * Subscribe to registry changes (when views are added/removed)
   * @returns Unsubscribe function
   */
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  /**
   * Get count of registered views
   */
  get count(): number {
    return this.views.size
  }

  /**
   * Clear all registered views
   */
  clear(): void {
    this.views.clear()
    this.notify()
  }

  private notify(): void {
    this.listeners.forEach(listener => listener())
  }
}

/**
 * React Context for ViewRegistry
 */
const ViewRegistryContext = createContext<ViewRegistry | null>(null)

/**
 * Hook to access the ViewRegistry
 * @throws Error if used outside ViewRegistryProvider
 */
export function useViewRegistry(): ViewRegistry {
  const registry = useContext(ViewRegistryContext)
  if (!registry) {
    throw new Error('useViewRegistry must be used within ViewRegistryProvider')
  }
  return registry
}

/**
 * Hook to access a specific view descriptor
 */
export function useViewDescriptor(viewId: string): ViewDescriptor | undefined {
  const registry = useViewRegistry()
  const [descriptor, setDescriptor] = useState(() => registry.getView(viewId))

  useEffect(() => {
    // Update if view changes
    const unsubscribe = registry.subscribe(() => {
      setDescriptor(registry.getView(viewId))
    })
    return unsubscribe
  }, [registry, viewId])

  return descriptor
}

/**
 * Hook to get all views, with optional filtering
 */
export function useViews(options?: {
  category?: string
  sorted?: boolean
}): ViewDescriptor[] {
  const registry = useViewRegistry()
  const [views, setViews] = useState(() => {
    if (options?.category) {
      return registry.getViewsByCategory(options.category)
    }
    return registry.getAllViews(options?.sorted ?? true)
  })

  useEffect(() => {
    const updateViews = () => {
      if (options?.category) {
        setViews(registry.getViewsByCategory(options.category))
      } else {
        setViews(registry.getAllViews(options?.sorted ?? true))
      }
    }

    const unsubscribe = registry.subscribe(updateViews)
    return unsubscribe
  }, [registry, options?.category, options?.sorted])

  return views
}

/**
 * Provider component for ViewRegistry
 */
export interface ViewRegistryProviderProps {
  children: React.ReactNode
  /** Optional pre-configured registry instance */
  registry?: ViewRegistry
}

export function ViewRegistryProvider({ children, registry: providedRegistry }: ViewRegistryProviderProps) {
  const [registry] = useState(() => providedRegistry ?? new ViewRegistry())

  return (
    <ViewRegistryContext.Provider value={registry}>
      {children}
    </ViewRegistryContext.Provider>
  )
}

/**
 * Helper hook to register views on component mount
 * Automatically unregisters when component unmounts
 */
export function useRegisterViews(descriptors: ViewDescriptor[]): void {
  const registry = useViewRegistry()

  useEffect(() => {
    const dispose = registry.registerViews(descriptors)
    return dispose
  }, [registry, descriptors])
}

/**
 * Helper hook to register a single view on component mount
 */
export function useRegisterView(descriptor: ViewDescriptor): void {
  const registry = useViewRegistry()

  useEffect(() => {
    const dispose = registry.registerView(descriptor)
    return dispose
  }, [registry, descriptor])
}
