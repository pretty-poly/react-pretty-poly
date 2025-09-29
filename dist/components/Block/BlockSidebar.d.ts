export type SidebarPosition = 'left' | 'right';
export interface BlockSidebarProps {
    position?: SidebarPosition;
    width?: number;
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
/**
 * BlockSidebar component for VS Code-style vertical icon bars
 * Creates a fixed-width vertical navigation sidebar within a block
 */
export declare const BlockSidebar: import('react').ForwardRefExoticComponent<BlockSidebarProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BlockSidebar.d.ts.map