import { forwardRef } from 'react'
import { cn } from "@/lib/utils"
import { useGridContext } from "@/components/grid/grid-provider"
import { useBlockSplitDirection } from "@/hooks/use-block-split-direction"

export interface BlockSplitContainerProps {
  blockId: string
  children: React.ReactNode

  // Label configuration
  label?: React.ReactNode
  icon?: React.ComponentType<{ className?: string }>

  // Split button configuration
  showSplitButtons?: boolean
  splitButtonLabels?: {
    vertical?: string
    horizontal?: string
  }
  splitButtonIcons?: {
    vertical?: React.ComponentType<{ className?: string }>
    horizontal?: React.ComponentType<{ className?: string }>
  }

  // Callbacks
  onBeforeSplit?: (direction: 'horizontal' | 'vertical') => boolean | void

  // Styling
  className?: string
  toolbarClassName?: string
  contentClassName?: string

  // Advanced: Custom toolbar renderer
  renderToolbar?: (props: ToolbarRenderProps) => React.ReactNode

  // Accessibility
  'aria-label'?: string
}

export interface ToolbarRenderProps {
  blockId: string
  canSplitVertical: boolean
  canSplitHorizontal: boolean
  handleSplitVertical: () => void
  handleSplitHorizontal: () => void
  label?: React.ReactNode
  icon?: React.ComponentType<{ className?: string }>
}

/**
 * Container component for splittable block groups
 *
 * Provides the essential structure for blocks that can be split:
 * - Toolbar with split controls
 * - Content area for child blocks
 * - Proper data attributes for divider positioning
 *
 * @example
 * ```tsx
 * <BlockSplitContainer
 *   blockId="editor-area"
 *   label="Editor"
 *   icon={FileIcon}
 * >
 *   {children}
 * </BlockSplitContainer>
 * ```
 */
export const BlockSplitContainer = forwardRef<HTMLDivElement, BlockSplitContainerProps>(
  (
    {
      blockId,
      children,
      label,
      icon: Icon,
      showSplitButtons = true,
      splitButtonLabels = {
        vertical: 'Split Right',
        horizontal: 'Split Down'
      },
      splitButtonIcons,
      onBeforeSplit,
      className,
      toolbarClassName,
      contentClassName,
      renderToolbar,
      'aria-label': ariaLabel
    },
    ref
  ) => {
    const { splitBlock } = useGridContext()
    const { canSplitVertical, canSplitHorizontal } = useBlockSplitDirection(blockId)

    const VerticalIcon = splitButtonIcons?.vertical
    const HorizontalIcon = splitButtonIcons?.horizontal

    const handleSplitVertical = () => {
      if (onBeforeSplit) {
        const result = onBeforeSplit('vertical')
        if (result === false) return
      }
      splitBlock(blockId, 'vertical')
    }

    const handleSplitHorizontal = () => {
      if (onBeforeSplit) {
        const result = onBeforeSplit('horizontal')
        if (result === false) return
      }
      splitBlock(blockId, 'horizontal')
    }

    const toolbarProps: ToolbarRenderProps = {
      blockId,
      canSplitVertical,
      canSplitHorizontal,
      handleSplitVertical,
      handleSplitHorizontal,
      label,
      icon: Icon
    }

    return (
      <div
        ref={ref}
        data-block-id={blockId}
        data-block-type="group"
        data-has-toolbar="true"
        className={cn('relative w-full h-full flex flex-col min-h-0', className)}
        aria-label={ariaLabel}
      >
        {/* Toolbar */}
        {renderToolbar ? (
          renderToolbar(toolbarProps)
        ) : (
          <div
            className={cn(
              'flex-none border-b border-border bg-card',
              toolbarClassName
            )}
          >
            <div className="flex items-center justify-between px-3 py-2">
              {/* Label Section */}
              <div className="flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
                {label && (
                  <div className="font-semibold text-sm">
                    {label}
                  </div>
                )}
              </div>

              {/* Split Buttons */}
              {showSplitButtons && (
                <div className="flex gap-1">
                  {canSplitVertical && (
                    <button
                      onClick={handleSplitVertical}
                      className="px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1"
                      title={`${splitButtonLabels.vertical} (Ctrl+\\)`}
                      aria-label={splitButtonLabels.vertical}
                    >
                      {VerticalIcon && <VerticalIcon className="w-3 h-3" />}
                      <span className="hidden sm:inline">{splitButtonLabels.vertical}</span>
                    </button>
                  )}
                  {canSplitHorizontal && (
                    <button
                      onClick={handleSplitHorizontal}
                      className="px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1"
                      title={`${splitButtonLabels.horizontal} (Ctrl+Shift+\\)`}
                      aria-label={splitButtonLabels.horizontal}
                    >
                      {HorizontalIcon && <HorizontalIcon className="w-3 h-3" />}
                      <span className="hidden sm:inline">{splitButtonLabels.horizontal}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Content Area - Critical data-split-content attribute for divider positioning */}
        <div
          data-split-content
          className={cn('flex-1 relative min-h-0', contentClassName)}
        >
          {children}
        </div>
      </div>
    )
  }
)

BlockSplitContainer.displayName = 'BlockSplitContainer'
