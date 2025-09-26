import { useCallback, useEffect, useRef } from 'react'
import type { BlockConfig, Direction, SizeUnit } from '../types'
import {
  calculateConstrainedSize,
  clamp,
  getFlexSpacePx,
  pxToFr,
  findAdjacentBlock
} from '../utils/calculations'
import { validateTwoWayResize } from '../utils/constraints'

export interface UseGridResizeOptions {
  blocks: BlockConfig[]
  containerRef: React.RefObject<HTMLElement>
  onSizeChange?: (blockId: string, newSize: number) => void
  direction?: Direction
}

export interface ResizeState {
  isDragging: boolean
  activeBlockId?: string
  activeDividerId?: string
  startPosition: number
  initialSize: number
}

/**
 * Main hook for handling grid resize operations
 * Ported from the original GridResize TypeScript implementation
 */
export function useGridResize({
  blocks,
  containerRef,
  onSizeChange,
  direction = 'row'
}: UseGridResizeOptions) {
  const resizeState = useRef<ResizeState>({
    isDragging: false,
    startPosition: 0,
    initialSize: 0
  })

  /**
   * Get the client axis for mouse/touch events based on direction
   */
  const getClientAxis = useCallback((direction: Direction): 'clientX' | 'clientY' => {
    return direction === 'column' ? 'clientX' : 'clientY'
  }, [])

  /**
   * Get container size in the relevant dimension
   */
  const getContainerSize = useCallback((): number => {
    if (!containerRef.current) return 0

    const rect = containerRef.current.getBoundingClientRect()
    return direction === 'column' ? rect.width : rect.height
  }, [direction])

  /**
   * Calculate pixels per fr unit for the current container
   */
  const calculatePixelsPerFr = useCallback((): number => {
    const containerSize = getContainerSize()
    if (containerSize === 0) return 0

    // Calculate fixed space (px blocks + dividers)
    const fixedSpace = blocks
      .filter(block => block.sizeUnit === 'px')
      .reduce((sum, block) => sum + (block.defaultSize || 0), 0)

    // Calculate gaps (dividers)
    const gapSpace = blocks
      .filter(block => block.dividerPosition !== 'none')
      .reduce((sum, block) => sum + (block.dividerSize || 8), 0)

    // Calculate total fr units
    const totalFr = blocks
      .filter(block => block.sizeUnit === 'fr')
      .reduce((sum, block) => sum + (block.defaultSize || 1), 0)

    const flexSpace = getFlexSpacePx(containerSize, fixedSpace, gapSpace)
    return totalFr > 0 ? flexSpace / totalFr : 0
  }, [blocks, getContainerSize])

  /**
   * Start a resize operation
   */
  const startResize = useCallback((
    blockId: string,
    dividerId: string,
    event: MouseEvent | TouchEvent
  ) => {
    const block = blocks.find(b => b.id === blockId)
    if (!block) return

    const clientAxis = getClientAxis(direction)
    const startPosition = event instanceof MouseEvent
      ? event[clientAxis]
      : event.touches[0][clientAxis]

    resizeState.current = {
      isDragging: true,
      activeBlockId: blockId,
      activeDividerId: dividerId,
      startPosition,
      initialSize: block.defaultSize || 0
    }

    // Prevent text selection during drag
    document.body.style.userSelect = 'none'
    document.body.style.cursor = direction === 'column' ? 'col-resize' : 'row-resize'
  }, [blocks, direction, getClientAxis])

  /**
   * Handle resize during drag
   */
  const handleResize = useCallback((event: MouseEvent | TouchEvent) => {
    const state = resizeState.current
    if (!state.isDragging || !state.activeBlockId) return

    const block = blocks.find(b => b.id === state.activeBlockId)
    if (!block) return

    const clientAxis = getClientAxis(direction)
    const currentPosition = event instanceof MouseEvent
      ? event[clientAxis]
      : event.touches[0][clientAxis]

    const deltaPx = currentPosition - state.startPosition

    if (block.sizeUnit === 'px') {
      // Handle pixel-based resizing
      const dividerPosition = block.dividerPosition || 'end'
      const shouldInvertDelta = dividerPosition === 'start'

      const newSize = calculateConstrainedSize(
        deltaPx,
        state.initialSize,
        block.minSize,
        block.maxSize,
        shouldInvertDelta
      )

      // Apply collapse logic if enabled
      // TODO: Implement collapse logic here

      onSizeChange?.(state.activeBlockId, newSize)
    } else if (block.sizeUnit === 'fr') {
      // Handle fractional resizing (two-way)
      const pixelsPerFr = calculatePixelsPerFr()
      const deltaFr = pxToFr(deltaPx, pixelsPerFr)

      // Find adjacent block for two-way resizing
      const blockIndex = blocks.findIndex(b => b.id === state.activeBlockId)
      const frBlocks = blocks.filter(b => b.sizeUnit === 'fr')
      const adjacentBlock = findAdjacentBlock(
        frBlocks.findIndex(b => b.id === state.activeBlockId),
        frBlocks,
        block.dividerPosition === 'start' ? 'start' : 'end'
      )

      if (adjacentBlock) {
        // Calculate proposed deltas
        const dividerPosition = block.dividerPosition || 'end'
        let targetDelta: number
        let adjacentDelta: number

        if (dividerPosition === 'start') {
          targetDelta = -deltaFr
          adjacentDelta = deltaFr
        } else {
          targetDelta = deltaFr
          adjacentDelta = -deltaFr
        }

        // Validate and adjust for constraints
        const validation = validateTwoWayResize(
          block,
          adjacentBlock,
          targetDelta,
          adjacentDelta,
          pixelsPerFr
        )

        // Apply the validated changes
        const newTargetSize = (block.defaultSize || 1) + validation.adjustedTargetDelta
        const newAdjacentSize = (adjacentBlock.defaultSize || 1) + validation.adjustedAdjacentDelta

        onSizeChange?.(state.activeBlockId, newTargetSize)
        onSizeChange?.(adjacentBlock.id, newAdjacentSize)
      }
    }
  }, [blocks, direction, getClientAxis, calculatePixelsPerFr, onSizeChange])

  /**
   * End resize operation
   */
  const endResize = useCallback(() => {
    resizeState.current = {
      isDragging: false,
      startPosition: 0,
      initialSize: 0
    }

    // Restore normal cursor and text selection
    document.body.style.userSelect = ''
    document.body.style.cursor = ''
  }, [])

  /**
   * Reset a block to its default size
   */
  const resetBlock = useCallback((blockId: string) => {
    const block = blocks.find(b => b.id === blockId)
    if (block && block.defaultSize !== undefined) {
      onSizeChange?.(blockId, block.defaultSize)
    }
  }, [blocks, onSizeChange])

  /**
   * Collapse a block
   */
  const collapseBlock = useCallback((blockId: string) => {
    const block = blocks.find(b => b.id === blockId)
    if (block && block.collapseTo !== undefined) {
      onSizeChange?.(blockId, block.collapseTo)
    }
  }, [blocks, onSizeChange])

  /**
   * Expand a collapsed block
   */
  const expandBlock = useCallback((blockId: string) => {
    const block = blocks.find(b => b.id === blockId)
    if (block && block.defaultSize !== undefined) {
      onSizeChange?.(blockId, block.defaultSize)
    }
  }, [blocks, onSizeChange])

  /**
   * Check if a block is collapsed
   */
  const isBlockCollapsed = useCallback((blockId: string): boolean => {
    const block = blocks.find(b => b.id === blockId)
    if (!block || !block.collapseAt) return false

    return (block.defaultSize || 0) <= block.collapseAt
  }, [blocks])

  // Set up global event listeners for resize operations
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault()
      handleResize(e)
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      handleResize(e)
    }

    const handleMouseUp = () => {
      endResize()
    }

    const handleTouchEnd = () => {
      endResize()
    }

    if (resizeState.current.isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [handleResize, endResize])

  return {
    // State
    isDragging: resizeState.current.isDragging,
    activeBlockId: resizeState.current.activeBlockId,
    activeDividerId: resizeState.current.activeDividerId,

    // Actions
    startResize,
    resetBlock,
    collapseBlock,
    expandBlock,

    // Utilities
    isBlockCollapsed,
    getContainerSize,
    calculatePixelsPerFr
  }
}