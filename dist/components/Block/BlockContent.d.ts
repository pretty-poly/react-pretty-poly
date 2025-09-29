export type ScrollMode = 'vertical' | 'horizontal' | 'both' | 'none';
export interface BlockContentProps {
    scrollMode?: ScrollMode;
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
/**
 * BlockContent component for main scrollable content areas
 * Handles different scrolling behaviors and fills remaining space in block
 */
export declare const BlockContent: import('react').ForwardRefExoticComponent<BlockContentProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BlockContent.d.ts.map