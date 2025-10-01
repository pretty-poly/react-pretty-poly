/**
 * Grid calculation utilities ported from grid_resize.ts
 */
/**
 * Calculate available flex space in pixels
 * @param containerPx Total container size in pixels
 * @param fixedTrackPx Sum of all fixed (px) tracks
 * @param gapsPx Sum of all gap sizes
 * @returns Available space for fr units
 */
export declare function getFlexSpacePx(containerPx: number, fixedTrackPx: number, gapsPx: number): number;
/**
 * Calculate pixels per fr unit
 * @param flexSpacePx Available flex space in pixels
 * @param totalFr Total fr units in the container
 * @returns Pixels per fr unit
 */
export declare function pxPerFr(flexSpacePx: number, totalFr: number): number;
/**
 * Clamp a value between min and max bounds
 * @param value Value to clamp
 * @param min Minimum value
 * @param max Maximum value
 * @returns Clamped value
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Check if a value is collapsed based on threshold
 * @param value Current value
 * @param collapseAt Threshold for collapsing
 * @returns True if value should be considered collapsed
 */
export declare function isCollapsed(value: number, collapseAt: number): boolean;
/**
 * Apply collapse logic to a resize operation
 * @param newSize Proposed new size
 * @param currentSize Current size
 * @param collapseAt Collapse threshold
 * @param collapseTo Size to collapse to
 * @param defaultSize Default size to expand to
 * @returns Adjusted size with collapse logic applied
 */
export declare function applyCollapseLogic(newSize: number, currentSize: number, collapseAt: number, collapseTo: number, defaultSize: number): number;
/**
 * Calculate new size with constraints applied
 * @param deltaPx Change in pixels
 * @param initialSize Initial size value
 * @param minSize Minimum allowed size
 * @param maxSize Maximum allowed size
 * @param invertDelta Whether to invert the delta (for start dividers)
 * @returns New size with constraints applied
 */
export declare function calculateConstrainedSize(deltaPx: number, initialSize: number, minSize?: number, maxSize?: number, invertDelta?: boolean): number;
/**
 * Generate CSS grid template value with dividers
 * @param blocks Block configurations
 * @param gridId Grid ID for scoping CSS variables
 * @returns CSS grid-template string
 */
export declare function generateGridTemplate(blocks: Array<{
    id: string;
    sizeUnit: "px" | "fr" | "auto";
    size: number | "auto";
    dividerPosition?: "start" | "end" | "none";
    dividerSize?: number;
}>, gridId?: string): string;
/**
 * Generate CSS grid template from template items (for auto divider mode)
 * @param items Template items including blocks and dividers
 * @param gridId Grid ID for scoping CSS variables
 * @returns CSS grid-template string
 */
export declare function generateGridTemplateFromItems(items: Array<{
    id: string;
    type: 'block' | 'divider';
    sizeUnit?: 'px' | 'fr' | 'auto';
    size?: number;
    dividerSize?: number;
}>, gridId?: string): string;
/**
 * Convert fractional resize delta to pixels
 * @param deltaFr Change in fr units
 * @param pixelsPerFr Pixels per fr unit
 * @returns Delta in pixels
 */
export declare function frToPx(deltaFr: number, pixelsPerFr: number): number;
/**
 * Convert pixel delta to fractional units
 * @param deltaPx Change in pixels
 * @param pixelsPerFr Pixels per fr unit
 * @returns Delta in fr units
 */
export declare function pxToFr(deltaPx: number, pixelsPerFr: number): number;
/**
 * Find adjacent block for two-way resizing
 * @param targetIndex Index of target block
 * @param blocks Array of blocks
 * @param position Divider position ("start" or "end")
 * @returns Adjacent block or null
 */
export declare function findAdjacentBlock<T>(targetIndex: number, blocks: T[], position: "start" | "end"): T | null;
/**
 * Validate that two deltas maintain zero-sum constraint
 * @param targetDelta Change in target size
 * @param adjacentDelta Change in adjacent size
 * @param tolerance Acceptable deviation from zero sum
 * @returns True if zero-sum is maintained within tolerance
 */
export declare function isZeroSum(targetDelta: number, adjacentDelta: number, tolerance?: number): boolean;
//# sourceMappingURL=calculations.d.ts.map