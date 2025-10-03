import React, { forwardRef, useRef, useCallback, useState, useEffect } from 'react'
import type { DividerProps, Direction } from '../../types'
import { cn } from '../../utils/cn'
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
    className={cn(
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
    position,
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

    // Auto-detect target block and position from DOM (only if not explicitly provided)
    const [actualTargetId, setActualTargetId] = useState<string>('')
    const [detectedPosition, setDetectedPosition] = useState<'start' | 'end'>('end')

    // Position detection logic with smart fr/px handling
    const detectTargetAndPosition = useCallback(() => {
      const dividerEl = localRef.current
      if (!dividerEl) return

      // If both targetId and position are explicitly provided, use them
      if (targetId && position && position !== 'auto' && position !== 'none') {
        if (targetId !== actualTargetId) {
          setActualTargetId(targetId)
        }
        if (position !== detectedPosition) {
          setDetectedPosition(position)
        }
        return
      }

      let resolvedTargetId = targetId
      let resolvedPosition: 'start' | 'end' = (position === 'start' || position === 'end') ? position : 'end'

      if (!targetId) {
        // Smart auto-detection: prefer px blocks over fr blocks
        const prevSibling = dividerEl.previousElementSibling
        const nextSibling = dividerEl.nextElementSibling

        const prevBlockId = prevSibling?.getAttribute('data-block-id')
        const nextBlockId = nextSibling?.getAttribute('data-block-id')

        const prevBlock = prevBlockId ? state.blocks[prevBlockId] : null
        const nextBlock = nextBlockId ? state.blocks[nextBlockId] : null

        // Smart selection logic: prefer px blocks over fr blocks
        if (prevBlock && nextBlock) {
          // If one is fr and the other is px, always target the px block
          if (prevBlock.sizeUnit === 'fr' && nextBlock.sizeUnit === 'px') {
            resolvedTargetId = nextBlockId!
            resolvedPosition = 'start' // We're before the px block
          } else if (prevBlock.sizeUnit === 'px' && nextBlock.sizeUnit === 'fr') {
            resolvedTargetId = prevBlockId!
            resolvedPosition = 'end' // We're after the px block
          } else {
            // Default: resize the previous sibling block
            resolvedTargetId = prevBlockId!
            resolvedPosition = 'end' // We're after the block
          }
        } else if (prevBlock) {
          // Only previous sibling available
          // If it's a group, find the last resizable block within it
          if (prevBlock.type === 'group') {
            const groupChildren = Object.values(state.blocks)
              .filter(b => b.parentId === prevBlockId)
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .filter(b => b.type === 'block' && (b.sizeUnit === 'px' || b.sizeUnit === 'fr'))

            if (groupChildren.length > 0) {
              const lastChild = groupChildren[groupChildren.length - 1]
              resolvedTargetId = lastChild.id
              resolvedPosition = 'end' // We're after the last block in the group
            } else {
              resolvedTargetId = prevBlockId!
              resolvedPosition = 'end'
            }
          } else {
            resolvedTargetId = prevBlockId!
            resolvedPosition = 'end' // We're after the block
          }
        } else if (nextBlock) {
          // Only next sibling available
          // If it's a group, find the first resizable block within it
          if (nextBlock.type === 'group') {
            const groupChildren = Object.values(state.blocks)
              .filter(b => b.parentId === nextBlockId)
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .filter(b => b.type === 'block' && (b.sizeUnit === 'px' || b.sizeUnit === 'fr'))

            if (groupChildren.length > 0) {
              const firstChild = groupChildren[0]
              resolvedTargetId = firstChild.id
              resolvedPosition = 'start' // We're before the first block in the group
            } else {
              resolvedTargetId = nextBlockId!
              resolvedPosition = 'start'
            }
          } else {
            resolvedTargetId = nextBlockId!
            resolvedPosition = 'start' // We're before the block
          }
        }
      } else {
        // With explicit targetId, check DOM relationship for position
        const targetEl = document.querySelector(`[data-block-id="${targetId}"]`)
        if (targetEl) {
          const position = targetEl.compareDocumentPosition(dividerEl)
          resolvedPosition = (position & Node.DOCUMENT_POSITION_FOLLOWING) ? 'start' : 'end'
        }
      }

      if (resolvedTargetId && resolvedTargetId !== actualTargetId) {
        setActualTargetId(resolvedTargetId)
      }
      if (resolvedPosition !== detectedPosition) {
        setDetectedPosition(resolvedPosition)
      }
    }, [targetId, position, actualTargetId, detectedPosition, state.blocks])

    // Detect position on mount and when dependencies change
    useEffect(() => {
      detectTargetAndPosition()
    }, [detectTargetAndPosition])

    // Also re-detect when blocks change (DOM updates)
    useEffect(() => {
      detectTargetAndPosition()
    }, [state.blocks])

    // Get target block configuration - don't fail if not found yet, as DOM might not be ready
    const targetBlock = actualTargetId ? state.blocks[actualTargetId] : null

    // Determine direction from parent group (the group that contains this block)
    const parentBlock = targetBlock?.parentId ? state.blocks[targetBlock.parentId] : null
    const direction: Direction = (parentBlock?.type === 'group' ? parentBlock.direction : undefined) || 'row'
    const isVertical = direction === 'column'

    // Check if this divider is currently active
    const isActiveDivider = isDragging && actualTargetId && activeDividerId === `${actualTargetId}-${detectedPosition}-divider`

    // Calculate cursor style
    const cursorStyle = isVertical ? 'row-resize' : 'col-resize'

    // Handle mouse/touch start - ALL HOOKS MUST BE BEFORE EARLY RETURNS
    const handlePointerDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
      if (!actualTargetId) return

      event.preventDefault()
      const dividerId = `${actualTargetId}-${detectedPosition}-divider`
      startResize(actualTargetId, dividerId, event)
    }, [actualTargetId, detectedPosition, startResize])

    // Handle double-click to reset - ALL HOOKS MUST BE BEFORE EARLY RETURNS
    const handleDoubleClick = useCallback(() => {
      if (targetBlock?.defaultSize !== undefined) {
        // This would need to be handled through the context
        // For now, we'll keep the existing reset logic
      }
    }, [targetBlock])

    // NOW we can do early returns after all hooks are defined
    if (!targetBlock && actualTargetId) {
      console.warn(`Divider target block "${actualTargetId}" not found`)
    }

    // Don't render dividers if current mode doesn't support resizing
    const supportsResizing = supportsFeature('resizing')
    if (!supportsResizing) {
      return null
    }

    // Render the divider
    const HandleComponent = CustomHandle || DefaultHandle

    return (
      <div
        ref={combinedRef}
        className={cn(
          'relative flex items-center justify-center bg-transparent',
          'select-none touch-none transition-colors',
          'hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:bg-accent',
          isVertical ? 'cursor-row-resize' : 'cursor-col-resize',
          isActiveDivider && 'pretty-poly-divider--dragging',
          className
        )}
        data-block-id={actualTargetId ? `${actualTargetId}-${detectedPosition}-divider` : 'loading-divider'}
        data-block-type="divider"
        data-block-target={actualTargetId || ''}
        data-block-direction={direction}
        data-block-divider-position={detectedPosition}
        style={{
          [isVertical ? 'height' : 'width']: `${size}px`,
          cursor: cursorStyle
        }}
        role="separator"
        aria-label={ariaLabel || `Resize ${actualTargetId || 'block'}`}
        aria-valuenow={targetBlock?.defaultSize}
        aria-valuemin={targetBlock?.minSize}
        aria-valuemax={targetBlock?.maxSize}
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
          className={cn(
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