import React, { createContext, useContext, useReducer, useRef, useEffect, useMemo } from 'react'
import type {
  GridState,
  GridAction,
  GridContextValue,
  BlockConfig,
  ResponsiveModes,
  ViewportInfo
} from '../../types'
import { useGridMode } from '../../hooks/useGridMode'
import { useGridPersistence } from '../../hooks/useGridPersistence'

/**
 * Grid state reducer
 */
function gridStateReducer(state: GridState, action: GridAction): GridState {
  switch (action.type) {
    case 'RESIZE_BLOCK':
      const block = state.blocks[action.payload.blockId]
      if (!block) return state

      return {
        ...state,
        blocks: {
          ...state.blocks,
          [action.payload.blockId]: {
            ...block,
            defaultSize: action.payload.size,
            size: action.payload.size
          }
        }
      }

    case 'COLLAPSE_BLOCK':
      const collapseBlock = state.blocks[action.payload.blockId]
      if (!collapseBlock) return state

      const collapseSize = collapseBlock.collapseTo || 0
      return {
        ...state,
        blocks: {
          ...state.blocks,
          [action.payload.blockId]: {
            ...collapseBlock,
            // Preserve original size for expand
            originalDefaultSize: collapseBlock.originalDefaultSize || collapseBlock.defaultSize,
            defaultSize: collapseSize,
            size: collapseSize
          }
        }
      }

    case 'EXPAND_BLOCK':
      const expandBlock = state.blocks[action.payload.blockId]
      if (!expandBlock) return state

      // Restore to the original default size defined in configuration
      const originalSize = expandBlock.originalDefaultSize || expandBlock.defaultSize || 100
      return {
        ...state,
        blocks: {
          ...state.blocks,
          [action.payload.blockId]: {
            ...expandBlock,
            defaultSize: originalSize,
            size: originalSize
          }
        }
      }

    case 'SET_ACTIVE_DIVIDER':
      return {
        ...state,
        activeDivider: action.payload.dividerId
      }

    case 'SWITCH_MODE':
      return {
        ...state,
        activeMode: action.payload.mode
      }

    case 'UPDATE_VIEWPORT':
      return {
        ...state,
        viewport: action.payload.viewport
      }

    case 'LOAD_STATE':
      return {
        ...state,
        ...action.payload.state,
        // Always preserve current viewport
        viewport: state.viewport
      }

    case 'RESET_STATE':
      // Reset block sizes to their original defaults
      const resetBlocks = Object.fromEntries(
        Object.entries(state.blocks).map(([id, block]) => [
          id,
          {
            ...block,
            size: block.defaultSize,
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      )
      return {
        ...state,
        blocks: resetBlocks,
        activeDivider: undefined
      }

    default:
      return state
  }
}

/**
 * Create initial grid state from block configurations
 */
function createInitialState(
  blocks: BlockConfig[],
  viewport: ViewportInfo,
  activeMode: string
): GridState {
  const blocksMap = blocks.reduce((acc, block) => {
    acc[block.id] = {
      ...block,
      size: block.defaultSize,
      originalDefaultSize: block.defaultSize // Store original size for expand functionality
    }
    return acc
  }, {} as Record<string, BlockConfig>)

  return {
    blocks: blocksMap,
    activeMode,
    viewport
  }
}

// Context
const GridContext = createContext<GridContextValue | null>(null)

export interface GridProviderProps {
  children: React.ReactNode
  blocks: BlockConfig[]
  modes?: ResponsiveModes
  gridId?: string
  persist?: boolean | 'localStorage' | 'sessionStorage' | ((state: GridState) => void)
  persistKey?: string
  onModeChange?: (newMode: string, previousMode: string) => void
  onLayoutChange?: (blocks: BlockConfig[]) => void
}

/**
 * Grid context provider component
 */
export function GridProvider({
  children,
  blocks,
  modes,
  gridId = 'default',
  persist = false,
  persistKey,
  onModeChange,
  onLayoutChange
}: GridProviderProps) {
  // Mode management
  const {
    activeMode,
    viewport,
    currentLayoutType,
    setMode: setModeInternal
  } = useGridMode(modes)

  // Initialize state
  const [state, dispatch] = useReducer(
    gridStateReducer,
    createInitialState(blocks, viewport, activeMode)
  )

  // Update viewport in state when it changes
  useEffect(() => {
    dispatch({
      type: 'UPDATE_VIEWPORT',
      payload: { viewport }
    })
  }, [viewport])

  // Update active mode in state when it changes
  useEffect(() => {
    const previousMode = state.activeMode
    if (activeMode !== previousMode) {
      dispatch({
        type: 'SWITCH_MODE',
        payload: { mode: activeMode }
      })
      onModeChange?.(activeMode, previousMode)
    }
  }, [activeMode, state.activeMode, onModeChange])

  // Persistence
  const { saveState, clearState } = useGridPersistence({
    gridId: persistKey || gridId,
    enabled: persist,
    state,
    onStateLoad: (loadedState) => {
      dispatch({ type: 'LOAD_STATE', payload: { state: loadedState } })
    },
    autoSave: true
  })

  // Create context value
  const contextValue: GridContextValue = useMemo(() => ({
    state: {
      ...state,
      activeMode,
      viewport
    },
    dispatch,

    // Grid operations
    resizeBlock: (blockId: string, size: number) => {
      dispatch({
        type: 'RESIZE_BLOCK',
        payload: { blockId, size }
      })
    },

    collapseBlock: (blockId: string) => {
      dispatch({
        type: 'COLLAPSE_BLOCK',
        payload: { blockId }
      })
    },

    expandBlock: (blockId: string) => {
      dispatch({
        type: 'EXPAND_BLOCK',
        payload: { blockId }
      })
    },

    switchMode: (mode: string) => {
      setModeInternal(mode)
    },

    // Persistence
    persistState: () => saveState(state),
    resetState: () => {
      dispatch({ type: 'RESET_STATE' })
      clearState()
    }
  }), [state, activeMode, viewport, saveState, clearState, setModeInternal])

  // Notify parent of layout changes
  useEffect(() => {
    if (onLayoutChange) {
      const blockConfigs = Object.values(state.blocks)
      onLayoutChange(blockConfigs)
    }
  }, [state.blocks, onLayoutChange])

  return (
    <GridContext.Provider value={contextValue}>
      {children}
    </GridContext.Provider>
  )
}

/**
 * Hook to access grid context
 */
export function useGridContext(): GridContextValue {
  const context = useContext(GridContext)
  if (!context) {
    throw new Error('useGridContext must be used within a GridProvider')
  }
  return context
}

/**
 * Hook to access grid state
 */
export function useGridState() {
  const { state } = useGridContext()
  return state
}

/**
 * Hook to access grid actions
 */
export function useGridActions() {
  const { resizeBlock, collapseBlock, expandBlock, switchMode, persistState, resetState } = useGridContext()
  return {
    resizeBlock,
    collapseBlock,
    expandBlock,
    switchMode,
    persistState,
    resetState
  }
}