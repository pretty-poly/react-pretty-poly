import { Tab } from '../../types';

/**
 * ViewRenderer - Renders a view component from the ViewRegistry based on tab.viewType
 *
 * This component bridges the tab system with the ViewRegistry:
 * - Takes a Tab with optional viewType property
 * - Looks up the view component in the registry
 * - Renders the component with appropriate props
 * - Handles missing view types gracefully
 *
 * @example
 * ```tsx
 * <ViewRenderer tab={activeTab} blockId="editor-block" />
 * ```
 */
export interface ViewRendererProps {
    /** The tab containing the viewType to render */
    tab: Tab;
    /** ID of the block containing this view */
    blockId?: string;
    /** Additional props to pass to the view component */
    [key: string]: unknown;
}
export declare function ViewRenderer({ tab, blockId, ...additionalProps }: ViewRendererProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=ViewRenderer.d.ts.map