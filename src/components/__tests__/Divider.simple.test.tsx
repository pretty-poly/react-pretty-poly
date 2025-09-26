import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Divider } from '../Divider/Divider'
import { Grid, Block } from '../..'
import type { BlockConfig } from '../../types'

const testLayout: BlockConfig[] = [
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

describe('Divider (Simplified)', () => {
  beforeEach(() => {
    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      x: 0, y: 0, width: 8, height: 600,
      top: 0, left: 300, bottom: 600, right: 308,
      toJSON: () => ({})
    }))

    // Set desktop viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true, configurable: true, value: 1024
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true, configurable: true, value: 768
    })
  })

  it('renders divider within grid context', () => {
    render(
      <Grid defaultLayout={testLayout}>
        <Block id="sidebar">Sidebar Content</Block>
        <Divider targetId="sidebar" position="end" />
        <Block id="main">Main Content</Block>
      </Grid>
    )

    // Check that the divider is present
    const divider = screen.getByRole('separator')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveAttribute('data-block-target', 'sidebar')
  })

  it('handles mouse interactions', () => {
    render(
      <Grid defaultLayout={testLayout}>
        <Block id="sidebar">Sidebar</Block>
        <Divider targetId="sidebar" position="end" />
        <Block id="main">Main</Block>
      </Grid>
    )

    const divider = screen.getByRole('separator')

    // Test mouse down starts drag
    fireEvent.mouseDown(divider, { clientX: 300, clientY: 300 })
    expect(document.body.style.userSelect).toBe('none')

    // Test mouse up ends drag
    fireEvent.mouseUp(document)
    expect(document.body.style.userSelect).toBe('')
  })

  it('is keyboard accessible', () => {
    render(
      <Grid defaultLayout={testLayout}>
        <Block id="sidebar">Sidebar</Block>
        <Divider targetId="sidebar" position="end" />
        <Block id="main">Main</Block>
      </Grid>
    )

    const divider = screen.getByRole('separator')
    expect(divider).toHaveAttribute('tabindex', '0')

    // Test focus
    divider.focus()
    expect(divider).toHaveFocus()
  })
})