import type { BlockConfig, SizeUnit } from "@/lib/grid-types"
import { clamp, applyCollapseLogic } from "@/lib/grid-calculations"

/**
 * Constraint validation and enforcement utilities
 */

export interface ConstraintResult {
  isValid: boolean
  adjustedValue: number
  violations: string[]
}

/**
 * Validate and adjust a block size against its constraints
 * @param newSize Proposed new size
 * @param block Block configuration with constraints
 * @param currentSize Current size (for collapse logic)
 * @returns Constraint validation result
 */
export function validateBlockSize(
  newSize: number,
  block: BlockConfig,
  currentSize?: number
): ConstraintResult {
  const violations: string[] = []
  let adjustedValue = newSize

  // Basic range constraints
  const minSize = block.minSize ?? 0
  const maxSize = block.maxSize ?? Infinity

  if (newSize < minSize) {
    violations.push(`Size ${newSize} is below minimum ${minSize}`)
    adjustedValue = minSize
  }

  if (newSize > maxSize) {
    violations.push(`Size ${newSize} exceeds maximum ${maxSize}`)
    adjustedValue = maxSize
  }

  // Apply min/max clamping
  adjustedValue = clamp(adjustedValue, minSize, maxSize)

  // Apply collapse logic for px units
  if (block.sizeUnit === 'px' && block.collapsible && currentSize !== undefined) {
    const collapseAt = block.collapseAt ?? 0
    const collapseTo = block.collapseTo ?? 0
    const defaultSize = block.defaultSize ?? adjustedValue

    adjustedValue = applyCollapseLogic(
      adjustedValue,
      currentSize,
      collapseAt,
      collapseTo,
      defaultSize
    )
  }

  return {
    isValid: violations.length === 0,
    adjustedValue,
    violations
  }
}

/**
 * Validate two-way resize constraints (zero-sum)
 * @param targetBlock Target block configuration
 * @param adjacentBlock Adjacent block configuration
 * @param targetDelta Proposed change to target
 * @param adjacentDelta Proposed change to adjacent
 * @param pixelsPerFr Pixels per fr unit (for fr calculations)
 * @returns Validation result with adjusted deltas
 */
export function validateTwoWayResize(
  targetBlock: BlockConfig,
  adjacentBlock: BlockConfig,
  targetDelta: number,
  adjacentDelta: number,
  pixelsPerFr: number = 1
): {
  isValid: boolean
  adjustedTargetDelta: number
  adjustedAdjacentDelta: number
  violations: string[]
} {
  const violations: string[] = []
  let adjustedTargetDelta = targetDelta
  let adjustedAdjacentDelta = adjacentDelta

  // Convert constraints to common unit (pixels)
  const targetMin = getConstraintInPx(targetBlock.minSize ?? 0, targetBlock.sizeUnit, pixelsPerFr)
  const targetMax = getConstraintInPx(targetBlock.maxSize ?? Infinity, targetBlock.sizeUnit, pixelsPerFr)
  const adjacentMin = getConstraintInPx(adjacentBlock.minSize ?? 0, adjacentBlock.sizeUnit, pixelsPerFr)
  const adjacentMax = getConstraintInPx(adjacentBlock.maxSize ?? Infinity, adjacentBlock.sizeUnit, pixelsPerFr)

  const currentTargetSize = getConstraintInPx(targetBlock.defaultSize ?? 0, targetBlock.sizeUnit, pixelsPerFr)
  const currentAdjacentSize = getConstraintInPx(adjacentBlock.defaultSize ?? 0, adjacentBlock.sizeUnit, pixelsPerFr)

  // Calculate proposed new sizes
  const newTargetSize = currentTargetSize + targetDelta
  const newAdjacentSize = currentAdjacentSize + adjacentDelta

  // Check individual constraints
  let constrainedTargetSize = clamp(newTargetSize, targetMin, targetMax)
  let constrainedAdjacentSize = clamp(newAdjacentSize, adjacentMin, adjacentMax)

  // Adjust deltas based on constraints
  adjustedTargetDelta = constrainedTargetSize - currentTargetSize
  adjustedAdjacentDelta = constrainedAdjacentSize - currentAdjacentSize

  // Ensure zero-sum by adjusting the less constrained block
  const deltaSum = adjustedTargetDelta + adjustedAdjacentDelta

  if (Math.abs(deltaSum) > 0.001) {
    // One block hit a constraint, adjust the other to maintain zero-sum
    const targetHitConstraint = Math.abs(adjustedTargetDelta) < Math.abs(targetDelta)
    const adjacentHitConstraint = Math.abs(adjustedAdjacentDelta) < Math.abs(adjacentDelta)

    if (targetHitConstraint && !adjacentHitConstraint) {
      // Target hit constraint, adjust adjacent to compensate
      const compensatedAdjacentSize = currentAdjacentSize - adjustedTargetDelta
      constrainedAdjacentSize = clamp(compensatedAdjacentSize, adjacentMin, adjacentMax)
      adjustedAdjacentDelta = constrainedAdjacentSize - currentAdjacentSize
    } else if (adjacentHitConstraint && !targetHitConstraint) {
      // Adjacent hit constraint, adjust target to compensate
      const compensatedTargetSize = currentTargetSize - adjustedAdjacentDelta
      constrainedTargetSize = clamp(compensatedTargetSize, targetMin, targetMax)
      adjustedTargetDelta = constrainedTargetSize - currentTargetSize
    }

    violations.push('Zero-sum constraint violated, deltas adjusted')
  }

  // Final zero-sum check
  const finalSum = adjustedTargetDelta + adjustedAdjacentDelta
  const isValid = Math.abs(finalSum) <= 0.001

  return {
    isValid,
    adjustedTargetDelta,
    adjustedAdjacentDelta,
    violations
  }
}

/**
 * Convert a constraint value to pixels
 * @param value Constraint value
 * @param unit Size unit
 * @param pixelsPerFr Conversion rate for fr units
 * @returns Value in pixels
 */
function getConstraintInPx(
  value: number | undefined,
  unit: SizeUnit | undefined,
  pixelsPerFr: number
): number {
  if (value === undefined || value === Infinity) {
    return Infinity
  }

  switch (unit) {
    case 'px':
      return value
    case 'fr':
      return value * pixelsPerFr
    case 'auto':
    default:
      return value
  }
}

/**
 * Check if a resize operation would create invalid layout
 * @param blocks All blocks in the container
 * @param changes Proposed size changes
 * @returns Validation result
 */
export function validateLayoutIntegrity(
  blocks: BlockConfig[],
  changes: Record<string, number>
): {
  isValid: boolean
  violations: string[]
} {
  const violations: string[] = []

  // Check for overlapping constraints
  const totalFixedSize = blocks
    .filter(block => block.sizeUnit === 'px')
    .reduce((sum, block) => sum + (changes[block.id] ?? block.defaultSize ?? 0), 0)

  const totalFrUnits = blocks
    .filter(block => block.sizeUnit === 'fr')
    .reduce((sum, block) => sum + (changes[block.id] ?? block.defaultSize ?? 0), 0)

  // Basic sanity checks
  if (totalFixedSize < 0) {
    violations.push('Total fixed size cannot be negative')
  }

  if (totalFrUnits <= 0 && blocks.some(block => block.sizeUnit === 'fr')) {
    violations.push('Total fr units must be positive')
  }

  // Check for constraint conflicts
  blocks.forEach(block => {
    const newSize = changes[block.id] ?? block.defaultSize ?? 0
    const minSize = block.minSize ?? 0
    const maxSize = block.maxSize ?? Infinity

    if (minSize > maxSize) {
      violations.push(`Block ${block.id}: minSize (${minSize}) > maxSize (${maxSize})`)
    }

    if (newSize < minSize || newSize > maxSize) {
      violations.push(`Block ${block.id}: size ${newSize} violates constraints [${minSize}, ${maxSize}]`)
    }
  })

  return {
    isValid: violations.length === 0,
    violations
  }
}