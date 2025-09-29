import { ResponsiveModes, LayoutMode, ViewportInfo } from '../types';

/**
 * Default responsive mode configurations
 */
export declare const defaultModes: ResponsiveModes;
/**
 * Hook for managing responsive grid modes
 */
export declare function useGridMode(modes?: ResponsiveModes): {
    viewport: ViewportInfo;
    activeMode: string;
    currentModeConfig: {
        type: LayoutMode;
        breakpoint?: number;
        minWidth?: number;
        maxWidth?: number;
        matcher?: (viewport: ViewportInfo) => boolean;
    };
    currentLayoutType: LayoutMode;
    setMode: (modeName: string | null) => void;
    isMode: (modeName: string) => boolean;
    availableModes: string[];
    supportsFeature: (feature: "resizing" | "dividers" | "collapse" | "tabs" | "dock") => boolean;
    breakpointInfo: {
        current: string;
        currentBreakpoint: number;
        nextMode: string;
        nextBreakpoint: number | undefined;
        prevMode: string;
        prevBreakpoint: number | undefined;
        isSmallest: boolean;
        isLargest: boolean;
    };
    isForced: boolean;
    updateViewport: () => void;
};
//# sourceMappingURL=useGridMode.d.ts.map