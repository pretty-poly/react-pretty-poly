import React, { forwardRef, useRef, useCallback } from 'react'
import { clsx } from 'clsx'
import type { DividerProps, Direction } from '../../types'
import { useGridState, useGridResize } from '../Grid/GridProvider'
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
    const { startResize, isDragging, activeDividerId } = useGridResize()
    const { supportsFeature } = useGridMode()

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

    // Check if this divider is currently active
    const isActiveDivider = isDragging && activeDividerId === `${targetId}-${position}-divider`

    // Calculate cursor style
    const cursorStyle = isVertical ? 'row-resize' : 'col-resize'

    // Handle mouse/touch start
    const handlePointerDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
      event.preventDefault()

      const dividerId = `${targetId}-${position}-divider`
      startResize(targetId, dividerId, event)
    }, [targetId, position, startResize])

    // Handle double-click to reset
    const handleDoubleClick = useCallback(() => {
      if (targetBlock.defaultSize !== undefined) {
        // This would need to be handled through the context
        // For now, we'll keep the existing reset logic
      }
    }, [targetBlock])

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
          isActiveDivider && 'pretty-poly-divider--dragging',
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
          cursor: cursorStyle
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
            // For now, we'll skip keyboard resizing since it needs to be integrated with the context
            // This would require adding keyboard resize support to the context
          }
        }}
      >
        <HandleComponent
          className={clsx(
            'transition-colors hover:bg-foreground/20',
            isActiveDivider && 'bg-foreground/30'
          )}
          direction={direction}
        />
      </div>
    )
  }
)

Divider.displayName = 'Divider'