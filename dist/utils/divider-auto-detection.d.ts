import { BlockConfig, DividerPosition, SizeUnit, Direction } from '../types';

/**
 * Smart auto-detection for divider position based on block size units
 */
export declare function autoDetectDividerPosition(currentBlock: BlockConfig, nextBlock: BlockConfig | null): {
    targetId: string;
    position: 'start' | 'end';
};
/**
 * Check if a block should have a divider based on its configuration and siblings
 */
export declare function shouldGenerateDivider(_block: BlockConfig, isLastInGroup: boolean, gridDividersMode: 'auto' | 'manual' | 'none', blockDividerProp?: boolean | object, blockNoDivider?: boolean): boolean;
/**
 * Generate divider configuration for a block
 */
export declare function generateDividerConfig(block: BlockConfig, nextBlock: BlockConfig | null, blockDividerProp?: boolean | object, gridDividerConfig?: {
    defaultSize?: number;
    defaultClassName?: string;
    defaultHandle?: React.ComponentType<{
        className?: string;
        direction: Direction;
    }>;
    overrides?: Record<string, unknown>;
}): {
    targetId: string;
    position: DividerPosition;
    size: number;
    className?: string;
    handle?: React.ComponentType<{
        className?: string;
        direction: Direction;
    }>;
    onDoubleClick?: () => void;
    'aria-label'?: string;
};
/**
 * Check if two size units are compatible for resizing
 */
export declare function areUnitsCompatible(unit1: SizeUnit, unit2: SizeUnit): boolean;
//# sourceMappingURL=divider-auto-detection.d.ts.map