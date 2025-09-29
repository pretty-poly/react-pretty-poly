export type HeaderPosition = 'top' | 'bottom';
export interface BlockHeaderProps {
    position?: HeaderPosition;
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
/**
 * BlockHeader component for fixed header/toolbar areas
 * Does not scroll with content, stays in fixed position
 */
export declare const BlockHeader: import('react').ForwardRefExoticComponent<BlockHeaderProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BlockHeader.d.ts.map