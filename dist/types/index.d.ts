export type BlockType = "block" | "group";
export type SizeUnit = "px" | "fr" | "auto";
export type Direction = "row" | "column";
export type DividerPosition = "start" | "end" | "none" | "auto";
export type LayoutMode = "grid" | "dock" | "tabs";
export interface BlockConfig {
    id: string;
    type: BlockType;
    direction?: Direction;
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    sizeUnit?: SizeUnit;
    size?: number;
    originalDefaultSize?: number;
    resizable?: boolean;
    collapsible?: boolean;
    collapseAt?: number;
    collapseTo?: number;
    isHidden?: boolean;
    dividerPosition?: DividerPosition;
    dividerSize?: number;
    parentId?: string;
    order?: number;
    children?: string[];
    viewType?: string;
    viewState?: unknown;
    tabState?: TabState;
    tabConfig?: TabConfig;
    canSplit?: boolean;
    hasToolbar?: boolean;
    defaultViewType?: string;
    emptyViewType?: string;
    toolbarSize?: number;
    splitConfig?: {
        horizontal?: boolean;
        vertical?: boolean;
        minSplitSize?: number;
    };
}
export interface ModeConfig {
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    sizingMode?: "fixed" | "fill" | "auto";
    collapsible?: boolean;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    label?: string;
    dockOrder?: number;
    tabLabel?: string;
    closable?: boolean;
    hidden?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export interface ResponsiveModes {
    [modeName: string]: {
        type: LayoutMode;
        breakpoint?: number;
        minWidth?: number;
        maxWidth?: number;
        matcher?: (viewport: ViewportInfo) => boolean;
    };
}
export interface ViewportInfo {
    width: number;
    height: number;
    orientation: "portrait" | "landscape";
}
export interface ResizeState {
    isDragging: boolean;
    activeBlockId?: string;
    activeDividerId?: string;
    startPosition: {
        x: number;
        y: number;
    };
    initialSize: number;
    initialAdjacentBlockId?: string;
    initialAdjacentSize?: number;
}
export interface GridState {
    blocks: Record<string, BlockConfig>;
    hiddenBlocks: Set<string>;
    activeMode: string;
    activeDivider?: string;
    viewport: ViewportInfo;
    resize: ResizeState;
}
export interface GridContextValue {
    gridId: string;
    state: GridState;
    dispatch: React.Dispatch<GridAction>;
    resizeBlock: (blockId: string, size: number) => void;
    collapseBlock: (blockId: string) => void;
    expandBlock: (blockId: string) => void;
    switchMode: (mode: string) => void;
    hideBlock: (blockId: string) => void;
    showBlock: (blockId: string) => void;
    toggleBlockVisibility: (blockId: string) => void;
    splitBlock: (blockId: string, direction: 'horizontal' | 'vertical', options?: {
        initialSize?: number;
        viewType?: string;
        position?: 'before' | 'after';
    }) => string;
    unsplitBlock: (blockId: string) => void;
    canSplit: (blockId: string) => boolean;
    addBlock: (parentId: string, block: Partial<BlockConfig>) => string;
    removeBlock: (blockId: string) => void;
    setBlockViewType: (blockId: string, viewType: string) => void;
    getBlockViewType: (blockId: string) => string | undefined;
    openTab: (blockId: string, tab: Omit<Tab, 'id'>) => string;
    closeTab: (blockId: string, tabId: string) => void;
    setActiveTab: (blockId: string, tabId: string) => void;
    updateTab: (blockId: string, tabId: string, updates: Partial<Tab>) => void;
    reorderTabs: (blockId: string, fromIndex: number, toIndex: number) => void;
    navigateTabHistory: (blockId: string, direction: 'forward' | 'back') => void;
    getTabState: (blockId: string) => TabState | undefined;
    startResize: (blockId: string, dividerId: string, event: React.MouseEvent | React.TouchEvent) => void;
    updateResize: (event: MouseEvent | TouchEvent) => void;
    endResize: () => void;
    persistState: () => void;
    resetState: () => void;
}
export type GridAction = {
    type: "RESIZE_BLOCK";
    payload: {
        blockId: string;
        size: number;
    };
} | {
    type: "COLLAPSE_BLOCK";
    payload: {
        blockId: string;
    };
} | {
    type: "EXPAND_BLOCK";
    payload: {
        blockId: string;
    };
} | {
    type: "HIDE_BLOCK";
    payload: {
        blockId: string;
    };
} | {
    type: "SHOW_BLOCK";
    payload: {
        blockId: string;
    };
} | {
    type: "TOGGLE_BLOCK_VISIBILITY";
    payload: {
        blockId: string;
    };
} | {
    type: "SET_ACTIVE_DIVIDER";
    payload: {
        dividerId?: string;
    };
} | {
    type: "SWITCH_MODE";
    payload: {
        mode: string;
    };
} | {
    type: "UPDATE_VIEWPORT";
    payload: {
        viewport: ViewportInfo;
    };
} | {
    type: "LOAD_STATE";
    payload: {
        state: Partial<GridState>;
    };
} | {
    type: "RESET_STATE";
} | {
    type: "START_RESIZE";
    payload: {
        blockId: string;
        dividerId: string;
        startPosition: {
            x: number;
            y: number;
        };
        initialSize: number;
        initialAdjacentBlockId?: string;
        initialAdjacentSize?: number;
    };
} | {
    type: "UPDATE_RESIZE";
    payload: {
        currentPosition: {
            x: number;
            y: number;
        };
    };
} | {
    type: "END_RESIZE";
} | {
    type: "SPLIT_BLOCK";
    payload: {
        targetBlockId: string;
        direction: 'horizontal' | 'vertical';
        newBlockId: string;
        firstChildId: string;
        secondChildId: string;
        initialSize?: number;
        newViewType?: string;
        position?: 'before' | 'after';
    };
} | {
    type: "UNSPLIT_BLOCK";
    payload: {
        blockId: string;
    };
} | {
    type: "ADD_BLOCK";
    payload: {
        parentId: string;
        block: BlockConfig;
    };
} | {
    type: "REMOVE_BLOCK";
    payload: {
        blockId: string;
    };
} | {
    type: "SET_BLOCK_VIEW_TYPE";
    payload: {
        blockId: string;
        viewType: string;
    };
} | {
    type: "OPEN_TAB";
    payload: {
        blockId: string;
        tab: Omit<Tab, 'id'>;
    };
} | {
    type: "CLOSE_TAB";
    payload: {
        blockId: string;
        tabId: string;
    };
} | {
    type: "SET_ACTIVE_TAB";
    payload: {
        blockId: string;
        tabId: string;
    };
} | {
    type: "UPDATE_TAB";
    payload: {
        blockId: string;
        tabId: string;
        updates: Partial<Tab>;
    };
} | {
    type: "REORDER_TABS";
    payload: {
        blockId: string;
        fromIndex: number;
        toIndex: number;
    };
} | {
    type: "NAVIGATE_TAB_HISTORY";
    payload: {
        blockId: string;
        direction: 'forward' | 'back';
    };
} | {
    type: "SET_TAB_SCROLL_OFFSET";
    payload: {
        blockId: string;
        offset: number;
    };
};
export interface GridProps {
    children: React.ReactNode;
    className?: string;
    defaultLayout?: BlockConfig[];
    modes?: ResponsiveModes;
    dividers?: "auto" | "manual" | "none";
    dividerConfig?: GridDividerConfig;
    persist?: boolean | "localStorage" | "sessionStorage" | ((state: GridState) => void);
    persistKey?: string;
    onLayoutChange?: (layout: BlockConfig[]) => void;
    onModeChange?: (mode: string, previousMode: string) => void;
    "aria-label"?: string;
}
export interface BlockProps {
    id: string;
    type?: BlockType;
    direction?: Direction;
    children?: React.ReactNode;
    className?: string;
    resizable?: boolean;
    divider?: boolean | DividerConfig;
    noDivider?: boolean;
    "aria-label"?: string;
}
export interface DividerConfig {
    position?: DividerPosition;
    size?: number;
    className?: string;
    handle?: React.ComponentType<{
        className?: string;
        direction: Direction;
    }>;
    onDoubleClick?: () => void;
    "aria-label"?: string;
}
export interface GridDividerConfig {
    defaultSize?: number;
    defaultClassName?: string;
    defaultHandle?: React.ComponentType<{
        className?: string;
        direction: Direction;
    }>;
    overrides?: Record<string, Partial<DividerConfig>>;
}
export interface DividerProps {
    targetId?: string;
    position?: DividerPosition;
    size?: number;
    className?: string;
    handle?: React.ComponentType<{
        className?: string;
    }>;
    "aria-label"?: string;
}
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type BlockTree = {
    config: BlockConfig;
    children: BlockTree[];
};
export type ScrollMode = 'vertical' | 'horizontal' | 'both' | 'none';
export type HeaderPosition = 'top' | 'bottom';
export interface BlockContentProps {
    scrollMode?: ScrollMode;
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
export interface BlockHeaderProps {
    position?: HeaderPosition;
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
export interface BlockFooterProps {
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
export interface BlockToolbarProps {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
    className?: string;
    'aria-label'?: string;
}
export interface Tab {
    id: string;
    label: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    closable?: boolean;
    disabled?: boolean;
    viewType?: string;
    viewState?: unknown;
    isDirty?: boolean;
    isPinned?: boolean;
    metadata?: unknown;
}
export interface TabState {
    tabs: Tab[];
    activeTabId: string;
    history: string[];
    historyIndex: number;
    scrollOffset: number;
}
export interface TabConfig {
    enabled?: boolean;
    allowMultiple?: boolean;
    maxTabs?: number;
    showNavigation?: boolean;
    showActions?: boolean;
    persistence?: 'none' | 'sessionStorage' | 'localStorage';
    defaultViewType?: string;
    closeConfirmation?: boolean;
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
export type SidebarPosition = 'left' | 'right';
export interface BlockSidebarProps {
    position?: SidebarPosition;
    width?: number;
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
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
export interface BlockSidebarSpacerProps {
    className?: string;
}
//# sourceMappingURL=index.d.ts.map