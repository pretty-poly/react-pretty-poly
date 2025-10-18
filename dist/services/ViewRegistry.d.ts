/**
 * Describes a type of view that can be displayed in a block
 * Inspired by Blender's Area concept - blocks can display any registered view type
 */
export interface ViewDescriptor {
    /** Unique identifier for this view type */
    id: string;
    /** Display name for the view type */
    title: string;
    /** Optional icon component */
    icon?: React.ComponentType<{
        className?: string;
    }>;
    /** The React component to render for this view */
    component: React.ComponentType<ViewProps>;
    /** Category for organization (e.g., 'editor', 'tools', 'data') */
    category?: string;
    /** Display order in menus/lists */
    order?: number;
    /** Default size when created (in current size unit) */
    defaultSize?: number;
    /** Context expression for conditional availability (future feature) */
    when?: string;
}
/**
 * Props passed to view components when rendered
 */
export interface ViewProps {
    /** ID of the view type being rendered */
    viewId: string;
    /** ID of the block containing this view */
    blockId?: string;
    /** Callback when view wants to be closed */
    onClose?: () => void;
    /** Callback when view receives focus */
    onFocus?: () => void;
    /** Additional props can be passed through */
    [key: string]: any;
}
/**
 * ViewRegistry manages the registration and lookup of view types
 * This is the core primitive that enables polymorphic blocks
 */
export declare class ViewRegistry {
    private views;
    private listeners;
    /**
     * Register a new view type
     * @returns Disposable function to unregister the view
     */
    registerView(descriptor: ViewDescriptor): () => void;
    /**
     * Register multiple views at once
     * @returns Disposable function to unregister all views
     */
    registerViews(descriptors: ViewDescriptor[]): () => void;
    /**
     * Get a specific view descriptor by ID
     */
    getView(id: string): ViewDescriptor | undefined;
    /**
     * Get all registered view descriptors, optionally sorted by order
     */
    getAllViews(sorted?: boolean): ViewDescriptor[];
    /**
     * Get views filtered by category
     */
    getViewsByCategory(category: string): ViewDescriptor[];
    /**
     * Get all unique categories
     */
    getCategories(): string[];
    /**
     * Check if a view type exists
     */
    hasView(id: string): boolean;
    /**
     * Subscribe to registry changes (when views are added/removed)
     * @returns Unsubscribe function
     */
    subscribe(listener: () => void): () => void;
    /**
     * Get count of registered views
     */
    get count(): number;
    /**
     * Clear all registered views
     */
    clear(): void;
    private notify;
}
/**
 * Hook to access the ViewRegistry
 * @throws Error if used outside ViewRegistryProvider
 */
export declare function useViewRegistry(): ViewRegistry;
/**
 * Hook to access a specific view descriptor
 */
export declare function useViewDescriptor(viewId: string): ViewDescriptor | undefined;
/**
 * Hook to get all views, with optional filtering
 */
export declare function useViews(options?: {
    category?: string;
    sorted?: boolean;
}): ViewDescriptor[];
/**
 * Provider component for ViewRegistry
 */
export interface ViewRegistryProviderProps {
    children: React.ReactNode;
    /** Optional pre-configured registry instance */
    registry?: ViewRegistry;
}
export declare function ViewRegistryProvider({ children, registry: providedRegistry }: ViewRegistryProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Helper hook to register views on component mount
 * Automatically unregisters when component unmounts
 */
export declare function useRegisterViews(descriptors: ViewDescriptor[]): void;
/**
 * Helper hook to register a single view on component mount
 */
export declare function useRegisterView(descriptor: ViewDescriptor): void;
//# sourceMappingURL=ViewRegistry.d.ts.map