/**
 * @pretty-poly/react - A polymorphic React component library for resizable, responsive grid layouts
 */

// Components
export { Grid } from "./components/Grid";
export type { GridAPI } from "./components/Grid";
export {
  GridProvider,
  useGridContext,
  useGridState,
  useGridActions,
  useIsBlockHidden,
  useHideBlock,
  useShowBlock,
  useToggleBlockVisibility,
} from "./components/Grid";
export type { GridProviderProps } from "./components/Grid";

export {
  Block,
  BlockGroup,
  BlockLayout,
  BlockContent,
  BlockHeader,
  BlockFooter,
  BlockToolbar,
  BlockTabs,
  BlockSidebar,
  BlockSidebarItem,
  BlockSidebarSpacer,
  BlockSplitContainer,
  BlockTreeRenderer,
  NewTabDropdown,
  ViewRenderer,
} from "./components/Block";
export type {
  BlockSplitContainerProps,
  ToolbarRenderProps,
  BlockTreeRendererProps,
  NewTabDropdownProps,
  ViewRendererProps,
} from "./components/Block";
export { Divider } from "./components/Divider";

// Hooks
export {
  useGridResize,
  useGridPersistence,
  useGridMode,
  useGridKeyboard,
  useBlockSplitDirection,
  defaultModes,
} from "./hooks";
export type {
  UseGridResizeOptions,
  UseGridPersistenceOptions,
  UseGridKeyboardOptions,
} from "./hooks";

// Types
export type {
  BlockType,
  ResizeState,
  SizeUnit,
  Direction,
  DividerPosition,
  LayoutMode,
  BlockConfig,
  ModeConfig,
  ResponsiveModes,
  ViewportInfo,
  GridState,
  GridContextValue,
  GridAction,
  GridProps,
  BlockProps,
  DividerProps,
  DeepPartial,
  BlockTree,
  ScrollMode,
  HeaderPosition,
  BlockContentProps,
  BlockHeaderProps,
  BlockFooterProps,
  BlockToolbarProps,
  Tab,
  BlockTabsProps,
  SidebarPosition,
  BlockSidebarProps,
  BlockSidebarItemProps,
  BlockSidebarSpacerProps,
} from "./types";
export type { BlockLayoutProps } from "./components/Block/BlockLayout";

// Utilities
export {
  getFlexSpacePx,
  pxPerFr,
  clamp,
  isCollapsed,
  applyCollapseLogic,
  calculateConstrainedSize,
  generateGridTemplate,
  frToPx,
  pxToFr,
  findAdjacentBlock,
  isZeroSum,
} from "./utils/calculations";

export { cn } from "./utils/cn";

export {
  validateBlockSize,
  validateTwoWayResize,
  validateLayoutIntegrity,
} from "./utils/constraints";

// Services (Pretty Poly 2.0 primitives)
export {
  ViewRegistry,
  ViewRegistryProvider,
  useViewRegistry,
  useViewDescriptor,
  useViews,
  useRegisterViews,
  useRegisterView,
  CommandService,
  CommandServiceProvider,
  useCommandService,
  useCommand,
  useCommands,
  useExecuteCommand,
  useRegisterCommands,
  useRegisterCommand,
  useCommandKeyboardShortcuts,
  LayoutService,
  LayoutServiceProvider,
  useLayoutService,
  useBlockViewType,
  useViewTypes,
  useSetBlockViewType,
  useLayouts,
  useSaveLayout,
  useApplyLayout,
} from "./services";
export type {
  ViewDescriptor,
  ViewProps,
  ViewRegistryProviderProps,
  Command,
  CommandExecutionResult,
  CommandServiceProviderProps,
  LayoutConfiguration,
  LayoutServiceProviderProps,
} from "./services";

export {
  getStorageAdapter,
  saveGridState,
  loadGridState,
  removeGridState,
  getAllGridStates,
  createCustomAdapter,
  localStorageAdapter,
  sessionStorageAdapter,
  memoryStorageAdapter,
} from "./utils/storage";
export type { StorageAdapter } from "./utils/storage";
