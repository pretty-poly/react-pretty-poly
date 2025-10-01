import { forwardRef, useRef, useImperativeHandle, useMemo } from 'react'
import type { GridProps, BlockConfig, GridState } from '../../types'
import { cn } from '../../utils/cn'
import { GridProvider, useGridContext } from './GridProvider'
import { useGridResize } from '../../hooks/useGridResize'
import { useGridKeyboard } from '../../hooks/useGridKeyboard'
import { generateGridTemplate, generateGridTemplateFromItems } from '../../utils/calculations'
// Note: These imports are used in the children processing, not CSS grid template generation
import { injectAutomaticDividers, processChildrenRecursively, type DividerInjectionResult } from '../../utils/children-divider-injection'
import { Divider } from '../Divider/Divider'

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

    // Process children to inject automatic dividers and get template info
    // IMPORTANT: This must come BEFORE gridStyles useMemo because gridStyles depends on templateItems
    const dividerInjectionResult = useMemo<DividerInjectionResult>(() => {
      // Process the root level children first
      const rootResult = injectAutomaticDividers(
        children,
        dividers,
        dividerConfig,
        state.blocks,
        Divider
      )

      if (dividers === 'auto') {
        // Then recursively process any nested groups
        const processedChildren = processChildrenRecursively(
          rootResult.children,
          dividers,
          dividerConfig,
          state.blocks,
          Divider
        )

        return {
          children: processedChildren,
          templateItems: rootResult.templateItems
        }
      }

      return rootResult
    }, [children, dividers, dividerConfig, state.blocks])

    // Generate CSS styles for the grid
    const { gridStyles, cssVariables } = useMemo(() => {
      if (!rootBlock) {
        return { gridStyles: '', cssVariables: '' }
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
        } else {
          // For manual/none mode or nested groups, use traditional template generation
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
        let groupStyle = `
[data-grid-id="${rootBlock.id}"][data-block-id="${parentId}"] {
  display: grid;
  ${templateProperty}: ${template};
  ${direction === 'column' ? 'grid-template-columns: 1fr;' : 'grid-template-rows: 1fr;'}
  height: 100%;
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

      const baseStyles = `
.pretty-poly-divider {
  background-color: #e5e7eb;
  cursor: col-resize;
}

.pretty-poly-divider[data-block-direction="column"] {
  cursor: row-resize;
}

.pretty-poly-divider--dragging {
  background-color: #3b82f6;
}`

      return {
        cssVariables: `:root {\n  ${variables}\n}`,
        gridStyles: dynamicStyles + baseStyles
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
        </style>

        <div
          ref={containerRef}
          className={cn(
            'pretty-poly-grid relative overflow-hidden',
            isDragging && 'pretty-poly-grid--dragging',
            className
          )}
          data-grid-id={rootBlock.id}
          data-block-id={rootBlock.id}
          data-active-mode={state.activeMode}
          aria-label={ariaLabel || 'Resizable grid layout'}
          role="application"
        >
          {dividerInjectionResult.children}
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
    return (
      <GridProvider
        blocks={defaultLayout}
        modes={modes}
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