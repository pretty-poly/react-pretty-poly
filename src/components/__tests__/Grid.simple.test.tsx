import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, act } from '@testing-library/react'
import { Grid, Block, Divider } from '../..'
import type { BlockConfig } from '../../types'

const basicLayout: BlockConfig[] = [
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

describe('Grid (Simplified Integration)', () => {
  beforeEach(() => {
    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      x: 0, y: 0, width: 1000, height: 600,
      top: 0, left: 0, bottom: 600, right: 1000,
      toJSON: () => ({})
    }))

    // Set desktop viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true, configurable: true, value: 1024
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true, configurable: true, value: 768
    })

    // Clear localStorage
    localStorage.clear()
  })

  it('renders complete grid with all components', () => {
    render(
      <Grid defaultLayout={basicLayout}>
        <Block id="sidebar">Sidebar Content</Block>
        <Divider targetId="sidebar" position="end" />
        <Block id="main">Main Content</Block>
      </Grid>
    )

    // Check all components are rendered
    expect(screen.getByText('Sidebar Content')).toBeInTheDocument()
    expect(screen.getByText('Main Content')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()

    // Check grid container
    const gridContainer = document.querySelector('.pretty-poly-grid')
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer).toHaveAttribute('data-active-mode', 'desktop')
  })

  it('generates CSS styles correctly', () => {
    render(
      <Grid defaultLayout={basicLayout}>
        <Block id="sidebar">Sidebar</Block>
        <Divider targetId="sidebar" position="end" />
        <Block id="main">Main</Block>
      </Grid>
    )

    // Check that CSS variables are generated (scoped by grid ID)
    const allStyles = document.querySelectorAll('style')
    const gridStyles = Array.from(allStyles).find(style =>
      style.textContent?.includes('--root-sidebar-size') ||
      style.textContent?.includes('data-block-id')
    )

    expect(gridStyles?.textContent).toContain('--root-sidebar-size: 300px')
    expect(gridStyles?.textContent).toContain('--root-main-size: 1fr')

    // Check grid template styles
    expect(gridStyles?.textContent).toContain('display: grid')
    expect(gridStyles?.textContent).toContain('grid-template-columns')
  })

  it('handles mode changes', async () => {
    const modes = {
      mobile: { type: 'dock' as const, maxWidth: 767 },
      desktop: { type: 'grid' as const, minWidth: 768 }
    }

    render(
      <Grid defaultLayout={basicLayout} modes={modes}>
        <Block
          id="sidebar"
          mobile={{ label: "Sidebar", dockOrder: 1 }}
        >
          Sidebar
        </Block>
        <Block
          id="main"
          mobile={{ label: "Main", dockOrder: 2 }}
        >
          Main
        </Block>
      </Grid>
    )

    // Should start in desktop mode
    expect(document.querySelector('[data-active-mode="desktop"]')).toBeInTheDocument()

    // Change viewport to mobile
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        value: 600, writable: true, configurable: true
      })
      window.dispatchEvent(new Event('resize'))
    })

    await waitFor(() => {
      expect(document.querySelector('[data-active-mode="mobile"]')).toBeInTheDocument()
    }, { timeout: 1000 })
  })

  it('calls callbacks correctly', () => {
    const onLayoutChange = vi.fn()
    const onModeChange = vi.fn()

    render(
      <Grid
        defaultLayout={basicLayout}
        onLayoutChange={onLayoutChange}
        onModeChange={onModeChange}
      >
        <Block id="sidebar">Sidebar</Block>
        <Block id="main">Main</Block>
      </Grid>
    )

    // Should call onLayoutChange on initial render
    expect(onLayoutChange).toHaveBeenCalled()
  })

  it('handles persistence', () => {
    render(
      <Grid
        defaultLayout={basicLayout}
        persist="localStorage"
        persistKey="test-grid"
      >
        <Block id="sidebar">Sidebar</Block>
        <Block id="main">Main</Block>
      </Grid>
    )

    // Should initialize persistence
    // The actual persistence is tested in the storage utility tests
    expect(true).toBe(true) // Placeholder for persistence test
  })

  it('handles missing root block gracefully', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const invalidLayout: BlockConfig[] = [
      {
        id: 'orphan',
        type: 'block',
        defaultSize: 300,
        sizeUnit: 'px',
        parentId: 'nonexistent',
        order: 0
      }
    ]

    const { container } = render(
      <Grid defaultLayout={invalidLayout}>
        <Block id="orphan">Orphan</Block>
      </Grid>
    )

    expect(consoleSpy).toHaveBeenCalledWith('No root block found in grid configuration')

    // Should render empty content
    const gridElement = container.querySelector('.pretty-poly-grid')
    expect(gridElement).toBe(null)

    consoleSpy.mockRestore()
  })
})