export interface Tab {
    id: string;
    label: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    closable?: boolean;
    disabled?: boolean;
}
export interface BlockTabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (id: string) => void;
    onTabClose?: (id: string) => void;
    className?: string;
    'aria-label'?: string;
    allowOverflow?: boolean;
}
/**
 * BlockTabs component for tab bar functionality
 * Supports active state, closable tabs, and overflow handling
 */
export declare const BlockTabs: import('react').ForwardRefExoticComponent<BlockTabsProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BlockTabs.d.ts.map