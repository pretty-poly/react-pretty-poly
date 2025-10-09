export interface BlockLayoutProps {
    direction?: 'row' | 'column';
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
/**
 * BlockLayout component provides flex container for structured block content
 * Use this to wrap BlockHeader, BlockContent, BlockFooter, and BlockSidebar components
 */
export declare const BlockLayout: import('react').ForwardRefExoticComponent<BlockLayoutProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BlockLayout.d.ts.map