import { default as React } from 'react';

interface DividerProps {
    targetId: string;
    position: 'start' | 'end';
    direction: 'vertical' | 'horizontal';
    size?: number;
    className?: string;
    'aria-label'?: string;
}
/**
 * Absolutely positioned divider overlay component
 * Positioned using getBoundingClientRect for accuracy
 */
export declare const Divider: React.FC<DividerProps>;
export {};
//# sourceMappingURL=Divider.d.ts.map