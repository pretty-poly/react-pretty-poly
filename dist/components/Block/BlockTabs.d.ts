import { Tab } from '../../types';

export interface BlockTabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (id: string) => void;
    onTabClose?: (id: string) => void;
    className?: string;
    'aria-label'?: string;
    allowOverflow?: boolean;
    showNavigation?: boolean;
    onNavigateBack?: () => void;
    onNavigateForward?: () => void;
    canGoBack?: boolean;
    canGoForward?: boolean;
    actions?: React.ReactNode;
}
/**
 * BlockTabs component for tab bar functionality
 * Supports active state, closable tabs, overflow handling, navigation, and actions
 */
export declare const BlockTabs: import('react').ForwardRefExoticComponent<BlockTabsProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BlockTabs.d.ts.map