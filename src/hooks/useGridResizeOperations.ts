import { useCallback } from 'react'
import type { GridState, GridAction } from '../types'
import { calculateConstrainedSize, getFlexSpacePx, pxToFr } from '../utils/calculations'

/**
 * Hook for managing grid resize operations
 * Extracted from GridProvider to reduce complexity and improve testability
 */
export function useGridResizeOperations(
  state: GridState,
  dispatch: React.Dispatch<GridAction>
) {
  /**
   * Extract position from mouse or touch event
   */
  const getEventPosition = useCallback((
    event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent
  ): { x: number; y: number } => {
    if ("touches" in event) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    }
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }, []);

  /**
   * Start a resize operation
   */
  const startResize = useCallback((
    blockId: string,
    dividerId: string,
    event: React.MouseEvent | React.TouchEvent
  ) => {
    const block = state.blocks[blockId];
    if (!block) return;

    // Prevent resizing if block is explicitly marked as non-resizable
    if (block.resizable === false) {
      console.warn(`Cannot resize block "${blockId}" - block is marked as non-resizable.`);
      return;
    }

    const startPosition = getEventPosition(event);

    // Get the divider position from the DOM
    const dividerEl = document.querySelector(`[data-divider-id="${dividerId}"]`);
    const dividerPosition = dividerEl?.getAttribute('data-divider-position') as 'start' | 'end' || 'end';

    // Find adjacent block for two-way resizing
    const siblingBlocks = Object.values(state.blocks).filter(
      (b) => b.parentId === block.parentId
    );
    const sortedSiblings = siblingBlocks.sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );
    const blockIndex = sortedSiblings.findIndex((b) => b.id === blockId);

    let adjacentBlock = null;
    if (dividerPosition === "start" && blockIndex > 0) {
      adjacentBlock = sortedSiblings[blockIndex - 1];
    } else if (
      dividerPosition === "end" &&
      blockIndex < sortedSiblings.length - 1
    ) {
      adjacentBlock = sortedSiblings[blockIndex + 1];
    }

    // Validation: Check if adjacent block is resizable
    if (adjacentBlock && adjacentBlock.resizable === false) {
      console.warn(
        `Cannot resize block "${blockId}" - adjacent block "${adjacentBlock.id}" is marked as non-resizable.`
      );
      return;
    }

    // Validation: Prevent resizing fr blocks when adjacent to px blocks
    if (
      adjacentBlock &&
      block.sizeUnit === "fr" &&
      adjacentBlock.sizeUnit === "px"
    ) {
      console.warn(
        `Cannot resize fr block "${blockId}" when adjacent to px block "${adjacentBlock.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }

    dispatch({
      type: "START_RESIZE",
      payload: {
        blockId,
        dividerId,
        startPosition,
        initialSize: block.defaultSize || 0,
        initialAdjacentBlockId: adjacentBlock?.id,
        initialAdjacentSize: adjacentBlock
          ? adjacentBlock.originalDefaultSize ||
            adjacentBlock.defaultSize ||
            0
          : undefined,
      },
    });

    // Prevent text selection during drag
    document.body.style.userSelect = "none";
    const parentBlock = block.parentId
      ? state.blocks[block.parentId]
      : null;
    const direction = parentBlock?.direction || "row";
    document.body.style.cursor =
      direction === "row" ? "col-resize" : "row-resize";
  }, [state.blocks, dispatch, getEventPosition]);

  /**
   * Update resize during drag
   */
  const updateResize = useCallback((event: MouseEvent | TouchEvent) => {
    if (!state.resize.isDragging || !state.resize.activeBlockId) return;

    const block = state.blocks[state.resize.activeBlockId];
    if (!block) return;

    const currentPosition = getEventPosition(event);

    // Find the parent block to determine the resize direction
    const parentBlock = block.parentId
      ? state.blocks[block.parentId]
      : null;
    const direction = parentBlock?.direction || "row";

    // Calculate delta based on the parent's direction
    // If parent arranges children in 'row', dividers move horizontally (X axis)
    // If parent arranges children in 'column', dividers move vertically (Y axis)
    const deltaPx =
      direction === "row"
        ? currentPosition.x - state.resize.startPosition.x
        : currentPosition.y - state.resize.startPosition.y;

    if (block.sizeUnit === "px") {
      // Handle pixel-based resizing
      // Get position from divider's data attribute
      const dividerEl = document.querySelector(`[data-divider-id="${state.resize.activeDividerId}"]`);
      const dividerPosition = dividerEl?.getAttribute('data-divider-position') || 'end';

      // For position="start": divider is BEFORE the block
      // - Dragging left (negative delta) should GROW the block (need inversion)
      // - Dragging right (positive delta) should SHRINK the block (need inversion)
      // For position="end": divider is AFTER the block
      // - Dragging right (positive delta) should GROW the block (no inversion)
      // - Dragging left (negative delta) should SHRINK the block (no inversion)
      const shouldInvertDelta = dividerPosition === "start";

      const newSize = calculateConstrainedSize(
        deltaPx,
        state.resize.initialSize,
        block.minSize,
        block.maxSize,
        shouldInvertDelta
      );

      dispatch({
        type: "RESIZE_BLOCK",
        payload: { blockId: state.resize.activeBlockId, size: newSize },
      });
    } else if (block.sizeUnit === "fr") {
      // Handle fractional resizing (two-way)
      const siblingBlocks = Object.values(state.blocks).filter(
        (b) => b.parentId === block.parentId
      );
      const frBlocks = siblingBlocks.filter((b) => b.sizeUnit === "fr");

      // Measure the actual parent container dimensions
      const parentElement = block.parentId
        ? document.querySelector(`[data-block-id="${block.parentId}"]`)
        : document.querySelector(`[data-block-id="root"]`);

      const containerSize = parentElement
        ? direction === "row"
          ? parentElement.clientWidth
          : parentElement.clientHeight
        : 1200; // Fallback only if element not found
      // Measure actual pixel space used by px blocks (not configured defaultSize)
      const pxBlocks = siblingBlocks
        .filter((b) => b.sizeUnit === "px")
        .reduce((sum, b) => {
          const el = document.querySelector(`[data-block-id="${b.id}"]`);
          if (!el) return sum;
          const size =
            direction === "row" ? el.clientWidth : el.clientHeight;
          return sum + size;
        }, 0);

      // Measure actual divider sizes from DOM (not calculated count × 8px)
      const dividers = Array.from(
        parentElement?.querySelectorAll('[data-block-type="divider"]') || []
      );
      const gapSpace = dividers.reduce((sum, el) => {
        if (!(el instanceof HTMLElement)) return sum;
        const size = direction === "row" ? el.clientWidth : el.clientHeight;
        return sum + size;
      }, 0);

      const fixedSpace = pxBlocks;
      const flexSpace = getFlexSpacePx(containerSize, fixedSpace, gapSpace);
      // Use current sizes, not original defaults, for accurate calculations during multi-step resizes
      const totalFr = frBlocks.reduce(
        (sum, b) => sum + (b.defaultSize || 1),
        0
      );
      const pixelsPerFr = totalFr > 0 ? flexSpace / totalFr : 0;

      if (pixelsPerFr === 0) return; // Prevent division by zero

      const deltaFr = pxToFr(deltaPx, pixelsPerFr);

      // Find adjacent block based on block order
      const sortedFrBlocks = frBlocks.sort(
        (a, b) => (a.order || 0) - (b.order || 0)
      );
      const blockIndex = sortedFrBlocks.findIndex(
        (b) => b.id === state.resize.activeBlockId
      );

      // Get actual position from divider's data attribute first
      const dividerEl = document.querySelector(`[data-divider-id="${state.resize.activeDividerId}"]`);
      const dividerPosition = dividerEl?.getAttribute('data-divider-position') || 'end';

      let adjacentBlock = null;
      if (dividerPosition === "start" && blockIndex > 0) {
        adjacentBlock = sortedFrBlocks[blockIndex - 1];
      } else if (
        dividerPosition === "end" &&
        blockIndex < sortedFrBlocks.length - 1
      ) {
        adjacentBlock = sortedFrBlocks[blockIndex + 1];
      }

      if (adjacentBlock) {
        let targetDelta: number;
        let adjacentDelta: number;

        if (dividerPosition === "start") {
          // Divider at start: moving right grows target, shrinks previous
          targetDelta = deltaFr;
          adjacentDelta = -deltaFr;
        } else {
          // Divider at end: moving right grows target, shrinks next
          targetDelta = deltaFr;
          adjacentDelta = -deltaFr;
        }

        // Apply minimum size constraints using initial sizes
        const minSize = 0.1; // Minimum fr size
        const newTargetSize = Math.max(
          minSize,
          state.resize.initialSize + targetDelta
        );
        const newAdjacentSize = Math.max(
          minSize,
          (state.resize.initialAdjacentSize || 1) + adjacentDelta
        );

        // Ensure zero-sum by adjusting if constraints were applied
        const actualTargetDelta = newTargetSize - state.resize.initialSize;
        const actualAdjacentDelta =
          newAdjacentSize - (state.resize.initialAdjacentSize || 1);

        if (Math.abs(actualTargetDelta + actualAdjacentDelta) < 0.01) {
          dispatch({
            type: "RESIZE_BLOCK",
            payload: {
              blockId: state.resize.activeBlockId,
              size: newTargetSize,
            },
          });
          dispatch({
            type: "RESIZE_BLOCK",
            payload: { blockId: adjacentBlock.id, size: newAdjacentSize },
          });
        }
      }
    }
  }, [state.resize, state.blocks, dispatch, getEventPosition]);

  /**
   * End resize operation and cleanup
   */
  const endResize = useCallback(() => {
    dispatch({ type: "END_RESIZE" });

    // Restore normal cursor and text selection
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  }, [dispatch]);

  return {
    startResize,
    updateResize,
    endResize,
  };
}
