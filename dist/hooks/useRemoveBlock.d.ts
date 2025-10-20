/**
 * Hook for removing blocks with smart container preservation
 *
 * For splittable containers (groups with hasToolbar: true):
 * - Preserves container structure and toolbar
 * - Switches last block to empty state view instead of removing
 *
 * For regular groups:
 * - Auto-consolidates when only one sibling remains
 *
 * @example
 * ```tsx
 * function MyPane({ blockId }) {
 *   const { removeBlock, canRemove } = useRemoveBlock()
 *
 *   return (
 *     <Block id={blockId}>
 *       {canRemove(blockId) && (
 *         <button onClick={() => removeBlock(blockId)}>Close</button>
 *       )}
 *     </Block>
 *   )
 * }
 * ```
 */
export declare function useRemoveBlock(): {
    removeBlock: (blockId: string) => void;
    canRemove: (blockId: string) => boolean;
};
//# sourceMappingURL=useRemoveBlock.d.ts.map