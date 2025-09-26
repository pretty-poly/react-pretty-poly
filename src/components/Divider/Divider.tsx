import React, { forwardRef, useRef, useCallback, useState, useEffect } from 'react'
import { clsx } from 'clsx'
import type { DividerProps, Direction } from '../../types'
import { useGridState, useGridActions } from '../Grid/GridProvider'
import { useGridMode } from '../../hooks/useGridMode'

/**
 * Default divider handle component
 */
const DefaultHandle: React.FC<{ className?: string; direction: Direction }> = ({
  className,
  direction
}) => (
  <div
    className={clsx(
      'pretty-poly-divider-handle',
      direction === 'column' ? 'w-[1px] h-full' : 'w-full h-[1px]',
      'bg-border transition-colors',
      className
    )}
  />
)

/**
 * Divider component for resizing between blocks
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({
    targetId,
    position = 'end',
    size = 8,
    className,
    handle: CustomHandle,
    'aria-label': ariaLabel
  }, ref) => {
    const localRef = useRef<HTMLDivElement>(null)
    const combinedRef = ref || localRef

    const state = useGridState()
    const { resizeBlock } = useGridActions()
    const { supportsFeature } = useGridMode()

    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0, initialSize: 0 })

    // Get target block configuration
    const targetBlock = state.blocks[targetId]
    if (!targetBlock) {
      console.warn(`Divider target block "${targetId}" not found`)
      return null
    }

    // Don't render dividers if current mode doesn't support resizing
    if (!supportsFeature('resizing')) {
      return null
    }

    // Determine direction from parent group (the group that contains this block)
    const parentBlock = targetBlock.parentId ? state.blocks[targetBlock.parentId] : null
    const direction: Direction = (parentBlock?.type === 'group' ? parentBlock.direction : undefined) || 'row'
    const isVertical = direction === 'column'

    // Calculate cursor style based on direction and drag state
    const getCursorStyle = useCallback(() => {
      if (isDragging) {
        return isVertical ? 'row-resize' : 'col-resize'
      }

      // Check if block is at size limits
      const currentSize = targetBlock.defaultSize || 0
      const minSize = targetBlock.minSize || 0
      const maxSize = targetBlock.maxSize || Infinity

      if (currentSize <= minSize) {
        return isVertical ? 's-resize' : 'e-resize' // Can only grow
      }
      if (currentSize >= maxSize) {
        return isVertical ? 'n-resize' : 'w-resize' // Can only shrink
      }

      return isVertical ? 'row-resize' : 'col-resize'
    }, [isDragging, isVertical, targetBlock])

    // Handle mouse/touch start
    const handlePointerDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
      event.preventDefault()

      if (!combinedRef || !('current' in combinedRef) || !combinedRef.current) return

      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY

      setIsDragging(true)
      setDragStart({
        x: clientX,
        y: clientY,
        initialSize: targetBlock.defaultSize || 0
      })

      // Set document cursor
      document.body.style.cursor = getCursorStyle()
      document.body.style.userSelect = 'none'
    }, [targetBlock, getCursorStyle, combinedRef])

    // Handle pointer move during drag
    const handlePointerMove = useCallback((event: MouseEvent | TouchEvent) => {
      if (!isDragging) return

      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY

      const deltaX = clientX - dragStart.x
      const deltaY = clientY - dragStart.y
      const delta = isVertical ? deltaY : deltaX

      // Apply direction inversion for start position dividers
      const actualDelta = position === 'start' ? -delta : delta
      const newSize = Math.max(
        targetBlock.minSize || 0,
        Math.min(
          targetBlock.maxSize || Infinity,
          dragStart.initialSize + actualDelta
        )
      )

      resizeBlock(targetId, newSize)
    }, [
      isDragging,
      dragStart,
      isVertical,
      position,
      targetBlock,
      resizeBlock,
      targetId
    ])

    // Handle pointer up (end drag)
    const handlePointerUp = useCallback(() => {
      setIsDragging(false)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }, [])

    // Handle double-click to reset
    const handleDoubleClick = useCallback(() => {
      if (targetBlock.defaultSize !== undefined) {
        resizeBlock(targetId, targetBlock.defaultSize)
      }
    }, [targetBlock.defaultSize, resizeBlock, targetId])

    // Set up global pointer event listeners during drag
    useEffect(() => {
      if (!isDragging) return

      const handleMouseMove = (e: MouseEvent) => {
        e.preventDefault()
        handlePointerMove(e)
      }

      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault()
        handlePointerMove(e)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handlePointerUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handlePointerUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handlePointerUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handlePointerUp)
      }
    }, [isDragging, handlePointerMove, handlePointerUp])

    // Render the divider
    const HandleComponent = CustomHandle || DefaultHandle

    return (
      <div
        ref={combinedRef}
        className={clsx(
          'pretty-poly-divider',
          'flex items-center justify-center',
          'select-none touch-none',
          isVertical ? 'cursor-row-resize' : 'cursor-col-resize',
          isDragging && 'pretty-poly-divider--dragging',
          position === 'start' && 'pretty-poly-divider--start',
          position === 'end' && 'pretty-poly-divider--end',
          className
        )}
        data-block-id={`${targetId}-${position}-divider`}
        data-block-type="divider"
        data-block-target={targetId}
        data-block-direction={direction}
        data-block-divider-position={position}
        style={{
          [isVertical ? 'height' : 'width']: `${size}px`,
          cursor: getCursorStyle()
        }}
        role="separator"
        aria-label={ariaLabel || `Resize ${targetId}`}
        aria-valuenow={targetBlock.defaultSize}
        aria-valuemin={targetBlock.minSize}
        aria-valuemax={targetBlock.maxSize}
        tabIndex={0}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        onDoubleClick={handleDoubleClick}
        onKeyDown={(e) => {
          // Allow keyboard resizing
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault()
            const isIncrement = (isVertical && e.key === 'ArrowRight') ||
                              (!isVertical && e.key === 'ArrowDown')
            const step = e.shiftKey ? 50 : 10
            const delta = isIncrement ? step : -step
            const actualDelta = position === 'start' ? -delta : delta

            const currentSize = targetBlock.defaultSize || 0
            const newSize = Math.max(
              targetBlock.minSize || 0,
              Math.min(
                targetBlock.maxSize || Infinity,
                currentSize + actualDelta
              )
            )

            resizeBlock(targetId, newSize)
          }
        }}
      >
        <HandleComponent
          className={clsx(
            'transition-colors hover:bg-foreground/20',
            isDragging && 'bg-foreground/30'
          )}
          direction={direction}
        />
      </div>
    )
  }
)

Divider.displayName = 'Divider'