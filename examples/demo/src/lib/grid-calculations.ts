export function getFlexSpacePx(
  containerPx: number,
  fixedTrackPx: number,
  gapsPx: number
): number {
  return Math.max(0, containerPx - fixedTrackPx - gapsPx)
}

/**
 * Calculate pixels per fr unit
 * @param flexSpacePx Available flex space in pixels
 * @param totalFr Total fr units in the container
 * @returns Pixels per fr unit
 */
export function pxPerFr(flexSpacePx: number, totalFr: number): number {
  return totalFr > 0 ? flexSpacePx / totalFr : 0
}

/**
 * Clamp a value between min and max bounds
 * @param value Value to clamp
 * @param min Minimum value
 * @param max Maximum value
 * @returns Clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Check if a value is collapsed based on threshold
 * @param value Current value
 * @param collapseAt Threshold for collapsing
 * @returns True if value should be considered collapsed
 */
export function isCollapsed(value: number, collapseAt: number): boolean {
  return collapseAt > 0 && value <= collapseAt
}

/**
 * Apply collapse logic to a resize operation
 * @param newSize Proposed new size
 * @param currentSize Current size
 * @param collapseAt Collapse threshold
 * @param collapseTo Size to collapse to
 * @param defaultSize Default size to expand to
 * @returns Adjusted size with collapse logic applied
 */
export function applyCollapseLogic(
  newSize: number,
  currentSize: number,
  collapseAt: number,
  collapseTo: number,
  defaultSize: number
): number {
  // Skip if collapsing is disabled
  if (collapseAt === 0) {
    return newSize
  }

  const isCurrentlyCollapsed = currentSize <= collapseAt

  // If currently collapsed and trying to expand significantly, snap to default
  // Use a threshold: expand if newSize is more than double collapseTo
  const expandThreshold = collapseTo * 2.5
  if (isCurrentlyCollapsed && newSize > expandThreshold) {
    return defaultSize
  }

  // If new size would be below threshold, collapse it
  // But if we're already collapsed, don't force further collapse
  if (newSize < collapseAt && !isCurrentlyCollapsed) {
    return collapseTo
  }

  return newSize
}

/**
 * Calculate new size with constraints applied
 * @param deltaPx Change in pixels
 * @param initialSize Initial size value
 * @param minSize Minimum allowed size
 * @param maxSize Maximum allowed size
 * @param invertDelta Whether to invert the delta (for start dividers)
 * @returns New size with constraints applied
 */
export function calculateConstrainedSize(
  deltaPx: number,
  initialSize: number,
  minSize: number = 0,
  maxSize: number = Infinity,
  invertDelta: boolean = false
): number {
  const adjustedDelta = invertDelta ? -deltaPx : deltaPx
  const rawNewSize = initialSize + adjustedDelta

  return clamp(rawNewSize, minSize, maxSize)
}

/**
 * Generate CSS grid template value without dividers (dividers are now overlays)
 * @param blocks Block configurations
 * @param gridId Grid ID for scoping CSS variables
 * @returns CSS grid-template string
 */
export function generateGridTemplate(
  blocks: Array<{
    id: string
    sizeUnit: "px" | "fr" | "auto"
    size: number | "auto"
    dividerPosition?: "start" | "end" | "none"
    dividerSize?: number
  }>,
  gridId?: string,
  hiddenBlocks?: Set<string>
): string {
  const parts: string[] = []

  // Filter out hidden blocks
  const visibleBlocks = hiddenBlocks
    ? blocks.filter(block => !hiddenBlocks.has(block.id))
    : blocks

  visibleBlocks.forEach(block => {
    // Add the block itself (no dividers - they're overlays now)
    if (block.sizeUnit === "auto") {
      parts.push("auto")
    } else if (block.sizeUnit === "px") {
      const varName = gridId ? `--${gridId}-${block.id}-size` : `--${block.id}-size`
      parts.push(`var(${varName}, ${block.size}px)`)
    } else {
      const varName = gridId ? `--${gridId}-${block.id}-size` : `--${block.id}-size`
      parts.push(`var(${varName}, ${block.size}fr)`)
    }
  })

  return parts.join(" ")
}

/**
 * Generate CSS grid template from template items (for auto divider mode)
 * Note: Dividers are now overlays, so they're excluded from grid template
 * @param items Template items including blocks and dividers
 * @param gridId Grid ID for scoping CSS variables
 * @returns CSS grid-template string
 */
export function generateGridTemplateFromItems(
  items: Array<{
    id: string
    type: 'block' | 'divider'
    sizeUnit?: 'px' | 'fr' | 'auto'
    size?: number
    dividerSize?: number
  }>,
  gridId?: string,
  hiddenBlocks?: Set<string>
): string {
  const parts: string[] = []

  items.forEach(item => {
    // Skip dividers - they're overlays now
    if (item.type === 'divider') {
      return
    }

    // Skip hidden blocks
    if (hiddenBlocks && hiddenBlocks.has(item.id)) {
      return
    }

    // Block with CSS variable support
    if (item.sizeUnit === 'auto') {
      parts.push('auto')
    } else if (item.sizeUnit === 'px') {
      const varName = gridId ? `--${gridId}-${item.id}-size` : `--${item.id}-size`
      parts.push(`var(${varName}, ${item.size || 1}px)`)
    } else {
      const varName = gridId ? `--${gridId}-${item.id}-size` : `--${item.id}-size`
      parts.push(`var(${varName}, ${item.size || 1}fr)`)
    }
  })

  return parts.join(' ')
}

/**
 * Convert fractional resize delta to pixels
 * @param deltaFr Change in fr units
 * @param pixelsPerFr Pixels per fr unit
 * @returns Delta in pixels
 */
export function frToPx(deltaFr: number, pixelsPerFr: number): number {
  return deltaFr * pixelsPerFr
}

/**
 * Convert pixel delta to fractional units
 * @param deltaPx Change in pixels
 * @param pixelsPerFr Pixels per fr unit
 * @returns Delta in fr units
 */
export function pxToFr(deltaPx: number, pixelsPerFr: number): number {
  return pixelsPerFr > 0 ? deltaPx / pixelsPerFr : 0
}

/**
 * Find adjacent block for two-way resizing
 * @param targetIndex Index of target block
 * @param blocks Array of blocks
 * @param position Divider position ("start" or "end")
 * @returns Adjacent block or null
 */
export function findAdjacentBlock<T>(
  targetIndex: number,
  blocks: T[],
  position: "start" | "end"
): T | null {
  if (position === "start") {
    return targetIndex > 0 ? blocks[targetIndex - 1] : null
  } else {
    return targetIndex < blocks.length - 1 ? blocks[targetIndex + 1] : null
  }
}

/**
 * Validate that two deltas maintain zero-sum constraint
 * @param targetDelta Change in target size
 * @param adjacentDelta Change in adjacent size
 * @param tolerance Acceptable deviation from zero sum
 * @returns True if zero-sum is maintained within tolerance
 */
export function isZeroSum(
  targetDelta: number,
  adjacentDelta: number,
  tolerance: number = 0.001
): boolean {
  return Math.abs(targetDelta + adjacentDelta) <= tolerance
}