import { useCallback } from 'react'
import { useGridContext } from '../components/Grid/GridProvider'

/**
 * Hook for removing blocks with smart container preservation
 *
 * For splittable containers (groups with hasToolbar: true):
 * - Preserves container structure and toolbar
 * - Switches last block to empty state view instead of removing
 *
 * For regular groups:
 * - Auto-consolidates when only one sibling remains
 *
 * @example
 * ```tsx
 * function MyPane({ blockId }) {
 *   const { removeBlock, canRemove } = useRemoveBlock()
 *
 *   return (
 *     <Block id={blockId}>
 *       {canRemove(blockId) && (
 *         <button onClick={() => removeBlock(blockId)}>Close</button>
 *       )}
 *     </Block>
 *   )
 * }
 * ```
 */
export function useRemoveBlock() {
  const { state, removeBlock: removeBlockPrimitive, unsplitBlock, setBlockViewType } = useGridContext()

  /**
   * Remove a block with smart container preservation
   *
   * For splittable containers (hasToolbar: true):
   * - Removes block normally if siblings remain
   * - Switches to empty state view when removing last block
   * - Preserves container structure and toolbar
   *
   * For regular groups:
   * - Auto-consolidates when only one sibling remains
   *
   * @param blockId - ID of the block to remove
   */
  const removeBlock = useCallback((blockId: string) => {
    const block = state.blocks[blockId]

    // Safety checks
    if (!block) {
      console.warn(`Cannot remove block: block ${blockId} not found`)
      return
    }

    if (!block.parentId) {
      console.warn(`Cannot remove block: block ${blockId} has no parent (is root)`)
      return
    }

    const parent = state.blocks[block.parentId]
    if (!parent || parent.type !== 'group' || !parent.children) {
      console.warn(`Cannot remove block: parent ${block.parentId} is not a valid group`)
      return
    }

    // Get siblings (all children except the one being removed)
    const siblings = parent.children.filter(id => id !== blockId)

    // Special handling for splittable containers (hasToolbar: true)
    const isToolbarContainer = parent.hasToolbar === true

    if (isToolbarContainer) {
      // For toolbar containers, preserve structure
      if (siblings.length === 0) {
        // Last child! Switch to empty state instead of removing
        const emptyViewType = parent.emptyViewType || (parent.defaultViewType ? `${parent.defaultViewType}-empty` : 'empty')
        setBlockViewType(blockId, emptyViewType)
        return
      }

      if (siblings.length === 1) {
        // Just remove, don't unsplit (keep parent as group)
        removeBlockPrimitive(blockId)
        return
      }

      // Multiple siblings remain, normal removal
      removeBlockPrimitive(blockId)
      return
    }

    // Regular groups: auto-consolidate when only 1 sibling remains
    if (siblings.length === 1) {
      unsplitBlock(parent.id)
    } else {
      // Normal removal: just remove this block
      removeBlockPrimitive(blockId)
    }
  }, [state.blocks, removeBlockPrimitive, unsplitBlock, setBlockViewType])

  /**
   * Check if a block can be removed
   *
   * For splittable containers (hasToolbar: true):
   * - Always removable (switches to empty state when last)
   *
   * For regular groups:
   * - Can only remove if siblings exist (parent has multiple children)
   *
   * @param blockId - ID of the block to check
   * @returns true if block can be removed
   */
  const canRemove = useCallback((blockId: string): boolean => {
    const block = state.blocks[blockId]
    if (!block || !block.parentId) return false

    const parent = state.blocks[block.parentId]
    if (!parent || parent.type !== 'group' || !parent.children) return false

    // Toolbar containers: always allow removal (switches to empty state)
    if (parent.hasToolbar === true) {
      return true
    }

    // Regular groups: can only remove if there are siblings
    return parent.children.length > 1
  }, [state.blocks])

  return {
    removeBlock,
    canRemove,
  }
}
