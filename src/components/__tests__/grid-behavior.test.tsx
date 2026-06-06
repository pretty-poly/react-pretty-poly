import { describe, it, expect, beforeEach, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Block } from '@/components/grid/block'
import { Divider } from '@/components/divider/divider'
import {
  GridProvider,
  createInitialState,
  gridStateReducer,
  useGridState,
} from '@/components/grid/grid-provider'
import type { BlockConfig, ViewportInfo } from '@/lib/grid-types'

const viewport: ViewportInfo = {
  width: 1024,
  height: 768,
  orientation: 'landscape',
}

const layout: BlockConfig[] = [
  {
    id: 'root',
    type: 'group',
    direction: 'row',
    order: 0,
  },
  {
    id: 'sidebar',
    type: 'block',
    defaultSize: 320,
    minSize: 200,
    maxSize: 600,
    sizeUnit: 'px',
    collapsible: true,
    collapseAt: 180,
    collapseTo: 48,
    parentId: 'root',
    order: 0,
  },
  {
    id: 'main',
    type: 'block',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'root',
    order: 1,
  },
]

function StateProbe() {
  const state = useGridState()
  const sidebar = state.blocks.sidebar

  return (
    <output data-testid="sidebar-state">
      {`${sidebar.defaultSize}:${sidebar.size}:${sidebar.originalDefaultSize}:${state.hiddenBlocks.has('sidebar')}`}
    </output>
  )
}

describe('grid behavior changes', () => {
  beforeEach(() => {
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      x: 0,
      y: 0,
      width: 320,
      height: 600,
      top: 0,
      left: 0,
      bottom: 600,
      right: 320,
      toJSON: () => ({}),
    }))
  })

  it('preserves the last expanded size through collapse and expand', () => {
    let state = createInitialState(layout, viewport, 'desktop')

    state = gridStateReducer(state, {
      type: 'RESIZE_BLOCK',
      payload: { blockId: 'sidebar', size: 380 },
    })
    state = gridStateReducer(state, {
      type: 'COLLAPSE_BLOCK',
      payload: { blockId: 'sidebar' },
    })

    expect(state.blocks.sidebar.defaultSize).toBe(48)
    expect(state.blocks.sidebar.size).toBe(48)
    expect(state.blocks.sidebar.originalDefaultSize).toBe(380)

    state = gridStateReducer(state, {
      type: 'EXPAND_BLOCK',
      payload: { blockId: 'sidebar' },
    })

    expect(state.blocks.sidebar.defaultSize).toBe(380)
    expect(state.blocks.sidebar.size).toBe(380)
  })

  it('ensures hidden collapsed blocks are visible and expanded by default', () => {
    let state = createInitialState(layout, viewport, 'desktop')

    state = gridStateReducer(state, {
      type: 'HIDE_BLOCK',
      payload: { blockId: 'sidebar' },
    })
    state = gridStateReducer(state, {
      type: 'COLLAPSE_BLOCK',
      payload: { blockId: 'sidebar' },
    })
    state = gridStateReducer(state, {
      type: 'ENSURE_BLOCK_VISIBLE',
      payload: { blockId: 'sidebar' },
    })

    expect(state.hiddenBlocks.has('sidebar')).toBe(false)
    expect(state.blocks.sidebar.defaultSize).toBe(320)
    expect(state.blocks.sidebar.size).toBe(320)
  })

  it('can ensure visibility without expanding collapsed blocks', () => {
    let state = createInitialState(layout, viewport, 'desktop')

    state = gridStateReducer(state, {
      type: 'HIDE_BLOCK',
      payload: { blockId: 'sidebar' },
    })
    state = gridStateReducer(state, {
      type: 'COLLAPSE_BLOCK',
      payload: { blockId: 'sidebar' },
    })
    state = gridStateReducer(state, {
      type: 'ENSURE_BLOCK_VISIBLE',
      payload: { blockId: 'sidebar', expandIfCollapsed: false },
    })

    expect(state.hiddenBlocks.has('sidebar')).toBe(false)
    expect(state.blocks.sidebar.defaultSize).toBe(48)
    expect(state.blocks.sidebar.size).toBe(48)
  })

  it('does not collapse when block content is double-clicked', () => {
    render(
      <GridProvider blocks={layout} gridId="test-grid">
        <Block id="sidebar">Sidebar content</Block>
        <StateProbe />
      </GridProvider>
    )

    fireEvent.doubleClick(screen.getByText('Sidebar content'))

    expect(screen.getByTestId('sidebar-state')).toHaveTextContent('320:320:320:false')
  })

  it('collapses and expands from the divider double-click handler', () => {
    render(
      <GridProvider blocks={layout} gridId="test-grid">
        <div data-grid-id="test-grid">
          <div data-block-id="sidebar">Sidebar</div>
          <Divider targetId="sidebar" position="end" direction="vertical" />
        </div>
        <StateProbe />
      </GridProvider>
    )

    const divider = screen.getByRole('separator')

    fireEvent.doubleClick(divider)
    expect(screen.getByTestId('sidebar-state')).toHaveTextContent('48:48:320:false')

    fireEvent.doubleClick(divider)
    expect(screen.getByTestId('sidebar-state')).toHaveTextContent('320:320:320:false')
  })
})
