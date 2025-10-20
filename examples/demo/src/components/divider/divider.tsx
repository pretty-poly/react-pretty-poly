import React, { useRef, useCallback, useState, useLayoutEffect, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { useGridState, useGridResize } from "@/components/grid/grid-provider"

interface DividerProps {
  targetId: string
  position: 'start' | 'end'
  direction: 'vertical' | 'horizontal'
  size?: number
  className?: string
  'aria-label'?: string
}

/**
 * Absolutely positioned divider overlay component
 * Positioned using getBoundingClientRect for accuracy
 */
export const Divider: React.FC<DividerProps> = ({
  targetId,
  position,
  direction,
  size = 4, // Default hover zone size (like VS Code)
  className,
  'aria-label': ariaLabel
}) => {
  const dividerRef = useRef<HTMLDivElement>(null)
  const state = useGridState()
  const { startResize, isDragging, activeDividerId } = useGridResize()

  const [dividerPosition, setDividerPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  })

  const targetBlock = state.blocks[targetId]
  const isVertical = direction === 'vertical'
  const dividerId = `${targetId}-${position}-divider`
  const isActive = isDragging && activeDividerId === dividerId

  /**
   * Calculate and update divider position based on block boundaries
   */
  const updatePosition = useCallback(() => {
    // Find the grid container (has data-grid-id)
    const gridContainer = document.querySelector('[data-grid-id]') as HTMLElement
    const targetElement = document.querySelector(`[data-block-id="${targetId}"]`) as HTMLElement

    if (!gridContainer || !targetElement) return

    const containerRect = gridContainer.getBoundingClientRect()
    const blockRect = targetElement.getBoundingClientRect()

    // Find parent block to constrain divider dimensions for nested blocks
    const parentId = targetBlock?.parentId
    const parentElement = parentId
      ? document.querySelector(`[data-block-id="${parentId}"]`) as HTMLElement
      : gridContainer

    if (!parentElement) return

    // Check if parent has a toolbar - if so, constrain divider to content area only
    const hasToolbar = parentElement.hasAttribute('data-has-toolbar')
    const contentWrapper = hasToolbar
      ? parentElement.querySelector('[data-split-content]') as HTMLElement
      : null

    // Use content wrapper rect if parent has toolbar, otherwise use parent rect
    const constraintRect = (contentWrapper || parentElement).getBoundingClientRect()

    if (isVertical) {
      // Vertical divider - positioned on left or right edge of block
      const edgePosition = position === 'start'
        ? blockRect.left - containerRect.left
        : blockRect.right - containerRect.left

      setDividerPosition({
        left: edgePosition - (size / 2), // Center on edge
        top: constraintRect.top - containerRect.top, // Position relative to constraint area
        width: size,
        height: constraintRect.height // Use constraint height (content area if toolbar present)
      })
    } else {
      // Horizontal divider - positioned on top or bottom edge of block
      const edgePosition = position === 'start'
        ? blockRect.top - containerRect.top
        : blockRect.bottom - containerRect.top

      setDividerPosition({
        left: constraintRect.left - containerRect.left, // Position relative to constraint area
        top: edgePosition - (size / 2), // Center on edge
        width: constraintRect.width, // Use constraint width (content area if toolbar present)
        height: size
      })
    }
  }, [targetId, position, isVertical, size, targetBlock?.parentId])

  /**
   * Set up ResizeObserver to track block and container size changes
   */
  useLayoutEffect(() => {
    const gridContainer = document.querySelector('[data-grid-id]') as HTMLElement
    const targetElement = document.querySelector(`[data-block-id="${targetId}"]`) as HTMLElement

    if (!gridContainer || !targetElement) return

    // Initial position
    updatePosition()

    // Watch for size changes
    const resizeObserver = new ResizeObserver(() => {
      updatePosition()
    })

    resizeObserver.observe(gridContainer)
    resizeObserver.observe(targetElement)

    // Also observe parent element if it exists (for nested blocks)
    const parentId = targetBlock?.parentId
    const parentElement = parentId
      ? document.querySelector(`[data-block-id="${parentId}"]`) as HTMLElement
      : null

    if (parentElement) {
      resizeObserver.observe(parentElement)

      // If parent has toolbar, also observe the content wrapper
      const hasToolbar = parentElement.hasAttribute('data-has-toolbar')
      if (hasToolbar) {
        const contentWrapper = parentElement.querySelector('[data-split-content]') as HTMLElement
        if (contentWrapper) {
          resizeObserver.observe(contentWrapper)
        }
      }
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [targetId, updatePosition, targetBlock?.parentId])

  /**
   * Also update position when blocks change (resize operations)
   */
  useEffect(() => {
    updatePosition()
  }, [state.blocks, updatePosition])

  /**
   * Handle resize start
   */
  const handlePointerDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault()
    startResize(targetId, dividerId, event)
  }, [targetId, dividerId, startResize])

  if (!targetBlock) {
    return null
  }

  return (
    <div
      ref={dividerRef}
      className={cn(
        'pretty-poly-divider',
        'absolute',
        'bg-transparent', // Invisible by default
        'transition-colors duration-100',
        'hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]',
        isActive && 'bg-[var(--divider-active-color,rgba(59,130,246,0.7))]',
        isVertical ? 'cursor-col-resize' : 'cursor-row-resize',
        className
      )}
      style={{
        left: `${dividerPosition.left}px`,
        top: `${dividerPosition.top}px`,
        width: `${dividerPosition.width}px`,
        height: `${dividerPosition.height}px`,
        pointerEvents: 'auto', // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      }}
      data-divider-id={dividerId}
      data-target-block={targetId}
      data-divider-position={position}
      data-divider-direction={direction}
      role="separator"
      aria-label={ariaLabel || `Resize ${targetId}`}
      aria-valuenow={targetBlock?.defaultSize}
      aria-valuemin={targetBlock?.minSize}
      aria-valuemax={targetBlock?.maxSize}
      tabIndex={0}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
    />
  )
}

Divider.displayName = 'Divider'
