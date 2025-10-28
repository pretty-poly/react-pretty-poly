import { useViewRegistry } from '@pretty-poly/react'
import type { Tab } from '@/lib/grid-types'

/**
 * ViewRenderer - Renders a view component from the ViewRegistry based on tab.viewType
 */
export interface ViewRendererProps {
  tab: Tab
  blockId?: string
  [key: string]: unknown
}

export function ViewRenderer({ tab, blockId, ...additionalProps }: ViewRendererProps) {
  const registry = useViewRegistry()

  if (!tab.viewType) {
    return null
  }

  const viewDescriptor = registry.getView(tab.viewType)

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

  return (
    <ViewComponent
      viewId={tab.viewType}
      blockId={blockId}
      {...(tab.viewState as Record<string, unknown> || {})}
      {...additionalProps}
    />
  )
}
