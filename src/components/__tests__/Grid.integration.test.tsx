import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Grid, Block, Divider } from '../..'
import { mockGetBoundingClientRect, setViewportSize } from '../../test/test-utils'
import type { BlockConfig, ResponsiveModes } from '../../types'

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

const responsiveModes: ResponsiveModes = {
  mobile: { type: 'dock', breakpoint: 0, maxWidth: 767 },
  tablet: { type: 'tabs', breakpoint: 768, minWidth: 768, maxWidth: 1023 },
  desktop: { type: 'grid', breakpoint: 1024, minWidth: 1024 }
}

describe('Grid Integration', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    // Mock getBoundingClientRect for layout calculations
    Element.prototype.getBoundingClientRect = vi.fn(() =>
      mockGetBoundingClientRect({
        width: 1000,
        height: 600,
        x: 0,
        y: 0
      })
    )

    // Set default desktop viewport
    setViewportSize(1024, 768)

    // Clear localStorage
    localStorage.clear()
  })

  describe('basic grid layout', () => {
    it('renders complete grid with blocks and dividers', () => {
      render(
        <Grid defaultLayout={basicLayout} className="test-grid">
          <Block id="sidebar" className="sidebar-content">
            <h2>Sidebar</h2>
          </Block>

          <Divider targetId="sidebar" position="end" />

          <Block id="main" className="main-content">
            <h1>Main Content</h1>
          </Block>
        </Grid>
      )

      // Check that all components rendered
      expect(screen.getByText('Sidebar')).toBeInTheDocument()
      expect(screen.getByText('Main Content')).toBeInTheDocument()
      expect(screen.getByRole('separator')).toBeInTheDocument()

      // Check grid container
      const gridContainer = document.querySelector('.pretty-poly-grid')
      expect(gridContainer).toHaveClass('test-grid')
    })

    it('generates correct CSS styles', () => {
      render(
        <Grid defaultLayout={basicLayout}>
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      // Check that CSS variables are injected
      const allStyles = document.querySelectorAll('style')
      const gridStyles = Array.from(allStyles).find(style =>
        style.textContent?.includes('--sidebar-size') ||
        style.textContent?.includes('data-block-id')
      )

      expect(gridStyles?.textContent).toContain('--sidebar-size: 300px')
      expect(gridStyles?.textContent).toContain('--main-size: 1fr')

      // Check grid template styles
      expect(gridStyles?.textContent).toContain('display: grid')
      expect(gridStyles?.textContent).toContain('grid-template-columns')
    })
  })

  describe('responsive behavior', () => {
    it('switches modes based on viewport size', async () => {
      render(
        <Grid defaultLayout={basicLayout} modes={responsiveModes}>
          <Block
            id="sidebar"
            mobile={{ icon: () => <span>📁</span>, label: "Sidebar", dockOrder: 1 }}
          >
            Sidebar
          </Block>
          <Block
            id="main"
            mobile={{ icon: () => <span>📄</span>, label: "Main", dockOrder: 2 }}
          >
            Main
          </Block>
        </Grid>
      )

      // Should start in desktop mode
      expect(document.querySelector('[data-active-mode]')).toHaveAttribute('data-active-mode', 'desktop')

      // Switch to mobile
      act(() => {
        setViewportSize(600, 800)
      })

      await waitFor(() => {
        expect(document.querySelector('[data-active-mode]')).toHaveAttribute('data-active-mode', 'mobile')
      })

      // Should render dock items instead of regular blocks
      await waitFor(() => {
        expect(document.querySelector('.pretty-poly-dock-item')).toBeInTheDocument()
      })
    })

    it('uses different block configurations per mode', () => {
      const { rerender } = render(
        <Grid defaultLayout={basicLayout} modes={responsiveModes}>
          <Block
            id="sidebar"
            desktop={{ className: "desktop-sidebar" }}
            mobile={{ className: "mobile-sidebar", label: "Sidebar" }}
          >
            Sidebar
          </Block>
        </Grid>
      )

      // Desktop configuration
      expect(document.querySelector('.desktop-sidebar')).toBeInTheDocument()

      // Switch to mobile and re-render
      act(() => {
        setViewportSize(600, 800)
      })

      rerender(
        <Grid defaultLayout={basicLayout} modes={responsiveModes}>
          <Block
            id="sidebar"
            desktop={{ className: "desktop-sidebar" }}
            mobile={{ className: "mobile-sidebar", label: "Sidebar" }}
          >
            Sidebar
          </Block>
        </Grid>
      )

      waitFor(() => {
        expect(document.querySelector('.mobile-sidebar')).toBeInTheDocument()
      })
    })
  })

  describe('resize interactions', () => {
    it('handles divider dragging to resize blocks', async () => {
      const onLayoutChange = vi.fn()

      render(
        <Grid defaultLayout={basicLayout} onLayoutChange={onLayoutChange}>
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      const divider = screen.getByRole('separator')

      // Mock divider position for calculations
      divider.getBoundingClientRect = vi.fn(() =>
        mockGetBoundingClientRect({ x: 300, left: 300, width: 8 })
      )

      // Start drag
      act(() => {
        fireEvent.mouseDown(divider, { clientX: 300, clientY: 300 })

        // Drag to resize
        fireEvent.mouseMove(document, { clientX: 350, clientY: 300 })

        // End drag
        fireEvent.mouseUp(document)
      })

      // Should have triggered layout change
      await waitFor(() => {
        expect(onLayoutChange).toHaveBeenCalled()
      })
    })

    it('enforces size constraints during resize', async () => {
      render(
        <Grid defaultLayout={basicLayout}>
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      const divider = screen.getByRole('separator')

      // Try to resize below minimum
      act(() => {
        fireEvent.mouseDown(divider, { clientX: 300, clientY: 300 })
        fireEvent.mouseMove(document, { clientX: 100, clientY: 300 }) // Way too small
        fireEvent.mouseUp(document)
      })

      // Should respect minimum size constraint (200px)
      await waitFor(() => {
        const allStyles = document.querySelectorAll('style')
        const gridStyles = Array.from(allStyles).find(style =>
          style.textContent?.includes('--sidebar-size')
        )
        expect(gridStyles?.textContent).toContain('--sidebar-size: 200px')
      })
    })
  })

  describe('collapse/expand functionality', () => {
    it('collapses block on double-click', async () => {
      render(
        <Grid defaultLayout={basicLayout}>
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      const sidebar = screen.getByText('Sidebar').closest('.pretty-poly-block')
      expect(sidebar).toBeTruthy()

      // Double-click to collapse
      await act(async () => {
        await user.dblClick(sidebar!)
      })

      // Should trigger collapse (block should get collapsed class)
      await waitFor(() => {
        expect(sidebar).toHaveClass('pretty-poly-block--collapsed')
      })
    })
  })

  describe('keyboard navigation', () => {
    it('allows keyboard resizing with arrow keys', async () => {
      render(
        <Grid defaultLayout={basicLayout}>
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      const divider = screen.getByRole('separator')
      divider.focus()

      // Use keyboard to resize
      await user.keyboard('{Control>}{ArrowRight}{/Control}')

      // Should trigger resize (tested via CSS variable changes)
      await waitFor(() => {
        const styleElement = document.querySelector('style')
        // Size should have increased from keyboard resize
        expect(styleElement?.textContent).not.toContain('--sidebar-size: 300px')
      })
    })

    it('navigates between focusable blocks', async () => {
      render(
        <Grid defaultLayout={basicLayout}>
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      const sidebar = screen.getByText('Sidebar').parentElement

      // Focus sidebar and navigate
      sidebar?.focus()
      expect(sidebar).toHaveFocus()

      // Navigate to next block
      await user.keyboard('{ArrowRight}')

      // Should focus main block or divider
      expect(document.activeElement).not.toBe(sidebar)
    })
  })

  describe('persistence', () => {
    it('saves and loads layout state', async () => {
      const { rerender } = render(
        <Grid
          defaultLayout={basicLayout}
          persist="localStorage"
          persistKey="test-grid"
        >
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      // Trigger a resize to save state
      const divider = screen.getByRole('separator')
      act(() => {
        fireEvent.mouseDown(divider, { clientX: 300, clientY: 300 })
        fireEvent.mouseMove(document, { clientX: 350, clientY: 300 })
        fireEvent.mouseUp(document)
      })

      // Wait for state to be persisted
      await waitFor(() => {
        expect(localStorage.getItem('pretty-poly-grid-test-grid')).toBeTruthy()
      })

      // Re-render component (simulating page reload)
      rerender(
        <Grid
          defaultLayout={basicLayout}
          persist="localStorage"
          persistKey="test-grid"
        >
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      // Should load the persisted state
      const savedState = localStorage.getItem('pretty-poly-grid-test-grid')
      expect(savedState).toBeTruthy()

      const parsedState = JSON.parse(savedState!)
      expect(parsedState.blocks).toBeDefined()
    })
  })

  describe('mode change callbacks', () => {
    it('calls onModeChange when viewport changes', async () => {
      const onModeChange = vi.fn()

      render(
        <Grid
          defaultLayout={basicLayout}
          modes={responsiveModes}
          onModeChange={onModeChange}
        >
          <Block id="sidebar">Sidebar</Block>
          <Block id="main">Main</Block>
        </Grid>
      )

      // Change viewport to trigger mode change
      act(() => {
        setViewportSize(600, 800)
      })

      await waitFor(() => {
        expect(onModeChange).toHaveBeenCalledWith('mobile', 'desktop')
      })
    })

    it('calls onLayoutChange when blocks are resized', async () => {
      const onLayoutChange = vi.fn()

      render(
        <Grid defaultLayout={basicLayout} onLayoutChange={onLayoutChange}>
          <Block id="sidebar">Sidebar</Block>
          <Divider targetId="sidebar" position="end" />
          <Block id="main">Main</Block>
        </Grid>
      )

      // Should be called on initial render
      expect(onLayoutChange).toHaveBeenCalled()

      // Clear previous calls
      onLayoutChange.mockClear()

      // Trigger resize
      const divider = screen.getByRole('separator')
      act(() => {
        fireEvent.mouseDown(divider, { clientX: 300, clientY: 300 })
        fireEvent.mouseMove(document, { clientX: 350, clientY: 300 })
        fireEvent.mouseUp(document)
      })

      // Should be called again
      await waitFor(() => {
        expect(onLayoutChange).toHaveBeenCalled()
      })
    })
  })

  describe('error handling', () => {
    it('handles missing root block gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      const invalidLayout: BlockConfig[] = [
        {
          id: 'orphan',
          type: 'block',
          defaultSize: 300,
          sizeUnit: 'px',
          parentId: 'nonexistent', // Invalid parent
          order: 0
        }
      ]

      render(
        <Grid defaultLayout={invalidLayout}>
          <Block id="orphan">Orphan Block</Block>
        </Grid>
      )

      expect(consoleSpy).toHaveBeenCalledWith('No root block found in grid configuration')
      consoleSpy.mockRestore()
    })
  })
})