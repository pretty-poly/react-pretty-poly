import { test, expect } from '@playwright/test';
import { getBlock, dragDivider, getBlockSize, waitForGridReady, getAllDividers } from './helpers/grid-helpers';

test.describe('IDE Layout Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?example=ide-layout');
    await waitForGridReady(page);
  });

  test.describe('Layout and Structure', () => {
    test('displays all four panes', async ({ page }) => {
      const fileTree = await getBlock(page, 'file-tree');
      const editor = await getBlock(page, 'editor');
      const terminal = await getBlock(page, 'terminal');
      const properties = await getBlock(page, 'properties');

      await expect(fileTree).toBeVisible();
      await expect(editor).toBeVisible();
      await expect(terminal).toBeVisible();
      await expect(properties).toBeVisible();
    });

    test('file tree has correct initial size', async ({ page }) => {
      const fileTree = await getBlock(page, 'file-tree');
      const size = await getBlockSize(fileTree);

      // Default size is 250px
      expect(size.width).toBeGreaterThanOrEqual(245);
      expect(size.width).toBeLessThanOrEqual(255);
    });

    test('terminal has correct initial size', async ({ page }) => {
      const terminal = await getBlock(page, 'terminal');
      const size = await getBlockSize(terminal);

      // Default size is 300px height
      expect(size.height).toBeGreaterThanOrEqual(295);
      expect(size.height).toBeLessThanOrEqual(305);
    });

    test('properties panel has correct initial size', async ({ page }) => {
      const properties = await getBlock(page, 'properties');
      const size = await getBlockSize(properties);

      // Default size is 300px
      expect(size.width).toBeGreaterThanOrEqual(295);
      expect(size.width).toBeLessThanOrEqual(305);
    });
  });

  test.describe('File Tree', () => {
    test('displays explorer header', async ({ page }) => {
      const header = page.locator('[data-block-id="file-tree"] >> text=Explorer');
      await expect(header).toBeVisible();
    });

    test('displays file tree structure', async ({ page }) => {
      // Check within file-tree block specifically
      const fileTree = page.locator('[data-block-id="file-tree"]');
      await expect(fileTree.getByText('src').first()).toBeVisible();
      await expect(fileTree.getByText('index.ts')).toBeVisible();
      await expect(fileTree.getByText('App.tsx')).toBeVisible();
      await expect(fileTree.getByText('components.tsx')).toBeVisible();
      await expect(fileTree.getByText('package.json')).toBeVisible();
    });

    test('selects a file when clicked', async ({ page }) => {
      const indexFile = page.getByRole('button', { name: /index\.ts/ });
      await indexFile.click();

      // Check file is selected (has blue background)
      const classList = await indexFile.getAttribute('class');
      expect(classList).toContain('bg-slate-800');
      expect(classList).toContain('text-blue-400');
    });

    test('updates editor when file is selected', async ({ page }) => {
      const appFile = page.getByRole('button', { name: /App\.tsx/ });
      await appFile.click();

      // Check editor tab shows the selected file
      const editorTab = page.locator('[data-block-id="editor"] >> text=App.tsx');
      await expect(editorTab).toBeVisible();
    });

    test('switches between files', async ({ page }) => {
      // Select index.ts
      await page.getByRole('button', { name: /index\.ts/ }).click();
      await expect(page.locator('[data-block-id="editor"] >> text=index.ts')).toBeVisible();

      // Switch to components.tsx
      await page.getByRole('button', { name: /components\.tsx/ }).click();
      await expect(page.locator('[data-block-id="editor"] >> text=components.tsx')).toBeVisible();
    });
  });

  test.describe('Code Editor', () => {
    test('displays code with line numbers', async ({ page }) => {
      const editorContent = page.locator('[data-block-id="editor"] .font-mono');
      await expect(editorContent).toBeVisible();

      // Check for line numbers
      const lineNumber = page.locator('[data-block-id="editor"] .text-slate-600').first();
      await expect(lineNumber).toBeVisible();
    });

    test('shows modified indicator for unsaved files', async ({ page }) => {
      // components.tsx is marked as modified in the data
      await page.getByRole('button', { name: /components\.tsx/ }).click();

      // Check for blue dot indicator
      const modifiedIndicator = page.locator('[data-block-id="editor"] .bg-blue-500');
      await expect(modifiedIndicator).toBeVisible();
    });

    test('displays syntax-highlighted code', async ({ page }) => {
      await page.getByRole('button', { name: /components\.tsx/ }).click();

      // Check for colored text (different syntax highlighting)
      const purpleText = page.locator('[data-block-id="editor"] .text-purple-400').first();
      await expect(purpleText).toBeVisible();
    });

    test('displays editor header with file icon', async ({ page }) => {
      const codeIcon = page.locator('[data-block-id="editor"] svg').first();
      await expect(codeIcon).toBeVisible();
    });
  });

  test.describe('Terminal', () => {
    test('displays terminal header', async ({ page }) => {
      const header = page.locator('[data-block-id="terminal"] >> text=Terminal');
      await expect(header).toBeVisible();
    });

    test('displays terminal prompt and commands', async ({ page }) => {
      await expect(page.locator('[data-block-id="terminal"] >> text=npm run dev')).toBeVisible();
      await expect(page.locator('[data-block-id="terminal"] >> text=~/project').first()).toBeVisible();
    });

    test('shows server running message', async ({ page }) => {
      await expect(
        page.locator('[data-block-id="terminal"] >> text=Server running at http://localhost:3000')
      ).toBeVisible();
    });

    test('displays animated cursor', async ({ page }) => {
      const cursor = page.locator('[data-block-id="terminal"] .animate-pulse');
      await expect(cursor).toBeVisible();
    });
  });

  test.describe('Properties Panel', () => {
    test('displays properties header', async ({ page }) => {
      const header = page.locator('[data-block-id="properties"] >> text=Properties');
      await expect(header).toBeVisible();
    });

    test('shows file information', async ({ page }) => {
      await expect(page.locator('[data-block-id="properties"] >> text=File Info')).toBeVisible();
      await expect(page.locator('[data-block-id="properties"] >> text=Type:')).toBeVisible();
      await expect(page.locator('[data-block-id="properties"] >> text=Size:')).toBeVisible();
      await expect(page.locator('[data-block-id="properties"] >> text=Lines:')).toBeVisible();
    });

    test('shows git status', async ({ page }) => {
      await expect(page.locator('[data-block-id="properties"] >> text=Git Status')).toBeVisible();
    });

    test('displays modified status for unsaved files', async ({ page }) => {
      await page.getByRole('button', { name: /components\.tsx/ }).click();

      await expect(page.locator('[data-block-id="properties"] >> text=Modified')).toBeVisible();
      await expect(page.locator('[data-block-id="properties"] .bg-yellow-500')).toBeVisible();
    });

    test('shows quick actions', async ({ page }) => {
      await expect(page.locator('[data-block-id="properties"] >> text=Quick Actions')).toBeVisible();
      await expect(page.locator('[data-block-id="properties"] >> text=Format Document')).toBeVisible();
      await expect(page.locator('[data-block-id="properties"] >> text=Organize Imports')).toBeVisible();
    });

    test('shows save button for modified files', async ({ page }) => {
      await page.getByRole('button', { name: /components\.tsx/ }).click();

      await expect(page.locator('[data-block-id="properties"] >> text=Save Changes')).toBeVisible();
    });

    test('updates properties when file changes', async ({ page }) => {
      // Select index.ts
      await page.getByRole('button', { name: /index\.ts/ }).click();
      const indexType = page.locator('[data-block-id="properties"] >> text=TypeScript');
      await expect(indexType).toBeVisible();

      // Switch to App.tsx
      await page.getByRole('button', { name: /App\.tsx/ }).click();
      const appType = page.locator('[data-block-id="properties"] >> text=TypeScript React');
      await expect(appType).toBeVisible();
    });
  });

  test.describe('Grid Resize Operations', () => {
    test('can resize file tree pane', async ({ page }) => {
      const fileTree = await getBlock(page, 'file-tree');
      const initialSize = await getBlockSize(fileTree);

      // Find the first vertical divider
      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      // Drag divider to the right
      await dragDivider(firstDivider, 50, 0);
      await page.waitForTimeout(200);

      const newSize = await getBlockSize(fileTree);
      expect(newSize.width).toBeGreaterThan(initialSize.width);
    });

    test('can resize terminal pane', async ({ page }) => {
      const terminal = await getBlock(page, 'terminal');
      const initialSize = await getBlockSize(terminal);

      // Find the horizontal divider between editor and terminal
      const dividers = await getAllDividers(page);

      // Find horizontal divider by checking cursor style or try the second one
      const horizontalDivider = dividers.nth(1);

      // Drag divider up (negative Y) to make terminal smaller, then verify it changed
      await dragDivider(horizontalDivider, 0, -50);
      await page.waitForTimeout(200);

      const newSize = await getBlockSize(terminal);
      // Check that size changed (either larger or smaller)
      expect(newSize.height).not.toBe(initialSize.height);
    });

    test('can resize properties panel', async ({ page }) => {
      const properties = await getBlock(page, 'properties');
      const initialSize = await getBlockSize(properties);

      // Find the last vertical divider (before properties)
      const dividers = await getAllDividers(page);
      const lastDivider = dividers.last();

      // Drag divider to the left
      await dragDivider(lastDivider, -50, 0);
      await page.waitForTimeout(200);

      const newSize = await getBlockSize(properties);
      expect(newSize.width).toBeGreaterThan(initialSize.width);
    });

    test('respects min size constraints on file tree', async ({ page }) => {
      const fileTree = await getBlock(page, 'file-tree');
      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      // Try to drag far to the left (should hit min constraint)
      await dragDivider(firstDivider, -200, 0);
      await page.waitForTimeout(200);

      const size = await getBlockSize(fileTree);
      // Min size is 200px
      expect(size.width).toBeGreaterThanOrEqual(200);
    });

    test('respects min size constraints on terminal', async ({ page }) => {
      const terminal = await getBlock(page, 'terminal');
      const dividers = await getAllDividers(page);
      const horizontalDivider = dividers.nth(1);

      // Try to drag far up (should hit min constraint)
      await dragDivider(horizontalDivider, 0, -300);
      await page.waitForTimeout(200);

      const size = await getBlockSize(terminal);
      // Min size is 150px
      expect(size.height).toBeGreaterThanOrEqual(150);
    });

    test('respects max size constraints', async ({ page }) => {
      const fileTree = await getBlock(page, 'file-tree');
      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      // Try to drag far to the right (should hit max constraint)
      await dragDivider(firstDivider, 500, 0);
      await page.waitForTimeout(200);

      const size = await getBlockSize(fileTree);
      // Max size is 400px
      expect(size.width).toBeLessThanOrEqual(400);
    });
  });

  test.describe('Multi-pane Interactions', () => {
    test('all panes remain functional after resizing', async ({ page }) => {
      // Resize file tree
      const dividers = await getAllDividers(page);
      await dragDivider(dividers.first(), 30, 0);
      await page.waitForTimeout(200);

      // File tree should still work
      await page.getByRole('button', { name: /index\.ts/ }).click();
      await expect(page.locator('[data-block-id="editor"] >> text=index.ts')).toBeVisible();

      // Resize terminal
      await dragDivider(dividers.nth(1), 0, 30);
      await page.waitForTimeout(200);

      // Terminal should still be visible
      await expect(page.locator('[data-block-id="terminal"] >> text=Terminal')).toBeVisible();
    });

    test('maintains IDE state across file selections', async ({ page }) => {
      // Select multiple files
      await page.getByRole('button', { name: /index\.ts/ }).click();
      await page.getByRole('button', { name: /App\.tsx/ }).click();
      await page.getByRole('button', { name: /components\.tsx/ }).click();

      // All panes should still be visible and functional
      const fileTree = await getBlock(page, 'file-tree');
      const editor = await getBlock(page, 'editor');
      const terminal = await getBlock(page, 'terminal');
      const properties = await getBlock(page, 'properties');

      await expect(fileTree).toBeVisible();
      await expect(editor).toBeVisible();
      await expect(terminal).toBeVisible();
      await expect(properties).toBeVisible();
    });
  });
});
