import { ButtonHTMLAttributes } from 'react';

export interface BlockCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Optional icon component to display (e.g., lucide-react X icon)
     * If not provided, a simple × character is used
     */
    icon?: React.ComponentType<{
        className?: string;
    }>;
    /**
     * Size variant for the button
     * @default 'sm'
     */
    size?: 'xs' | 'sm' | 'md';
}
/**
 * Close button component for removing blocks/panes
 *
 * Designed for use with BlockToolbar's `right` section to provide
 * VS Code-style close functionality for split panes.
 *
 * @example
 * ```tsx
 * import { X } from 'lucide-react'
 *
 * <BlockToolbar
 *   left={<h2>Pane Title</h2>}
 *   right={
 *     <BlockCloseButton
 *       icon={X}
 *       onClick={() => removeBlock(blockId)}
 *       title="Close (Ctrl+W)"
 *     />
 *   }
 * />
 * ```
 */
export declare const BlockCloseButton: import('react').ForwardRefExoticComponent<BlockCloseButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=BlockCloseButton.d.ts.map