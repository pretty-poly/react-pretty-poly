export interface BlockSidebarItemProps {
    icon: React.ComponentType<{
        className?: string;
    }>;
    tooltip?: string;
    active?: boolean;
    disabled?: boolean;
    badge?: number | string;
    onClick?: () => void;
    className?: string;
    'aria-label'?: string;
}
/**
 * BlockSidebarItem component for individual sidebar items
 * VS Code-style icon buttons with tooltips and active states
 */
export declare const BlockSidebarItem: import('react').ForwardRefExoticComponent<BlockSidebarItemProps & import('react').RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=BlockSidebarItem.d.ts.map