import { Tab } from '../types';

/**
 * Hook for managing tabs within a block
 * Provides a clean API for tab operations
 */
export declare function useBlockTabs(blockId: string): {
    tabs: Tab[];
    activeTabId: string | undefined;
    activeTab: Tab | undefined;
    history: string[];
    historyIndex: number;
    tabState: import('../types').TabState | undefined;
    tabConfig: import('../types').TabConfig | undefined;
    isEnabled: boolean;
    canGoBack: boolean;
    canGoForward: boolean;
    canAddTab: boolean;
    openTab: (tab: Omit<Tab, "id">) => string | null;
    closeTab: (tabId: string) => void;
    setActiveTab: (tabId: string) => void;
    updateTab: (tabId: string, updates: Partial<Tab>) => void;
    reorderTabs: (fromIndex: number, toIndex: number) => void;
    navigateHistory: (direction: "forward" | "back") => void;
    closeAllTabs: () => void;
    closeOtherTabs: (tabId: string) => void;
    closeTabsToRight: (tabId: string) => void;
    closeTabsToLeft: (tabId: string) => void;
    togglePin: (tabId: string) => void;
    markDirty: (tabId: string, isDirty?: boolean) => void;
};
//# sourceMappingURL=useBlockTabs.d.ts.map