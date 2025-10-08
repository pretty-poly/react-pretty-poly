import { forwardRef, useRef, useImperativeHandle, useMemo } from 'react'
import type { GridProps, BlockConfig, GridState } from '../../types'
import { cn } from '../../utils/cn'
import { GridProvider, useGridContext } from './GridProvider'
import { useGridResize } from '../../hooks/useGridResize'
import { useGridKeyboard } from '../../hooks/useGridKeyboard'
import { generateGridTemplate, generateGridTemplateFromItems } from '../../utils/calculations'
import type { DividerInjectionResult } from '../../utils/children-divider-injection'
import { DividerOverlay } from '../Divider/DividerOverlay'

/**
 * Grid API for imperative control
 */
export interface GridAPI {
  resizeBlock: (blockId: string, size: number) => void
  collapseBlock: (blockId: string) => void
  expandBlock: (blockId: string) => void
  switchMode: (mode: string) => void
  persistState: () => void
  resetState: () => void
  getState: () => GridState
}

/**
 * Internal Grid component (wrapped by provider)
 */
const GridInternal = forwardRef<GridAPI, Omit<GridProps, 'defaultLayout' | 'modes' | 'persist' | 'persistKey' | 'onLayoutChange' | 'onModeChange'>>(
  ({ children, className, dividers = 'manual', dividerConfig, 'aria-label': ariaLabel }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { state, resizeBlock, collapseBlock, expandBlock, switchMode, persistState, resetState } = useGridContext()

    // Get resize state
    const isDragging = state.resize.isDragging

    // Expose API through ref
    useImperativeHandle(ref, () => ({
      resizeBlock,
      collapseBlock,
      expandBlock,
      switchMode,
      persistState,
      resetState,
      getState: () => state
    }), [resizeBlock, collapseBlock, expandBlock, switchMode, persistState, resetState, state])

    // Get blocks as array sorted by order
    const blocks = useMemo(() => {
      const blockArray = Object.values(state.blocks)
      return blockArray.sort((a, b) => (a.order || 0) - (b.order || 0))
    }, [state.blocks])

    // Get root block (parent_id is null)
    const rootBlock = useMemo(() => {
      return blocks.find(block => !block.parentId)
    }, [blocks])

    // Legacy resize support (keeping for backward compatibility)
    useGridResize({
      blocks,
      containerRef,
      onSizeChange: resizeBlock,
      direction: rootBlock?.direction || 'row'
    })

    // Set up keyboard navigation
    useGridKeyboard({
      enabled: true,
      blocks,
      containerRef,
      onResizeBlock: (blockId, delta) => {
        const block = state.blocks[blockId]
        if (block) {
          const currentSize = block.defaultSize || 0
          const newSize = Math.max(0, currentSize + delta)
          resizeBlock(blockId, newSize)
        }
      },
      onCollapseBlock: collapseBlock,
      onExpandBlock: expandBlock
    })

    // Note: Dividers are now handled by DividerOverlay, not injected into children
    // This is kept for backward compatibility with template generation
    const dividerInjectionResult = useMemo<DividerInjectionResult & { templateItemsByGroup?: Record<string, DividerInjectionResult['templateItems']> }>(() => {
      // For overlay mode, we don't inject dividers into children
      // Just return the children as-is with empty template items
      return {
        children,
        templateItems: [],
        templateItemsByGroup: {}
      }
    }, [children])

    // Generate CSS styles for the grid
    const { gridStyles, cssVariables, modeStyles } = useMemo(() => {
      if (!rootBlock) {
        return { gridStyles: '', cssVariables: '', modeStyles: '' }
      }

      // Get blocks grouped by parent
      const blocksByParent = blocks.reduce((acc, block) => {
        // Skip the root block itself when grouping by parent
        if (block.id === 'root') return acc

        const parentId = block.parentId || 'root'
        if (!acc[parentId]) acc[parentId] = []
        acc[parentId].push(block)
        return acc
      }, {} as Record<string, BlockConfig[]>)

      // Generate CSS variables for block sizes (scoped by grid ID to prevent collisions)
      const variables = blocks
        .filter(block => block.defaultSize !== undefined)
        .map(block => {
          const sizeValue = block.sizeUnit === 'px'
            ? `${block.defaultSize}px`
            : `${block.defaultSize}fr`
          return `--${rootBlock.id}-${block.id}-size: ${sizeValue};`
        })
        .join('\n  ')

      // Generate mode-specific layout styles
      const generateModeStyles = (): string => {
        let styles = ''

        // Dock mode: transform grid into bottom navigation
        styles += `
[data-grid-id="${rootBlock.id}"][data-active-mode="dock"],
[data-grid-id="${rootBlock.id}"][data-active-mode="mobile"] {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: hsl(var(--background));
  border-top: 1px solid hsl(var(--border));
  z-index: 100;
}
`

        // Tabs mode: transform grid into tabbed layout
        styles += `
[data-grid-id="${rootBlock.id}"][data-active-mode="tabs"],
[data-grid-id="${rootBlock.id}"][data-active-mode="tablet"] {
  display: flex;
  flex-direction: column;
  height: 100%;
}
`

        // Hide dividers in dock and tabs modes
        styles += `
[data-grid-id="${rootBlock.id}"][data-active-mode="dock"] .pretty-poly-divider,
[data-grid-id="${rootBlock.id}"][data-active-mode="tabs"] .pretty-poly-divider,
[data-grid-id="${rootBlock.id}"][data-active-mode="mobile"] .pretty-poly-divider,
[data-grid-id="${rootBlock.id}"][data-active-mode="tablet"] .pretty-poly-divider {
  display: none;
}
`

        return styles
      }

      // Generate dynamic grid styles based on block tree structure
      const generateGroupStyles = (parentId: string, visited: Set<string> = new Set()): string => {
        // Prevent infinite recursion
        if (visited.has(parentId)) {
          console.warn(`Circular reference detected for parent: ${parentId}`)
          return ''
        }

        // Create a new set for this branch to avoid cross-contamination
        const newVisited = new Set(visited)
        newVisited.add(parentId)

        const childBlocks = blocksByParent[parentId] || []
        if (childBlocks.length === 0) return ''

        // Sort by order
        const sortedBlocks = [...childBlocks].sort((a, b) => (a.order || 0) - (b.order || 0))

        // Generate grid template for this group
        const parentBlock = blocks.find(b => b.id === parentId) || rootBlock
        const direction = parentBlock?.direction || 'row'

        // For automatic dividers, use template items from divider injection
        // For manual/none mode, use traditional block-based template generation
        let template: string
        if (dividers === 'auto' && parentId === rootBlock.id) {
          // For root level in auto mode, use the template items which include dividers
          template = generateGridTemplateFromItems(dividerInjectionResult.templateItems, rootBlock.id)
        } else if (dividers === 'auto' && dividerInjectionResult.templateItemsByGroup?.[parentId]) {
          // For nested groups in auto mode, use the stored template items
          template = generateGridTemplateFromItems(dividerInjectionResult.templateItemsByGroup[parentId], rootBlock.id)
        } else {
          // For manual/none mode or nested groups without template items, use traditional template generation
          const blocksForTemplate = sortedBlocks.map(block => ({
            id: block.id,
            sizeUnit: block.sizeUnit || 'fr',
            size: block.defaultSize || 1,
            dividerPosition: block.dividerPosition === 'auto' ? 'none' : (block.dividerPosition || 'none'),
            dividerSize: block.dividerSize || dividerConfig?.defaultSize || 8
          }))

          template = generateGridTemplate(blocksForTemplate, rootBlock.id)
        }

        const templateProperty = direction === 'column' ? 'grid-template-rows' : 'grid-template-columns'

        // Scope selector by grid ID to prevent collisions across multiple grids
        // Only apply grid styles in grid/desktop mode (not in dock/tabs modes)
        let groupStyle = `
[data-grid-id="${rootBlock.id}"][data-block-id="${parentId}"][data-active-mode="grid"],
[data-grid-id="${rootBlock.id}"][data-block-id="${parentId}"][data-active-mode="desktop"] {
  display: grid;
  ${templateProperty}: ${template};
  ${direction === 'column' ? 'grid-template-columns: 1fr;' : 'grid-template-rows: 1fr;'}
}`

        // Generate styles for child groups recursively
        for (const childBlock of sortedBlocks) {
          if (childBlock.type === 'group') {
            groupStyle += generateGroupStyles(childBlock.id, newVisited)
          }
        }

        return groupStyle
      }

      const dynamicStyles = generateGroupStyles('root')
      const modeDynamicStyles = generateModeStyles()

      return {
        cssVariables: `:root {\n  ${variables}\n}`,
        gridStyles: dynamicStyles,
        modeStyles: modeDynamicStyles
      }
    }, [blocks, rootBlock, dividerInjectionResult, dividers, dividerConfig])

    if (!rootBlock) {
      console.warn('No root block found in grid configuration')
      return null
    }

    return (
      <>
        {/* Inject styles */}
        <style type="text/css">
          {cssVariables}
          {gridStyles}
          {modeStyles}
        </style>

        <div
          ref={containerRef}
          className={cn(
            'group relative overflow-hidden',
            isDragging && 'select-none cursor-grabbing pretty-poly-grid--dragging',
            className
          )}
          data-grid-id={rootBlock.id}
          data-block-id={rootBlock.id}
          data-active-mode={state.activeMode}
          aria-label={ariaLabel || 'Resizable grid layout'}
          role="application"
          style={{ isolation: 'isolate' }}
        >
          {/* Grid content container */}
          <div className="pretty-poly-grid-content">
            {dividerInjectionResult.children}
          </div>

          {/* Divider overlay - only in grid/desktop mode */}
          {(state.activeMode === 'grid' || state.activeMode === 'desktop') && (
            <DividerOverlay />
          )}
        </div>
      </>
    )
  }
)

GridInternal.displayName = 'GridInternal'

/**
 * Main Grid component with provider wrapper
 */
export const Grid = forwardRef<GridAPI, GridProps>(
  ({
    children,
    defaultLayout = [],
    modes,
    persist = false,
    persistKey,
    onLayoutChange,
    onModeChange,
    className,
    dividers = 'manual',
    dividerConfig,
    'aria-label': ariaLabel
  }, ref) => {
    // Find root block ID for gridId
    const rootBlock = defaultLayout.find(block => !block.parentId)
    const gridId = rootBlock?.id || 'root'

    return (
      <GridProvider
        blocks={defaultLayout}
        modes={modes}
        gridId={gridId}
        persist={persist}
        persistKey={persistKey}
        onLayoutChange={onLayoutChange}
        onModeChange={onModeChange}
      >
        <GridInternal
          ref={ref}
          className={className}
          dividers={dividers}
          dividerConfig={dividerConfig}
          aria-label={ariaLabel}
        >
          {children}
        </GridInternal>
      </GridProvider>
    )
  }
)

Grid.displayName = 'Grid'