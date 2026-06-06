import { useGridState } from "@/components/grid/grid-provider"

/**
 * Hook to determine which split directions are available for a block
 *
 * @param blockId - The ID of the block to check
 * @returns Object with split direction capabilities
 *
 * @example
 * ```tsx
 * const { canSplitVertical, canSplitHorizontal } = useBlockSplitDirection('editor-area')
 * ```
 */
export function useBlockSplitDirection(blockId: string) {
  const state = useGridState()
  const block = state.blocks[blockId]

  if (!block) {
    return {
      canSplitVertical: false,
      canSplitHorizontal: false,
      currentDirection: undefined,
      canSplit: false
    }
  }

  // If direction is undefined, both splits are available (first split)
  // If direction is 'row', only vertical splits are allowed (split right)
  // If direction is 'column', only horizontal splits are allowed (split down)
  const hasDirection = block.direction !== undefined
  const canSplitVertical = !hasDirection || block.direction === 'row'
  const canSplitHorizontal = !hasDirection || block.direction === 'column'

  return {
    canSplitVertical,
    canSplitHorizontal,
    currentDirection: block.direction,
    canSplit: block.canSplit === true
  }
}
