import React, { forwardRef, useMemo } from 'react'
import { clsx } from 'clsx'
import type { BlockProps, ModeConfig, BlockType } from '../../types'
import { useGridState, useGridActions } from '../Grid/GridProvider'
import { useGridMode } from '../../hooks/useGridMode'

/**
 * Get mode-specific configuration for a block
 */
function getModeConfig(props: BlockProps, activeMode: string): ModeConfig {
  // Extract mode-specific props
  const modeConfig = props[activeMode] || {}

  // Filter out non-mode props
  const { id, type, direction, children, className, 'aria-label': ariaLabel, ...otherProps } = props

  // Remove known mode configs from otherProps
  const cleanOtherProps = Object.fromEntries(
    Object.entries(otherProps).filter(([key]) =>
      !['mobile', 'tablet', 'desktop', 'dock', 'grid', 'stack', 'tabs', 'sidebar', 'accordion'].includes(key)
    )
  )

  return {
    ...cleanOtherProps,
    ...modeConfig
  }
}

/**
 * Block component for grid layouts
 */
export const Block = forwardRef<HTMLDivElement, BlockProps>(
  ({
    id,
    type = 'block',
    direction = 'row',
    children,
    className,
    'aria-label': ariaLabel,
    ...props
  }, ref) => {
    const state = useGridState()
    const { collapseBlock, expandBlock } = useGridActions()
    const { activeMode, currentLayoutType, supportsFeature } = useGridMode()

    // Get block configuration from state
    const blockConfig = state?.blocks[id]
    const modeConfig = getModeConfig({ id, type, direction, children, className, 'aria-label': ariaLabel, ...props }, activeMode)

    // Determine if this block should be rendered in current mode
    const shouldRender = useMemo(() => {
      // Check if block is hidden in current mode
      if (modeConfig.hidden) return false

      // For dock mode, only render if it has dock configuration
      if (currentLayoutType === 'dock') {
        return !!(modeConfig.icon || modeConfig.label)
      }

      return true
    }, [currentLayoutType, modeConfig])

    // Calculate block classes based on mode and state
    const blockClasses = useMemo(() => {
      const baseClasses = [
        'pretty-poly-block',
        `pretty-poly-block--${type}`,
        `pretty-poly-block--mode-${activeMode}`
      ]

      // Add size classes
      if (blockConfig) {
        if (blockConfig.sizeUnit) {
          baseClasses.push(`pretty-poly-block--${blockConfig.sizeUnit}`)
        }

        if (blockConfig.collapsible) {
          baseClasses.push('pretty-poly-block--collapsible')
        }

        // Add collapsed class if applicable
        if (blockConfig.collapsible && blockConfig.collapseAt) {
          const currentSize = blockConfig.size ?? blockConfig.defaultSize ?? 0
          if (currentSize <= blockConfig.collapseAt) {
            baseClasses.push('pretty-poly-block--collapsed')
          }
        }
      }

      // Add mode-specific classes
      if (currentLayoutType === 'dock' && modeConfig.dockOrder !== undefined) {
        baseClasses.push(`pretty-poly-block--dock-order-${modeConfig.dockOrder}`)
      }

      return baseClasses
    }, [type, activeMode, blockConfig, currentLayoutType, modeConfig])

    // Handle double-click for collapse/expand
    const handleDoubleClick = () => {
      if (blockConfig?.collapsible && blockConfig.collapseAt) {
        const currentSize = blockConfig.size ?? blockConfig.defaultSize ?? 0
        const isCollapsed = currentSize <= blockConfig.collapseAt
        if (isCollapsed) {
          expandBlock(id)
        } else {
          collapseBlock(id)
        }
      }
    }

    if (!shouldRender) {
      return null
    }

    // Render for dock mode
    if (currentLayoutType === 'dock') {
      const Icon = modeConfig.icon
      return (
        <div
          ref={ref}
          className={clsx(
            ...blockClasses,
            'pretty-poly-dock-item',
            modeConfig.className,
            className
          )}
          data-block-id={id}
          data-block-type={type}
          data-dock-order={modeConfig.dockOrder}
          aria-label={ariaLabel || modeConfig.label}
          role="button"
          tabIndex={0}
          style={modeConfig.style}
        >
          {Icon && <Icon className="pretty-poly-dock-icon" />}
          {modeConfig.label && (
            <span className="pretty-poly-dock-label">{modeConfig.label}</span>
          )}
        </div>
      )
    }

    // Render for tab mode
    if (currentLayoutType === 'tabs') {
      return (
        <div
          ref={ref}
          className={clsx(
            ...blockClasses,
            'pretty-poly-tab-panel',
            modeConfig.className,
            className
          )}
          data-block-id={id}
          data-block-type={type}
          aria-label={ariaLabel || modeConfig.tabLabel}
          role="tabpanel"
          style={modeConfig.style}
        >
          {children}
        </div>
      )
    }

    // Default grid/sidebar rendering
    return (
      <div
        ref={ref}
        className={clsx(
          ...blockClasses,
          'relative',
          modeConfig.className,
          className
        )}
        data-block-id={id}
        data-block-type={type}
        data-block-direction={direction}
        data-block-size-default={blockConfig?.defaultSize}
        data-block-size-unit={blockConfig?.sizeUnit}
        data-block-size-min={blockConfig?.minSize}
        data-block-size-max={blockConfig?.maxSize}
        data-block-collapse-at={blockConfig?.collapseAt}
        data-block-collapse-to={blockConfig?.collapseTo}
        data-block-divider-position={blockConfig?.dividerPosition}
        data-block-divider-size={blockConfig?.dividerSize}
        aria-label={ariaLabel}
        role={type === 'group' ? 'group' : undefined}
        tabIndex={supportsFeature('resizing') ? 0 : undefined}
        onDoubleClick={supportsFeature('collapse') ? handleDoubleClick : undefined}
        style={{
          ...modeConfig.style,
          // CSS Grid area assignment handled by parent
        }}
      >
        {children}
      </div>
    )
  }
)

Block.displayName = 'Block'

/**
 * Block.Group component for nested layouts
 */
export const BlockGroup = forwardRef<HTMLDivElement, BlockProps>(
  (props, ref) => {
    return <Block ref={ref} {...props} type="group" />
  }
)

BlockGroup.displayName = 'Block.Group'

// Add Group as a property of Block
Object.assign(Block, { Group: BlockGroup })