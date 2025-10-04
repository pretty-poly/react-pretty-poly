import React from 'react'
import { vi } from 'vitest'
import { render, RenderOptions } from '@testing-library/react'
import { GridProvider } from '../components/Grid/GridProvider'
import type { BlockConfig, ResponsiveModes } from '../types'

// Default test layout for testing
export const defaultTestLayout: BlockConfig[] = [
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

// Default responsive modes for testing
export const defaultTestModes: ResponsiveModes = {
  mobile: {
    type: 'dock',
    breakpoint: 0,
    maxWidth: 767
  },
  desktop: {
    type: 'grid',
    breakpoint: 768,
    minWidth: 768
  }
}

// Custom render function with GridProvider wrapper
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  blocks?: BlockConfig[]
  modes?: ResponsiveModes
  gridId?: string
  persist?: boolean | string
}

// eslint-disable-next-line react-refresh/only-export-components
function GridWrapper({
  children,
  blocks = defaultTestLayout,
  modes = defaultTestModes,
  gridId = 'test-grid',
  persist = false
}: {
  children: React.ReactNode
} & CustomRenderOptions) {
  return (
    <GridProvider
      blocks={blocks}
      modes={modes}
      gridId={gridId}
      persist={persist}
    >
      {children}
    </GridProvider>
  )
}

export function renderWithGrid(
  ui: React.ReactElement,
  options: CustomRenderOptions = {}
) {
  const { blocks, modes, gridId, persist, ...renderOptions } = options

  return render(ui, {
    wrapper: (props) => (
      <GridWrapper
        blocks={blocks}
        modes={modes}
        gridId={gridId}
        persist={persist}
        {...props}
      />
    ),
    ...renderOptions
  })
}

// Mock function helpers
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = vi.fn()
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  })
  window.IntersectionObserver = mockIntersectionObserver
}

export const mockGetBoundingClientRect = (rect: Partial<DOMRect>) => {
  const defaultRect: DOMRect = {
    x: 0,
    y: 0,
    width: 1000,
    height: 800,
    top: 0,
    left: 0,
    bottom: 800,
    right: 1000,
    toJSON: () => ({})
  }

  return {
    ...defaultRect,
    ...rect
  }
}

// Helper to simulate viewport changes
export const setViewportSize = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })

  // Dispatch resize event
  window.dispatchEvent(new Event('resize'))
}

// Helper to simulate mouse events
export const createMouseEvent = (
  type: string,
  clientX: number = 0,
  clientY: number = 0
): MouseEvent => {
  return new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    clientX,
    clientY,
    buttons: 1
  })
}

// Helper to simulate touch events
export const createTouchEvent = (
  type: string,
  clientX: number = 0,
  clientY: number = 0
): TouchEvent => {
  const touch = new Touch({
    identifier: 1,
    target: document.body,
    clientX,
    clientY,
    radiusX: 0,
    radiusY: 0,
    rotationAngle: 0,
    force: 1
  })

  return new TouchEvent(type, {
    bubbles: true,
    cancelable: true,
    touches: [touch],
    targetTouches: [touch],
    changedTouches: [touch]
  })
}

// Re-export everything from testing-library
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'