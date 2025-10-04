import type { BlockConfig, DividerPosition, SizeUnit, DividerConfig, Direction } from '../types'

/**
 * Smart auto-detection for divider position based on block size units
 */
export function autoDetectDividerPosition(
  currentBlock: BlockConfig,
  nextBlock: BlockConfig | null
): { targetId: string; position: DividerPosition } {
  if (!nextBlock) {
    // No next block, divider targets current block from end
    return { targetId: currentBlock.id, position: 'end' }
  }

  const currentUnit = currentBlock.sizeUnit || 'fr'
  const nextUnit = nextBlock.sizeUnit || 'fr'

  // Smart detection rules based on CSS Grid constraints
  if (currentUnit === 'fr' && nextUnit === 'px') {
    // fr + px: MUST target px block (fr auto-adjusts to available space)
    // Divider is BEFORE the px block, so use position 'start'
    return { targetId: nextBlock.id, position: 'start' }
  }

  if (currentUnit === 'px' && nextUnit === 'fr') {
    // px + fr: MUST target px block (fr auto-adjusts to available space)
    // Divider is AFTER the px block, so use position 'end'
    // With 'end', drag right (positive delta) grows the block naturally
    return { targetId: currentBlock.id, position: 'end' }
  }

  // For same units (fr+fr, px+px, auto+auto), either can resize
  // Default to first block for consistency
  return { targetId: currentBlock.id, position: 'end' }
}

/**
 * Check if a block should have a divider based on its configuration and siblings
 */
export function shouldGenerateDivider(
  _block: BlockConfig,
  isLastInGroup: boolean,
  gridDividersMode: 'auto' | 'manual' | 'none',
  blockDividerProp?: boolean | object,
  blockNoDivider?: boolean
): boolean {
  // Explicit opt-out always wins
  if (blockNoDivider) {
    return false
  }

  // Grid-level dividers disabled
  if (gridDividersMode === 'none') {
    return false
  }

  // Manual mode - only generate if block explicitly requests it
  if (gridDividersMode === 'manual') {
    return !!blockDividerProp
  }

  // Auto mode - generate unless it's the last block or explicitly disabled
  if (gridDividersMode === 'auto') {
    // Last block in group never gets a divider
    if (isLastInGroup) {
      return false
    }

    // Generate divider by default, unless explicitly disabled
    return !blockNoDivider
  }

  return false
}

/**
 * Generate divider configuration for a block
 */
export function generateDividerConfig(
  block: BlockConfig,
  nextBlock: BlockConfig | null,
  blockDividerProp?: boolean | object,
  gridDividerConfig?: {
    defaultSize?: number
    defaultClassName?: string
    defaultHandle?: React.ComponentType<{ className?: string; direction: Direction }>
    overrides?: Record<string, unknown>
  }
): {
  targetId: string
  position: DividerPosition
  size: number
  className?: string
  handle?: React.ComponentType<{ className?: string; direction: Direction }>
  onDoubleClick?: () => void
  'aria-label'?: string
} {
  // Detect smart position
  const { targetId, position } = autoDetectDividerPosition(block, nextBlock)

  // Start with grid defaults
  const config = {
    targetId,
    position,
    size: gridDividerConfig?.defaultSize || 8,
    className: gridDividerConfig?.defaultClassName,
    handle: gridDividerConfig?.defaultHandle,
  }

  // Apply grid overrides for this specific block
  const override = gridDividerConfig?.overrides?.[block.id]
  if (override) {
    Object.assign(config, override)
  }

  // Apply block-level configuration
  if (typeof blockDividerProp === 'object' && blockDividerProp !== null) {
    const dividerConfig = blockDividerProp as Partial<DividerConfig>
    Object.assign(config, dividerConfig)

    // If position is explicitly set, update targetId if needed
    if (dividerConfig.position && dividerConfig.position !== 'auto') {
      if (dividerConfig.position === 'start') {
        config.targetId = block.id
        config.position = 'start'
      } else if (dividerConfig.position === 'end') {
        config.targetId = block.id
        config.position = 'end'
      }
    }
  }

  return config
}

/**
 * Check if two size units are compatible for resizing
 */
export function areUnitsCompatible(unit1: SizeUnit, unit2: SizeUnit): boolean {
  // px and fr can always resize against each other
  if ((unit1 === 'px' && unit2 === 'fr') || (unit1 === 'fr' && unit2 === 'px')) {
    return true
  }

  // Same units can resize against each other
  if (unit1 === unit2) {
    return true
  }

  // auto is less predictable, but generally compatible
  if (unit1 === 'auto' || unit2 === 'auto') {
    return true
  }

  return false
}