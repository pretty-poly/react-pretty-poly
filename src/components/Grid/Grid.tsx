import React, { forwardRef, useRef, useImperativeHandle, useMemo } from 'react'
import { clsx } from 'clsx'
import type { GridProps, BlockConfig, GridState, LayoutMode } from '../../types'
import { GridProvider, useGridContext, useGridState } from './GridProvider'
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

    // Set up resize handling
    const {
      startResize,
      isDragging,
      activeBlockId,
      resetBlock: resetBlockFromHook,
      isBlockCollapsed
    } = useGridResize({
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

      // Generate simple grid styles based on JSX structure
      const styles = `
[data-block-id="root"] {
  display: grid;
  grid-template-columns: 320px 8px 1fr;
  grid-template-rows: 1fr;
  height: 100%;
}

[data-block-id="dashboard-main"] {
  display: grid;
  grid-template-rows: 1fr 8px 300px;
  grid-template-columns: 1fr;
  height: 100%;
}

[data-block-id="charts-area"] {
  display: grid;
  grid-template-columns: 2fr 8px 1fr;
  grid-template-rows: 1fr;
  height: 100%;
}

.pretty-poly-divider {
  background-color: #e5e7eb;
  cursor: col-resize;
}

.pretty-poly-divider[data-block-direction="column"] {
  cursor: row-resize;
}`

      return {
        cssVariables: `:root {\n  ${variables}\n}`,
        gridStyles: styles
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
          className={clsx(
            'pretty-poly-grid relative',
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