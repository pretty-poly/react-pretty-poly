// Core grid types
export type BlockType = "block" | "group"
export type SizeUnit = "px" | "fr" | "auto"
export type Direction = "row" | "column"
export type DividerPosition = "start" | "end" | "none" | "auto"

// Layout modes for responsive behavior (grid-level)
export type LayoutMode =
  | "grid"      // Desktop: resizable grid with dividers
  | "dock"      // Mobile: bottom navigation with icon switching
  | "tabs"      // Tablet: tab interface

// Note: stack, sidebar, and accordion are block-level sub-layouts,
// not grid-level layout modes

// Block configuration
export interface BlockConfig {
  id: string
  type: BlockType
  direction?: Direction

  // Size configuration
  defaultSize?: number
  minSize?: number
  maxSize?: number
  sizeUnit?: SizeUnit

  // Runtime size tracking
  size?: number
  originalDefaultSize?: number

  // Resize behavior
  resizable?: boolean  // Defaults to true, set to false to prevent resizing

  // Collapse behavior
  collapsible?: boolean
  collapseAt?: number
  collapseTo?: number

  // Divider configuration
  dividerPosition?: DividerPosition
  dividerSize?: number

  // Hierarchy
  parentId?: string
  order?: number
  children?: string[]

  // View type (for ViewRegistry - future support)
  viewType?: string
  viewState?: any  // View-specific state

  // Split configuration
  canSplit?: boolean
  splitConfig?: {
    horizontal?: boolean  // Can split horizontally
    vertical?: boolean    // Can split vertically
    minSplitSize?: number // Minimum size to allow splitting
  }
}

// Mode-specific block configuration
export interface ModeConfig {
  // Grid mode (desktop)
  defaultSize?: number
  minSize?: number
  maxSize?: number
  sizingMode?: "fixed" | "fill" | "auto"
  collapsible?: boolean

  // Dock mode (mobile)
  icon?: React.ComponentType<{ className?: string }>
  label?: string
  dockOrder?: number

  // Tab mode (tablet)
  tabLabel?: string
  closable?: boolean

  // Common
  hidden?: boolean
  className?: string
  style?: React.CSSProperties
}

// Responsive mode configuration
export interface ResponsiveModes {
  [modeName: string]: {
    type: LayoutMode
    breakpoint?: number
    minWidth?: number
    maxWidth?: number
    matcher?: (viewport: ViewportInfo) => boolean
  }
}

// Viewport information
export interface ViewportInfo {
  width: number
  height: number
  orientation: "portrait" | "landscape"
}

// Resize state
export interface ResizeState {
  isDragging: boolean
  activeBlockId?: string
  activeDividerId?: string
  startPosition: { x: number; y: number }
  initialSize: number
  initialAdjacentBlockId?: string
  initialAdjacentSize?: number
}

// Grid state
export interface GridState {
  blocks: Record<string, BlockConfig>
  hiddenBlocks: Set<string>  // Track which blocks are hidden
  activeMode: string
  activeDivider?: string
  viewport: ViewportInfo
  resize: ResizeState
}

// Grid context
export interface GridContextValue {
  gridId: string
  state: GridState
  dispatch: React.Dispatch<GridAction>

  // Grid operations
  resizeBlock: (blockId: string, size: number) => void
  collapseBlock: (blockId: string) => void
  expandBlock: (blockId: string) => void
  switchMode: (mode: string) => void

  // Block visibility operations
  hideBlock: (blockId: string) => void
  showBlock: (blockId: string) => void
  toggleBlockVisibility: (blockId: string) => void

  // Split operations (LayoutService primitives)
  splitBlock: (blockId: string, direction: 'horizontal' | 'vertical', options?: {
    initialSize?: number
    viewType?: string
    position?: 'before' | 'after'
  }) => string  // Returns new block ID
  unsplitBlock: (blockId: string) => void
  canSplit: (blockId: string) => boolean
  addBlock: (parentId: string, block: Partial<BlockConfig>) => string
  removeBlock: (blockId: string) => void

  // View type operations (future ViewRegistry support)
  setBlockViewType: (blockId: string, viewType: string) => void
  getBlockViewType: (blockId: string) => string | undefined

  // Resize operations
  startResize: (blockId: string, dividerId: string, event: React.MouseEvent | React.TouchEvent) => void
  updateResize: (event: MouseEvent | TouchEvent) => void
  endResize: () => void

  // Persistence
  persistState: () => void
  resetState: () => void
}

// Grid actions
export type GridAction =
  | { type: "RESIZE_BLOCK"; payload: { blockId: string; size: number } }
  | { type: "COLLAPSE_BLOCK"; payload: { blockId: string } }
  | { type: "EXPAND_BLOCK"; payload: { blockId: string } }
  | { type: "HIDE_BLOCK"; payload: { blockId: string } }
  | { type: "SHOW_BLOCK"; payload: { blockId: string } }
  | { type: "TOGGLE_BLOCK_VISIBILITY"; payload: { blockId: string } }
  | { type: "SET_ACTIVE_DIVIDER"; payload: { dividerId?: string } }
  | { type: "SWITCH_MODE"; payload: { mode: string } }
  | { type: "UPDATE_VIEWPORT"; payload: { viewport: ViewportInfo } }
  | { type: "LOAD_STATE"; payload: { state: Partial<GridState> } }
  | { type: "RESET_STATE" }
  | { type: "START_RESIZE"; payload: { blockId: string; dividerId: string; startPosition: { x: number; y: number }; initialSize: number; initialAdjacentBlockId?: string; initialAdjacentSize?: number } }
  | { type: "UPDATE_RESIZE"; payload: { currentPosition: { x: number; y: number } } }
  | { type: "END_RESIZE" }
  // Split operations
  | { type: "SPLIT_BLOCK"; payload: {
      targetBlockId: string
      direction: 'horizontal' | 'vertical'
      newBlockId: string
      firstChildId: string
      secondChildId: string
      initialSize?: number
      newViewType?: string
      position?: 'before' | 'after'
    }}
  | { type: "UNSPLIT_BLOCK"; payload: { blockId: string } }
  | { type: "ADD_BLOCK"; payload: {
      parentId: string
      block: BlockConfig
    }}
  | { type: "REMOVE_BLOCK"; payload: { blockId: string } }
  // View type operations
  | { type: "SET_BLOCK_VIEW_TYPE"; payload: {
      blockId: string
      viewType: string
    }}

// Component props
export interface GridProps {
  children: React.ReactNode
  className?: string

  // Layout configuration
  defaultLayout?: BlockConfig[]
  modes?: ResponsiveModes

  // Divider configuration (new automatic system)
  dividers?: "auto" | "manual" | "none"
  dividerConfig?: GridDividerConfig

  // Persistence
  persist?: boolean | "localStorage" | "sessionStorage" | ((state: GridState) => void)
  persistKey?: string

  // Event handlers
  onLayoutChange?: (layout: BlockConfig[]) => void
  onModeChange?: (mode: string, previousMode: string) => void

  // Accessibility
  "aria-label"?: string
}

export interface BlockProps {
  id: string
  type?: BlockType
  direction?: Direction
  children?: React.ReactNode
  className?: string

  // Resize behavior
  resizable?: boolean  // Set to false to prevent resizing and hide dividers

  // Divider configuration (new automatic system)
  divider?: boolean | DividerConfig
  noDivider?: boolean

  // Mode-specific configurations
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [modeName: string]: any

  // Accessibility
  "aria-label"?: string
}

// Divider configuration for blocks
export interface DividerConfig {
  position?: DividerPosition
  size?: number
  className?: string
  handle?: React.ComponentType<{ className?: string; direction: Direction }>
  onDoubleClick?: () => void
  "aria-label"?: string
}

// Grid-level divider configuration
export interface GridDividerConfig {
  defaultSize?: number
  defaultClassName?: string
  defaultHandle?: React.ComponentType<{ className?: string; direction: Direction }>
  overrides?: Record<string, Partial<DividerConfig>>
}

export interface DividerProps {
  targetId?: string // Optional - defaults to previous sibling block
  position?: DividerPosition // Optional - defaults to auto-detection
  size?: number
  className?: string

  // Customization
  handle?: React.ComponentType<{ className?: string }>

  // Accessibility
  "aria-label"?: string
}

// Utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type BlockTree = {
  config: BlockConfig
  children: BlockTree[]
}

// Block content system types
export type ScrollMode = 'vertical' | 'horizontal' | 'both' | 'none'
export type HeaderPosition = 'top' | 'bottom'

// Block content component props
export interface BlockContentProps {
  scrollMode?: ScrollMode
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export interface BlockHeaderProps {
  position?: HeaderPosition
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export interface BlockFooterProps {
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export interface BlockToolbarProps {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
  className?: string
  'aria-label'?: string
}

export interface Tab {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  closable?: boolean
  disabled?: boolean
}

export interface BlockTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
  onTabClose?: (id: string) => void
  className?: string
  'aria-label'?: string
  allowOverflow?: boolean
}

// Block sidebar system types
export type SidebarPosition = 'left' | 'right'

export interface BlockSidebarProps {
  position?: SidebarPosition
  width?: number
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export interface BlockSidebarItemProps {
  icon: React.ComponentType<{ className?: string }>
  tooltip?: string
  active?: boolean
  disabled?: boolean
  badge?: number | string
  onClick?: () => void
  className?: string
  'aria-label'?: string
}

export interface BlockSidebarSpacerProps {
  className?: string
}