import { useViewRegistry } from '../../services/ViewRegistry'
import type { Tab } from '../../types'

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
  tab: Tab

  /** ID of the block containing this view */
  blockId?: string

  /** Additional props to pass to the view component */
  [key: string]: unknown
}

export function ViewRenderer({ tab, blockId, ...additionalProps }: ViewRendererProps) {
  const registry = useViewRegistry()

  // If tab doesn't have a viewType, return null (tab has custom content)
  if (!tab.viewType) {
    return null
  }

  const viewDescriptor = registry.getView(tab.viewType)

  // Handle missing view type
  if (!viewDescriptor) {
    return (
      <div className="flex items-center justify-center h-full p-4 text-destructive">
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">View Not Found</div>
          <div className="text-sm text-muted-foreground">
            View type &quot;{tab.viewType}&quot; is not registered in the ViewRegistry.
          </div>
        </div>
      </div>
    )
  }

  const ViewComponent = viewDescriptor.component

  // Render the view component with props from ViewProps interface
  return (
    <ViewComponent
      viewId={tab.viewType}
      blockId={blockId}
      // Spread any view-specific state from the tab
      {...(tab.viewState as Record<string, unknown> || {})}
      // Allow additional props to be passed through
      {...additionalProps}
    />
  )
}
