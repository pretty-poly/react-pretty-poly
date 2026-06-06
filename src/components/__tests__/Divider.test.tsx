import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ComponentProps } from 'react'
import { Divider } from '@/components/divider/divider'
import { renderWithGrid, mockGetBoundingClientRect } from '../../test/test-utils'
import type { BlockConfig } from '@/lib/grid-types'

const mockBlocks: BlockConfig[] = [
  {
    id: 'root',
    type: 'group',
    direction: 'row',
    order: 0
  },
  {
    id: 'sidebar',
    type: 'block',
    defaultSize: 300,
    minSize: 200,
    maxSize: 500,
    sizeUnit: 'px',
    dividerPosition: 'end',
    collapsible: true,
    collapseAt: 250,
    collapseTo: 50,
    parentId: 'root',
    order: 0
  },
  {
    id: 'main',
    type: 'block',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'root',
    order: 1
  }
]

function renderDivider(
  props: Partial<ComponentProps<typeof Divider>> = {},
  blocks: BlockConfig[] = mockBlocks
) {
  return renderWithGrid(
    <div data-grid-id="test-grid">
      <div data-block-id="root">
        <div data-block-id={props.targetId ?? 'sidebar'} />
      </div>
      <Divider
        targetId={props.targetId ?? 'sidebar'}
        position={props.position ?? 'end'}
        direction={props.direction ?? 'vertical'}
        size={props.size}
        className={props.className}
        aria-label={props['aria-label']}
      />
    </div>,
    { blocks, gridId: 'test-grid' }
  )
}

describe('Divider', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    Element.prototype.getBoundingClientRect = vi.fn(() =>
      mockGetBoundingClientRect({
        width: 300,
        height: 600,
        x: 0,
        y: 0,
        left: 0,
        right: 300,
        top: 0,
        bottom: 600
      })
    )
  })

  it('renders divider with current data attributes', () => {
    renderDivider()

    const divider = screen.getByRole('separator')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveAttribute('data-target-block', 'sidebar')
    expect(divider).toHaveAttribute('data-divider-position', 'end')
    expect(divider).toHaveAttribute('data-divider-direction', 'vertical')
    expect(divider).toHaveAttribute('aria-label', 'Resize sidebar')
  })

  it('returns null when the target block is missing', () => {
    renderDivider({ targetId: 'missing' })

    expect(screen.queryByRole('separator')).not.toBeInTheDocument()
  })

  it('starts mouse dragging and sets global cursor styles', async () => {
    renderDivider()

    const divider = screen.getByRole('separator')
    fireEvent.mouseDown(divider, { clientX: 300, clientY: 300 })

    await waitFor(() => {
      expect(document.body.style.userSelect).toBe('none')
      expect(document.body.style.cursor).toBeTruthy()
    })
  })

  it('starts touch dragging and sets global cursor styles', async () => {
    renderDivider()

    const divider = screen.getByRole('separator')
    fireEvent.touchStart(divider, {
      touches: [{ clientX: 300, clientY: 300 }]
    })

    await waitFor(() => {
      expect(document.body.style.userSelect).toBe('none')
      expect(document.body.style.cursor).toBeTruthy()
    })
  })

  it('is focusable', async () => {
    renderDivider()

    const divider = screen.getByRole('separator')

    await user.tab()
    expect(divider).toHaveFocus()
  })

  it('uses vertical and horizontal resize cursors', () => {
    const { rerender } = renderDivider({ direction: 'vertical' })
    expect(screen.getByRole('separator').className).toContain('cursor-col-resize')

    rerender(
      <div data-grid-id="test-grid">
        <div data-block-id="root">
          <div data-block-id="sidebar" />
        </div>
        <Divider targetId="sidebar" position="end" direction="horizontal" />
      </div>
    )

    expect(screen.getByRole('separator').className).toContain('cursor-row-resize')
  })

  it('applies custom divider size', async () => {
    renderDivider({ size: 16 })

    const divider = screen.getByRole('separator')
    await waitFor(() => {
      expect(divider.style.width).toBe('16px')
    })
  })

  it('uses default divider size', async () => {
    renderDivider()

    const divider = screen.getByRole('separator')
    await waitFor(() => {
      expect(divider.style.width).toBe('4px')
    })
  })
})
