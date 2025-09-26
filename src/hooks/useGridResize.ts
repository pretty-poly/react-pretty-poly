import { useCallback, useEffect } from 'react'
import type { BlockConfig, Direction } from '../types'
import { useGridResize as useGridResizeContext } from '../components/Grid/GridProvider'
import { getFlexSpacePx } from '../utils/calculations'

export interface UseGridResizeOptions {
  blocks: BlockConfig[]
  containerRef: React.RefObject<HTMLElement>
  onSizeChange?: (blockId: string, newSize: number) => void
  direction?: Direction
}

/**
 * Hook for handling grid resize operations
 * Now uses the context-based resize system instead of managing state locally
 */
export function useGridResize({
  blocks,
  containerRef,
  onSizeChange,
  direction = 'row'
}: UseGridResizeOptions) {
  const {
    startResize,
    updateResize,
    endResize,
    isDragging,
    activeBlockId,
    activeDividerId
  } = useGridResizeContext()

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
      updateResize(e)
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      updateResize(e)
    }

    const handleMouseUp = () => {
      endResize()
    }

    const handleTouchEnd = () => {
      endResize()
    }

    if (isDragging) {
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
  }, [isDragging, updateResize, endResize])

  return {
    // State
    isDragging,
    activeBlockId,
    activeDividerId,

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