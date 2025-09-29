import { BlockConfig } from '../types';

/**
 * Constraint validation and enforcement utilities
 */
export interface ConstraintResult {
    isValid: boolean;
    adjustedValue: number;
    violations: string[];
}
/**
 * Validate and adjust a block size against its constraints
 * @param newSize Proposed new size
 * @param block Block configuration with constraints
 * @param currentSize Current size (for collapse logic)
 * @returns Constraint validation result
 */
export declare function validateBlockSize(newSize: number, block: BlockConfig, currentSize?: number): ConstraintResult;
/**
 * Validate two-way resize constraints (zero-sum)
 * @param targetBlock Target block configuration
 * @param adjacentBlock Adjacent block configuration
 * @param targetDelta Proposed change to target
 * @param adjacentDelta Proposed change to adjacent
 * @param pixelsPerFr Pixels per fr unit (for fr calculations)
 * @returns Validation result with adjusted deltas
 */
export declare function validateTwoWayResize(targetBlock: BlockConfig, adjacentBlock: BlockConfig, targetDelta: number, adjacentDelta: number, pixelsPerFr?: number): {
    isValid: boolean;
    adjustedTargetDelta: number;
    adjustedAdjacentDelta: number;
    violations: string[];
};
/**
 * Check if a resize operation would create invalid layout
 * @param blocks All blocks in the container
 * @param changes Proposed size changes
 * @returns Validation result
 */
export declare function validateLayoutIntegrity(blocks: BlockConfig[], changes: Record<string, number>): {
    isValid: boolean;
    violations: string[];
};
//# sourceMappingURL=constraints.d.ts.map