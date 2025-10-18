import { BlockConfig } from '../types';

/**
 * Layout configuration that can be saved/loaded
 * Combines block structure with view type assignments
 */
export interface LayoutConfiguration {
    id: string;
    name: string;
    blocks: BlockConfig[];
    viewTypes: Record<string, string>;
    metadata?: {
        createdAt?: string;
        description?: string;
        tags?: string[];
    };
}
/**
 * LayoutService manages layout state and view type assignments
 * This is the glue between ViewRegistry (what views exist) and Grid (where they go)
 */
export declare class LayoutService {
    private viewTypes;
    private layouts;
    private changeListeners;
    private layoutListeners;
    /**
     * Set which view type a block should display
     */
    setBlockViewType(blockId: string, viewTypeId: string): void;
    /**
     * Get the current view type for a block
     */
    getBlockViewType(blockId: string): string | undefined;
    /**
     * Get all current view type assignments
     */
    getAllViewTypes(): Record<string, string>;
    /**
     * Set multiple view type assignments at once
     */
    setViewTypes(viewTypes: Record<string, string>): void;
    /**
     * Clear view type assignment for a block
     */
    clearBlockViewType(blockId: string): void;
    /**
     * Clear all view type assignments
     */
    clearAllViewTypes(): void;
    /**
     * Save a layout configuration
     */
    saveLayout(layout: LayoutConfiguration): void;
    /**
     * Load a layout configuration
     * Returns the layout if found
     */
    loadLayout(layoutId: string): LayoutConfiguration | undefined;
    /**
     * Apply a saved layout (sets current view types)
     */
    applyLayout(layoutId: string): boolean;
    /**
     * Delete a saved layout
     */
    deleteLayout(layoutId: string): boolean;
    /**
     * Get all saved layouts
     */
    getAllLayouts(): LayoutConfiguration[];
    /**
     * Check if a layout exists
     */
    hasLayout(layoutId: string): boolean;
    /**
     * Create a layout configuration from current state
     */
    createLayoutFromCurrentState(id: string, name: string, blocks: BlockConfig[], metadata?: LayoutConfiguration['metadata']): LayoutConfiguration;
    /**
     * Subscribe to view type changes
     * @returns Unsubscribe function
     */
    onViewTypesChange(listener: (viewTypes: Record<string, string>) => void): () => void;
    /**
     * Subscribe to saved layout changes (add/remove/update layouts)
     * @returns Unsubscribe function
     */
    onLayoutsChange(listener: () => void): () => void;
    /**
     * Get count of saved layouts
     */
    get layoutCount(): number;
    /**
     * Clear all saved layouts
     */
    clearAllLayouts(): void;
    /**
     * Export layouts as JSON
     */
    exportLayouts(): string;
    /**
     * Import layouts from JSON
     */
    importLayouts(json: string): number;
    private notifyChange;
    private notifyLayoutChange;
}
/**
 * Hook to access the LayoutService
 * @throws Error if used outside LayoutServiceProvider
 */
export declare function useLayoutService(): LayoutService;
/**
 * Hook to get the current view type for a block
 */
export declare function useBlockViewType(blockId: string): string | undefined;
/**
 * Hook to get all view type assignments with automatic updates
 */
export declare function useViewTypes(): Record<string, string>;
/**
 * Hook to set a block's view type
 * Returns a memoized callback
 */
export declare function useSetBlockViewType(): (blockId: string, viewTypeId: string) => void;
/**
 * Hook to get all saved layouts with automatic updates
 */
export declare function useLayouts(): LayoutConfiguration[];
/**
 * Hook to save current layout state
 * Returns a memoized callback
 */
export declare function useSaveLayout(): (id: string, name: string, blocks: BlockConfig[], metadata?: LayoutConfiguration['metadata']) => void;
/**
 * Hook to load and apply a saved layout
 * Returns a memoized callback
 */
export declare function useApplyLayout(): (layoutId: string) => boolean;
/**
 * Provider component for LayoutService
 */
export interface LayoutServiceProviderProps {
    children: React.ReactNode;
    /** Optional pre-configured service instance */
    service?: LayoutService;
    /** Initial view type assignments */
    initialViewTypes?: Record<string, string>;
}
export declare function LayoutServiceProvider({ children, service: providedService, initialViewTypes, }: LayoutServiceProviderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LayoutService.d.ts.map