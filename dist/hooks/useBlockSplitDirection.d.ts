/**
 * Hook to determine which split directions are available for a block
 *
 * @param blockId - The ID of the block to check
 * @returns Object with split direction capabilities
 *
 * @example
 * ```tsx
 * const { canSplitVertical, canSplitHorizontal } = useBlockSplitDirection('editor-area')
 * ```
 */
export declare function useBlockSplitDirection(blockId: string): {
    canSplitVertical: boolean;
    canSplitHorizontal: boolean;
    currentDirection: import('..').Direction | undefined;
    canSplit: boolean;
};
//# sourceMappingURL=useBlockSplitDirection.d.ts.map