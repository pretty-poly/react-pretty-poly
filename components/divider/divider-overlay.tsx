import React, { useMemo } from 'react'
import { useGridState } from "@/components/grid/grid-provider"
import { Divider } from "@/components/divider/divider"
import { autoDetectDividerPosition } from "@/lib/grid-divider-auto-detection"
import type { BlockConfig } from "@/lib/grid-types"

interface DividerInfo {
  id: string
  targetBlockId: string
  position: 'start' | 'end'
  direction: 'vertical' | 'horizontal'
}

/**
 * Auto-generates dividers based on block configuration
 * Uses smart position detection to determine which block should be resized
 */
function generateDividers(blocks: Record<string, BlockConfig>): DividerInfo[] {
  const dividers: DividerInfo[] = []

  // Find all group blocks
  const groups = Object.values(blocks).filter(block => block.type === 'group')

  groups.forEach(group => {
    // Get children of this group, sorted by order
    const children = Object.values(blocks)
      .filter(block => block.parentId === group.id)
      .sort((a, b) => (a.order || 0) - (b.order || 0))

    if (children.length === 0) return

    const isHorizontal = group.direction === 'row'
    const dividerDirection: 'vertical' | 'horizontal' = isHorizontal ? 'vertical' : 'horizontal'

    // Create divider between each pair of children
    children.forEach((child, index) => {
      if (index === 0) return // No divider before first child

      const previousChild = children[index - 1]

      // Skip divider if either block is explicitly marked as non-resizable
      const previousResizable = previousChild.resizable !== false
      const currentResizable = child.resizable !== false

      if (!previousResizable && !currentResizable) {
        // Neither block is resizable, skip divider entirely
        return
      }

      // Use smart detection to determine which block should be the target
      const { targetId, position } = autoDetectDividerPosition(previousChild, child)

      // Verify the target block is resizable
      const targetBlock = blocks[targetId]
      if (targetBlock && targetBlock.resizable === false) {
        // Target block is not resizable, skip divider
        return
      }

      dividers.push({
        id: `divider-${previousChild.id}-${child.id}`,
        targetBlockId: targetId,
        position,
        direction: dividerDirection
      })
    })
  })

  return dividers
}

/**
 * Overlay container that manages all dividers as absolutely positioned elements
 */
export const DividerOverlay: React.FC = () => {
  const state = useGridState()

  // Auto-generate dividers from block configuration
  const dividers = useMemo(() => {
    return generateDividers(state.blocks)
  }, [state.blocks])

  if (dividers.length === 0) {
    return null
  }

  return (
    <div
      className="pretty-poly-divider-overlay"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 10
      }}
    >
      {dividers.map(divider => (
        <Divider
          key={divider.id}
          targetId={divider.targetBlockId}
          position={divider.position}
          direction={divider.direction}
        />
      ))}
    </div>
  )
}
