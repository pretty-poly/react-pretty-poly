import { forwardRef, useRef, useImperativeHandle, useMemo } from 'react'
import type { GridProps, BlockConfig, GridState } from '../../types'
import { cn } from '../../utils/cn'
import { GridProvider, useGridContext } from './GridProvider'
import { useGridResize } from '../../hooks/useGridResize'
import { useGridKeyboard } from '../../hooks/useGridKeyboard'
import { generateGridTemplate } from '../../utils/calculations'

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
  ({ children, className, 'aria-label': ariaLabel }, ref) => {
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

      // Generate CSS variables for block sizes
      const variables = blocks
        .filter(block => block.defaultSize !== undefined)
        .map(block => {
          const sizeValue = block.sizeUnit === 'px'
            ? `${block.defaultSize}px`
            : `${block.defaultSize}fr`
          return `--${block.id}-size: ${sizeValue};`
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

        const template = generateGridTemplate(sortedBlocks.map(block => ({
          id: block.id,
          sizeUnit: block.sizeUnit || 'fr',
          size: block.defaultSize || 1,
          dividerPosition: block.dividerPosition || 'none',
          dividerSize: block.dividerSize || 8
        })))

        const templateProperty = direction === 'column' ? 'grid-template-rows' : 'grid-template-columns'

        let groupStyle = `
[data-block-id="${parentId}"] {
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
    }, [blocks, rootBlock])

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
          {children}
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
          aria-label={ariaLabel}
        >
          {children}
        </GridInternal>
      </GridProvider>
    )
  }
)

Grid.displayName = 'Grid'