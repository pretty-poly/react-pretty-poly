import { default as React } from 'react';
import { BlockConfig, GridDividerConfig } from '../types';

/**
 * Result of divider injection with template info
 */
export interface DividerInjectionResult {
    children: React.ReactNode;
    templateItems: Array<{
        id: string;
        type: 'block' | 'divider';
        sizeUnit?: 'px' | 'fr' | 'auto';
        size?: number;
        dividerSize?: number;
    }>;
}
/**
 * Process children and inject automatic dividers
 * Returns both processed children and template information
 */
export declare function injectAutomaticDividers(children: React.ReactNode, dividers: 'auto' | 'manual' | 'none', dividerConfig?: GridDividerConfig, blocks?: Record<string, BlockConfig>, DividerComponent?: React.ComponentType<any>): DividerInjectionResult;
/**
 * Extended result type that includes nested group template items
 */
export interface RecursiveInjectionResult {
    children: React.ReactNode;
    templateItemsByGroup: Record<string, DividerInjectionResult['templateItems']>;
}
/**
 * Recursively process children including nested Block.Group components
 * Returns both processed children and template items for all groups
 */
export declare function processChildrenRecursively(children: React.ReactNode, dividers: 'auto' | 'manual' | 'none', dividerConfig?: GridDividerConfig, blocks?: Record<string, BlockConfig>, DividerComponent?: React.ComponentType<any>): RecursiveInjectionResult;
//# sourceMappingURL=children-divider-injection.d.ts.map