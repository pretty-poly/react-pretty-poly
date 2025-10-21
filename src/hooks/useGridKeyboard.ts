import { useCallback, useEffect } from 'react'
import type { BlockConfig } from '../types'

export interface UseGridKeyboardOptions {
  enabled?: boolean
  blocks: BlockConfig[]
  onResizeBlock?: (blockId: string, delta: number) => void
  onFocusBlock?: (blockId: string) => void
  onCollapseBlock?: (blockId: string) => void
  onExpandBlock?: (blockId: string) => void
  onSplitBlock?: (blockId: string, direction: 'horizontal' | 'vertical') => void
  containerRef?: React.RefObject<HTMLElement | null>
  stepSize?: number
  largeStepSize?: number
}

/**
 * Hook for keyboard navigation and control of grid layouts
 */
export function useGridKeyboard({
  enabled = true,
  blocks,
  onResizeBlock,
  onFocusBlock,
  onCollapseBlock,
  onExpandBlock,
  onSplitBlock,
  containerRef,
  stepSize = 10,
  largeStepSize = 50
}: UseGridKeyboardOptions) {

  /**
   * Get the currently focused block element
   */
  const getFocusedBlock = useCallback((): HTMLElement | null => {
    const activeElement = document.activeElement as HTMLElement

    // Check if the active element is a block
    if (activeElement?.dataset.blockType === 'block' || activeElement?.dataset.blockType === 'group') {
      return activeElement
    }

    // Check if active element is within a block
    const blockElement = activeElement?.closest('[data-block-type="block"], [data-block-type="group"]') as HTMLElement
    return blockElement || null
  }, [])

  /**
   * Get the block configuration for a given element
   */
  const getBlockConfig = useCallback((element: HTMLElement | null): BlockConfig | null => {
    if (!element) return null

    const blockId = element.dataset.blockId
    return blocks.find(block => block.id === blockId) || null
  }, [blocks])

  /**
   * Find the next focusable block in a given direction
   */
  const findNextBlock = useCallback((
    currentBlock: HTMLElement,
    direction: 'up' | 'down' | 'left' | 'right'
  ): HTMLElement | null => {
    if (!containerRef?.current) return null

    const allBlocks: HTMLElement[] = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>('[data-block-type="block"], [data-block-type="group"]')
    )

    const currentRect = currentBlock.getBoundingClientRect()
    const currentCenter = {
      x: currentRect.left + currentRect.width / 2,
      y: currentRect.top + currentRect.height / 2
    }

    // Filter blocks based on direction
    const candidates = allBlocks.filter(block => {
      if (block === currentBlock) return false

      const rect = block.getBoundingClientRect()
      const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      }

      switch (direction) {
        case 'up':
          return center.y < currentCenter.y
        case 'down':
          return center.y > currentCenter.y
        case 'left':
          return center.x < currentCenter.x
        case 'right':
          return center.x > currentCenter.x
        default:
          return false
      }
    })

    // Find the closest candidate
    if (candidates.length === 0) return null

    candidates.sort((a, b) => {
      const aRect = a.getBoundingClientRect()
      const bRect = b.getBoundingClientRect()
      const aCenter = {
        x: aRect.left + aRect.width / 2,
        y: aRect.top + aRect.height / 2
      }
      const bCenter = {
        x: bRect.left + bRect.width / 2,
        y: bRect.top + bRect.height / 2
      }

      // Calculate distance
      const aDist = Math.sqrt(
        Math.pow(aCenter.x - currentCenter.x, 2) +
        Math.pow(aCenter.y - currentCenter.y, 2)
      )
      const bDist = Math.sqrt(
        Math.pow(bCenter.x - currentCenter.x, 2) +
        Math.pow(bCenter.y - currentCenter.y, 2)
      )

      return aDist - bDist
    })

    return candidates[0]
  }, [containerRef])

  /**
   * Handle keyboard events
   */
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled) return

    const focusedBlock = getFocusedBlock()
    if (!focusedBlock) return

    const blockConfig = getBlockConfig(focusedBlock)
    if (!blockConfig) return

    const isCtrlOrCmd = event.ctrlKey || event.metaKey
    const isShift = event.shiftKey
    const currentStepSize = isShift ? largeStepSize : stepSize

    // Navigation (arrow keys without modifiers)
    if (!isCtrlOrCmd && !isShift) {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault()
          const upBlock = findNextBlock(focusedBlock, 'up')
          if (upBlock) {
            upBlock.focus()
            onFocusBlock?.(upBlock.dataset.blockId || '')
          }
          break
        }

        case 'ArrowDown': {
          event.preventDefault()
          const downBlock = findNextBlock(focusedBlock, 'down')
          if (downBlock) {
            downBlock.focus()
            onFocusBlock?.(downBlock.dataset.blockId || '')
          }
          break
        }

        case 'ArrowLeft': {
          event.preventDefault()
          const leftBlock = findNextBlock(focusedBlock, 'left')
          if (leftBlock) {
            leftBlock.focus()
            onFocusBlock?.(leftBlock.dataset.blockId || '')
          }
          break
        }

        case 'ArrowRight': {
          event.preventDefault()
          const rightBlock = findNextBlock(focusedBlock, 'right')
          if (rightBlock) {
            rightBlock.focus()
            onFocusBlock?.(rightBlock.dataset.blockId || '')
          }
          break
        }

        case 'Enter':
        case ' ':
          event.preventDefault()
          // Toggle collapse/expand
          if (blockConfig.collapsible) {
            // Check if currently collapsed (this would need to be provided by parent)
            // For now, just trigger expand
            onExpandBlock?.(blockConfig.id)
          }
          break

        case 'Escape':
          event.preventDefault()
          focusedBlock.blur()
          break
      }
    }

    // Resizing (Ctrl/Cmd + arrow keys)
    if (isCtrlOrCmd && onResizeBlock) {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault()
          onResizeBlock(blockConfig.id, -currentStepSize)
          break

        case 'ArrowDown':
          event.preventDefault()
          onResizeBlock(blockConfig.id, currentStepSize)
          break

        case 'ArrowLeft':
          event.preventDefault()
          onResizeBlock(blockConfig.id, -currentStepSize)
          break

        case 'ArrowRight':
          event.preventDefault()
          onResizeBlock(blockConfig.id, currentStepSize)
          break
      }
    }

    // Collapse/Expand (Ctrl/Cmd + specific keys)
    if (isCtrlOrCmd) {
      switch (event.key) {
        case 'Minus':
        case '-':
          event.preventDefault()
          onCollapseBlock?.(blockConfig.id)
          break

        case 'Plus':
        case '+':
        case '=':
          event.preventDefault()
          onExpandBlock?.(blockConfig.id)
          break

        // Split operations (VS Code-style)
        case '\\':
          event.preventDefault()
          if (isShift) {
            // Ctrl+Shift+\ = Split horizontally (down)
            onSplitBlock?.(blockConfig.id, 'horizontal')
          } else {
            // Ctrl+\ = Split vertically (right)
            onSplitBlock?.(blockConfig.id, 'vertical')
          }
          break
      }
    }
  }, [
    enabled,
    getFocusedBlock,
    getBlockConfig,
    findNextBlock,
    onResizeBlock,
    onFocusBlock,
    onCollapseBlock,
    onExpandBlock,
    onSplitBlock,
    stepSize,
    largeStepSize
  ])

  /**
   * Focus a specific block
   */
  const focusBlock = useCallback((blockId: string) => {
    if (!containerRef?.current) return

    const blockElement = containerRef.current.querySelector(
      `[data-block-id="${blockId}"]`
    ) as HTMLElement

    if (blockElement) {
      blockElement.focus()
      onFocusBlock?.(blockId)
    }
  }, [containerRef, onFocusBlock])

  /**
   * Get all focusable blocks
   */
  const getFocusableBlocks = useCallback((): HTMLElement[] => {
    if (!containerRef?.current) return []

    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(
        '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
      )
    )
  }, [containerRef])

  // Set up keyboard event listeners
  useEffect(() => {
    if (!enabled) return

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, enabled])

  return {
    focusBlock,
    getFocusableBlocks,
    getFocusedBlock,
    isEnabled: enabled
  }
}