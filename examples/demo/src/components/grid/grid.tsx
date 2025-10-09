import { forwardRef, useRef, useImperativeHandle, useMemo } from "react";
import type { GridProps, BlockConfig, GridState } from "@/lib/grid-types";
import { cn } from "@/lib/utils";
import { GridProvider, useGridContext } from "@/components/grid/grid-provider";
import { useGridResize } from "@/hooks/use-grid-resize";
import { useGridKeyboard } from "@/hooks/use-grid-keyboard";
import { generateGridTemplate } from "@/lib/grid-calculations";
import { DividerOverlay } from "@/components/divider/divider-overlay";

/**
 * Grid API for imperative control
 */
export interface GridAPI {
  resizeBlock: (blockId: string, size: number) => void;
  collapseBlock: (blockId: string) => void;
  expandBlock: (blockId: string) => void;
  switchMode: (mode: string) => void;
  persistState: () => void;
  resetState: () => void;
  getState: () => GridState;
}

/**
 * Internal Grid component (wrapped by provider)
 */
const GridInternal = forwardRef<
  GridAPI,
  Omit<
    GridProps,
    | "defaultLayout"
    | "modes"
    | "persist"
    | "persistKey"
    | "onLayoutChange"
    | "onModeChange"
  >
>(({ children, className, "aria-label": ariaLabel }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    state,
    resizeBlock,
    collapseBlock,
    expandBlock,
    switchMode,
    persistState,
    resetState,
  } = useGridContext();

  // Get resize state
  const isDragging = state.resize.isDragging;

  // Expose API through ref
  useImperativeHandle(
    ref,
    () => ({
      resizeBlock,
      collapseBlock,
      expandBlock,
      switchMode,
      persistState,
      resetState,
      getState: () => state,
    }),
    [
      resizeBlock,
      collapseBlock,
      expandBlock,
      switchMode,
      persistState,
      resetState,
      state,
    ]
  );

  // Get blocks as array sorted by order
  const blocks = useMemo(() => {
    const blockArray = Object.values(state.blocks);
    return blockArray.sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [state.blocks]);

  // Get root block (parent_id is null)
  const rootBlock = useMemo(() => {
    return blocks.find((block) => !block.parentId);
  }, [blocks]);

  // Legacy resize support (keeping for backward compatibility)
  useGridResize({
    blocks,
    containerRef,
    onSizeChange: resizeBlock,
    direction: rootBlock?.direction || "row",
  });

  // Set up keyboard navigation
  useGridKeyboard({
    enabled: true,
    blocks,
    containerRef,
    onResizeBlock: (blockId, delta) => {
      const block = state.blocks[blockId];
      if (block) {
        const currentSize = block.defaultSize || 0;
        const newSize = Math.max(0, currentSize + delta);
        resizeBlock(blockId, newSize);
      }
    },
    onCollapseBlock: collapseBlock,
    onExpandBlock: expandBlock,
  });

  // Note: Dividers are now handled by DividerOverlay as absolutely positioned overlays

  // Generate CSS styles for the grid
  const { gridStyles, cssVariables, modeStyles } = useMemo(() => {
    if (!rootBlock) {
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    }

    // Get blocks grouped by parent
    const blocksByParent = blocks.reduce((acc, block) => {
      // Skip the root block itself when grouping by parent
      if (block.id === rootBlock.id) return acc;

      const parentId = block.parentId || rootBlock.id;
      if (!acc[parentId]) acc[parentId] = [];
      acc[parentId].push(block);
      return acc;
    }, {} as Record<string, BlockConfig[]>);

    // Generate CSS variables for block sizes (scoped by grid ID to prevent collisions)
    const variables = blocks
      .filter((block) => block.defaultSize !== undefined)
      .map((block) => {
        const sizeValue =
          block.sizeUnit === "px"
            ? `${block.defaultSize}px`
            : `${block.defaultSize}fr`;
        return `--${rootBlock.id}-${block.id}-size: ${sizeValue};`;
      })
      .join("\n  ");

    // Mode-specific styles removed - will be re-added when modes are properly designed
    const generateModeStyles = (): string => {
      return "";
    };

    // Generate dynamic grid styles based on block tree structure
    const generateGroupStyles = (
      parentId: string,
      visited: Set<string> = new Set()
    ): string => {
      // Prevent infinite recursion
      if (visited.has(parentId)) {
        console.warn(`Circular reference detected for parent: ${parentId}`);
        return "";
      }

      // Create a new set for this branch to avoid cross-contamination
      const newVisited = new Set(visited);
      newVisited.add(parentId);

      const childBlocks = blocksByParent[parentId] || [];
      if (childBlocks.length === 0) return "";

      // Sort by order
      const sortedBlocks = [...childBlocks].sort(
        (a, b) => (a.order || 0) - (b.order || 0)
      );

      // Generate grid template for this group
      const parentBlock = blocks.find((b) => b.id === parentId) || rootBlock;
      const direction = parentBlock?.direction || "row";

      // Generate grid template from blocks (dividers are overlays, not part of the grid)
      const blocksForTemplate = sortedBlocks.map((block) => ({
        id: block.id,
        sizeUnit: block.sizeUnit || "fr",
        size: block.defaultSize || 1,
        dividerPosition: "none" as const, // Dividers are overlays, not in grid template
        dividerSize: 0, // Not used since dividers are overlays
      }));

      const template = generateGridTemplate(blocksForTemplate, rootBlock.id);

      const templateProperty =
        direction === "column" ? "grid-template-rows" : "grid-template-columns";

      // Simple selector - just target the block group by ID and type
      // Grid-scoped to prevent collisions across multiple grids
      const selector = `[data-block-id="${parentId}"]`;

      let groupStyle = `
${selector} {
  display: grid;
  ${templateProperty}: ${template};
  ${
    direction === "column"
      ? "grid-template-columns: 1fr;"
      : "grid-template-rows: 1fr;"
  }
}`;

      // Generate styles for child groups recursively
      for (const childBlock of sortedBlocks) {
        if (childBlock.type === "group") {
          groupStyle += generateGroupStyles(childBlock.id, newVisited);
        }
      }

      return groupStyle;
    };

    const dynamicStyles = generateGroupStyles(rootBlock.id);
    const modeDynamicStyles = generateModeStyles();

    return {
      cssVariables: `:root {\n  ${variables}\n}`,
      gridStyles: dynamicStyles,
      modeStyles: modeDynamicStyles,
    };
  }, [blocks, rootBlock]);

  if (!rootBlock) {
    console.warn("No root block found in grid configuration");
    return null;
  }

  return (
    <>
      {/* Inject styles */}
      <style type="text/css">
        {cssVariables}
        {gridStyles}
        {modeStyles}
      </style>

      <div
        ref={containerRef}
        className={cn(
          "group relative overflow-hidden",
          isDragging &&
            "select-none cursor-grabbing pretty-poly-grid--dragging",
          className
        )}
        data-grid-id={rootBlock.id}
        data-block-id={rootBlock.id}
        data-block-type={rootBlock.type}
        data-active-mode={state.activeMode}
        aria-label={ariaLabel || "Resizable grid layout"}
        role="application"
        style={{ isolation: "isolate" }}
      >
        {children}

        {/* Divider overlay - only in grid/desktop mode */}
        {(state.activeMode === "grid" || state.activeMode === "desktop") && (
          <DividerOverlay />
        )}
      </div>
    </>
  );
});

GridInternal.displayName = "GridInternal";

/**
 * Main Grid component with provider wrapper
 */
export const Grid = forwardRef<GridAPI, GridProps>(
  (
    {
      children,
      defaultLayout = [],
      modes,
      persist = false,
      persistKey,
      onLayoutChange,
      onModeChange,
      className,
      dividers = "manual",
      dividerConfig,
      "aria-label": ariaLabel,
    },
    ref
  ) => {
    // Find root block ID for gridId
    const rootBlock = defaultLayout.find((block) => !block.parentId);
    const gridId = rootBlock?.id || "root";

    return (
      <GridProvider
        blocks={defaultLayout}
        modes={modes}
        gridId={gridId}
        persist={persist}
        persistKey={persistKey}
        onLayoutChange={onLayoutChange}
        onModeChange={onModeChange}
      >
        <GridInternal
          ref={ref}
          className={className}
          dividers={dividers}
          dividerConfig={dividerConfig}
          aria-label={ariaLabel}
        >
          {children}
        </GridInternal>
      </GridProvider>
    );
  }
);

Grid.displayName = "Grid";
