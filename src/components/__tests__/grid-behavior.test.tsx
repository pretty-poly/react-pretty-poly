import React from 'react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Block } from '@/components/grid/block'
import { Divider } from '@/components/divider/divider'
import {
  GridProvider,
  createInitialState,
  gridStateReducer,
  useGridContext,
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

function OpenTabProbe() {
  const { openTab, getTabState } = useGridContext()
  const returnedTabId = React.useRef<string | null>(null)
  const tabState = getTabState('sidebar')

  return (
    <>
      <button
        type="button"
        onClick={() => {
          returnedTabId.current = openTab('sidebar', {
            label: 'Settings',
            viewType: 'settings',
          })
        }}
      >
        Open generated tab
      </button>
      <button
        type="button"
        onClick={() => {
          returnedTabId.current = openTab('sidebar', {
            id: 'existing-tab',
            label: 'Existing',
            viewType: 'existing',
          })
        }}
      >
        Open supplied tab
      </button>
      <output data-testid="tab-state">
        {`${returnedTabId.current ?? 'none'}:${tabState?.activeTabId ?? 'none'}`}
      </output>
    </>
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

  it('resets mutable sizes back to the configured initial layout', () => {
    let state = createInitialState(layout, viewport, 'desktop')

    state = gridStateReducer(state, {
      type: 'RESIZE_BLOCK',
      payload: { blockId: 'sidebar', size: 380 },
    })
    state = gridStateReducer(state, {
      type: 'COLLAPSE_BLOCK',
      payload: { blockId: 'sidebar' },
    })
    state = gridStateReducer(state, { type: 'RESET_STATE' })

    expect(state.blocks.sidebar.defaultSize).toBe(320)
    expect(state.blocks.sidebar.size).toBe(320)
    expect(state.blocks.sidebar.originalDefaultSize).toBe(320)
    expect(state.blocks.sidebar.initialDefaultSize).toBe(320)
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

  it('returns the same tab ID it stores in state', () => {
    render(
      <GridProvider blocks={layout} gridId="test-grid">
        <OpenTabProbe />
      </GridProvider>
    )

    fireEvent.click(screen.getByText('Open generated tab'))
    const generatedState = screen.getByTestId('tab-state').textContent ?? ''
    const [generatedReturn, generatedActive] = generatedState.split(':')
    expect(generatedReturn).toMatch(/^tab-/)
    expect(generatedActive).toBe(generatedReturn)

    fireEvent.click(screen.getByText('Open supplied tab'))
    expect(screen.getByTestId('tab-state')).toHaveTextContent('existing-tab:existing-tab')
  })

  it('inserts split blocks before existing children when requested', () => {
    const splitLayout: BlockConfig[] = [
      {
        id: 'root',
        type: 'group',
        direction: 'row',
        children: ['left', 'right'],
        canSplit: true,
      },
      {
        id: 'left',
        type: 'block',
        parentId: 'root',
        order: 0,
        defaultSize: 1,
        sizeUnit: 'fr',
      },
      {
        id: 'right',
        type: 'block',
        parentId: 'root',
        order: 1,
        defaultSize: 1,
        sizeUnit: 'fr',
      },
    ]
    const state = gridStateReducer(createInitialState(splitLayout, viewport, 'desktop'), {
      type: 'SPLIT_BLOCK',
      payload: {
        targetBlockId: 'root',
        direction: 'vertical',
        newBlockId: 'new-pane',
        firstChildId: 'unused-a',
        secondChildId: 'unused-b',
        position: 'before',
        initialSize: 2,
        newViewType: 'inspector',
      },
    })

    expect(state.blocks.root.children).toEqual(['new-pane', 'left', 'right'])
    expect(state.blocks['new-pane']).toMatchObject({
      parentId: 'root',
      order: 0,
      defaultSize: 2,
      viewType: 'inspector',
    })
    expect(state.blocks.left.order).toBe(1)
    expect(state.blocks.right.order).toBe(2)
  })

  it('keeps existing content in the second pane when splitting before an unsplit group', () => {
    const tabState = {
      tabs: [{ id: 'tab-1', label: 'Existing tab' }],
      activeTabId: 'tab-1',
      history: ['tab-1'],
      historyIndex: 0,
      scrollOffset: 0,
    }
    const splitLayout: BlockConfig[] = [
      {
        id: 'root',
        type: 'group',
        children: ['existing'],
        canSplit: true,
        defaultViewType: 'empty',
      },
      {
        id: 'existing',
        type: 'block',
        parentId: 'root',
        order: 0,
        defaultSize: 1,
        sizeUnit: 'fr',
        viewType: 'editor',
        tabState,
      },
    ]
    const state = gridStateReducer(createInitialState(splitLayout, viewport, 'desktop'), {
      type: 'SPLIT_BLOCK',
      payload: {
        targetBlockId: 'root',
        direction: 'vertical',
        newBlockId: 'before-pane',
        firstChildId: 'before-pane',
        secondChildId: 'existing-pane',
        position: 'before',
        initialSize: 1,
        newViewType: 'search',
      },
    })

    expect(state.blocks.root.children).toEqual(['before-pane', 'existing-pane'])
    expect(state.blocks['before-pane'].viewType).toBe('search')
    expect(state.blocks['existing-pane'].viewType).toBe('editor')
    expect(state.blocks['existing-pane'].tabState).toEqual(tabState)
    expect(state.blocks.existing).toBeUndefined()
  })
})
