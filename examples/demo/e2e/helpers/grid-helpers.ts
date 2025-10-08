import { Page, Locator, expect } from '@playwright/test';

/**
 * Helper utilities for interacting with PrettyPoly grid components in tests
 */

/**
 * Get a block element by its ID
 */
export async function getBlock(page: Page, blockId: string): Promise<Locator> {
  return page.locator(`[data-block-id="${blockId}"]`);
}

/**
 * Get a divider element by its data-block-id
 */
export async function getDivider(page: Page, dividerId: string): Promise<Locator> {
  return page.locator(`[data-block-id="${dividerId}"]`);
}

/**
 * Get all dividers on the page
 */
export async function getAllDividers(page: Page): Promise<Locator> {
  return page.locator('[data-block-type="divider"]');
}

/**
 * Drag a divider to resize blocks
 * @param divider - The divider locator
 * @param deltaX - Horizontal pixels to move (positive = right, negative = left)
 * @param deltaY - Vertical pixels to move (positive = down, negative = up)
 */
export async function dragDivider(
  divider: Locator,
  deltaX: number = 0,
  deltaY: number = 0
): Promise<void> {
  const box = await divider.boundingBox();
  if (!box) throw new Error('Divider not found');

  // Start drag from center of divider
  await divider.hover();
  await divider.page().mouse.down();

  // Move to new position
  await divider.page().mouse.move(
    box.x + box.width / 2 + deltaX,
    box.y + box.height / 2 + deltaY,
    { steps: 10 } // Smooth movement
  );

  await divider.page().mouse.up();
}

/**
 * Double-click a divider to collapse/expand a block
 */
export async function doublClickDivider(divider: Locator): Promise<void> {
  await divider.dblclick();
}

/**
 * Get the computed size of a block
 */
export async function getBlockSize(block: Locator): Promise<{ width: number; height: number }> {
  const box = await block.boundingBox();
  if (!box) throw new Error('Block not found');
  return { width: box.width, height: box.height };
}

/**
 * Wait for a block to have approximately the expected size (within tolerance)
 */
export async function expectBlockSize(
  block: Locator,
  expected: { width?: number; height?: number },
  tolerance: number = 5
): Promise<void> {
  const size = await getBlockSize(block);

  if (expected.width !== undefined) {
    expect(size.width).toBeGreaterThanOrEqual(expected.width - tolerance);
    expect(size.width).toBeLessThanOrEqual(expected.width + tolerance);
  }

  if (expected.height !== undefined) {
    expect(size.height).toBeGreaterThanOrEqual(expected.height - tolerance);
    expect(size.height).toBeLessThanOrEqual(expected.height + tolerance);
  }
}

/**
 * Check if a block is visible on the page
 */
export async function isBlockVisible(block: Locator): Promise<boolean> {
  return await block.isVisible();
}

/**
 * Navigate to a specific example
 */
export async function navigateToExample(page: Page, exampleKey: string): Promise<void> {
  await page.goto(`/?example=${exampleKey}`);
  await page.waitForLoadState('networkidle');
}

/**
 * Navigate back to the example selector
 */
export async function navigateToSelector(page: Page): Promise<void> {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
}

/**
 * Get grid container (root block with data-grid-id)
 */
export async function getGrid(page: Page): Promise<Locator> {
  return page.locator('[data-grid-id]').first();
}

/**
 * Wait for grid to be fully loaded and rendered
 */
export async function waitForGridReady(page: Page): Promise<void> {
  // Wait for the grid container to be visible
  const grid = await getGrid(page);
  await grid.waitFor({ state: 'visible' });

  // Give time for layout calculations and rendering
  await page.waitForTimeout(100);
}

/**
 * Check if a divider has the correct cursor style
 */
export async function expectDividerCursor(
  divider: Locator,
  direction: 'row' | 'column'
): Promise<void> {
  const expectedCursor = direction === 'row' ? 'col-resize' : 'row-resize';
  const cursor = await divider.evaluate((el) => window.getComputedStyle(el).cursor);
  expect(cursor).toBe(expectedCursor);
}
