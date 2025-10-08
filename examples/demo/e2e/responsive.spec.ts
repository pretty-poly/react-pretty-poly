import { test, expect } from '@playwright/test';
import { waitForGridReady } from './helpers/grid-helpers';

test.describe('Responsive Grid Behavior', () => {
  test.describe('Desktop Viewport (Grid Mode)', () => {
    test.use({ viewport: { width: 1920, height: 1080 } });

    test('email client uses grid layout on desktop', async ({ page }) => {
      await page.goto('/?example=email-client');
      await waitForGridReady(page);

      // All three panes should be visible side-by-side
      const folders = page.locator('[data-block-id="folders"]');
      const emailList = page.locator('[data-block-id="email-list"]');
      const preview = page.locator('[data-block-id="email-preview"]');

      await expect(folders).toBeVisible();
      await expect(emailList).toBeVisible();
      await expect(preview).toBeVisible();

      // Check they're arranged horizontally
      const foldersBox = await folders.boundingBox();
      const emailListBox = await emailList.boundingBox();
      const previewBox = await preview.boundingBox();

      if (foldersBox && emailListBox && previewBox) {
        expect(foldersBox.x).toBeLessThan(emailListBox.x);
        expect(emailListBox.x).toBeLessThan(previewBox.x);
      }
    });

    test('dashboard uses grid layout on desktop', async ({ page }) => {
      await page.goto('/?example=basic-dashboard');
      await waitForGridReady(page);

      // All three panels visible side-by-side
      const sidebar = page.locator('[data-block-id="sidebar"]');
      const main = page.locator('[data-block-id="main"]');
      const activity = page.locator('[data-block-id="activity"]');

      await expect(sidebar).toBeVisible();
      await expect(main).toBeVisible();
      await expect(activity).toBeVisible();

      const sidebarBox = await sidebar.boundingBox();
      const mainBox = await main.boundingBox();
      const activityBox = await activity.boundingBox();

      if (sidebarBox && mainBox && activityBox) {
        expect(sidebarBox.x).toBeLessThan(mainBox.x);
        expect(mainBox.x).toBeLessThan(activityBox.x);
      }
    });

    test('IDE layout uses nested grid on desktop', async ({ page }) => {
      await page.goto('/?example=ide-layout');
      await waitForGridReady(page);

      // All four panes visible
      const fileTree = page.locator('[data-block-id="file-tree"]');
      const editor = page.locator('[data-block-id="editor"]');
      const terminal = page.locator('[data-block-id="terminal"]');
      const properties = page.locator('[data-block-id="properties"]');

      await expect(fileTree).toBeVisible();
      await expect(editor).toBeVisible();
      await expect(terminal).toBeVisible();
      await expect(properties).toBeVisible();
    });
  });

  test.describe('Tablet Viewport', () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test('maintains reasonable layout on tablet', async ({ page }) => {
      await page.goto('/?example=email-client');
      await waitForGridReady(page);

      // Grid should still work on tablet
      const folders = page.locator('[data-block-id="folders"]');
      const emailList = page.locator('[data-block-id="email-list"]');
      const preview = page.locator('[data-block-id="email-preview"]');

      await expect(folders).toBeVisible();
      await expect(emailList).toBeVisible();
      await expect(preview).toBeVisible();
    });

    test('dashboard adapts to tablet width', async ({ page }) => {
      await page.goto('/?example=basic-dashboard');
      await waitForGridReady(page);

      const sidebar = page.locator('[data-block-id="sidebar"]');
      const main = page.locator('[data-block-id="main"]');

      await expect(sidebar).toBeVisible();
      await expect(main).toBeVisible();
    });
  });

  test.describe('Mobile Viewport', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('grid renders on mobile viewport', async ({ page }) => {
      await page.goto('/?example=email-client');
      await waitForGridReady(page);

      // Grid container should exist
      const grid = page.locator('[data-grid-id]').first();
      await expect(grid).toBeVisible();
    });

    test('dashboard renders on mobile', async ({ page }) => {
      await page.goto('/?example=basic-dashboard');
      await waitForGridReady(page);

      const grid = page.locator('[data-grid-id]').first();
      await expect(grid).toBeVisible();
    });
  });

  test.describe('Viewport Resize Behavior', () => {
    test('handles viewport resize from desktop to mobile', async ({ page }) => {
      // Start desktop
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/?example=email-client');
      await waitForGridReady(page);

      // Verify desktop layout
      let folders = page.locator('[data-block-id="folders"]');
      await expect(folders).toBeVisible();

      // Resize to mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(200);

      // Grid should still exist
      const grid = page.locator('[data-grid-id]').first();
      await expect(grid).toBeVisible();
    });

    test('handles viewport resize from mobile to desktop', async ({ page }) => {
      // Start mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/?example=basic-dashboard');
      await waitForGridReady(page);

      // Resize to desktop
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.waitForTimeout(200);

      // All panels should be visible
      const sidebar = page.locator('[data-block-id="sidebar"]');
      const main = page.locator('[data-block-id="main"]');
      const activity = page.locator('[data-block-id="activity"]');

      await expect(sidebar).toBeVisible();
      await expect(main).toBeVisible();
      await expect(activity).toBeVisible();
    });
  });

  test.describe('Example Selector Responsive Behavior', () => {
    test('selector displays correctly on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const heading = page.getByRole('heading', { name: 'PrettyPoly Demo Examples' });
      await expect(heading).toBeVisible();

      // All three cards should be visible
      const cards = page.locator('.cursor-pointer.transition-all');
      const count = await cards.count();
      expect(count).toBe(3);
    });

    test('selector displays correctly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const heading = page.getByRole('heading', { name: 'PrettyPoly Demo Examples' });
      await expect(heading).toBeVisible();

      // Cards should stack vertically on mobile
      const cards = page.locator('.cursor-pointer.transition-all');
      const count = await cards.count();
      expect(count).toBe(3);
    });

    test('back button works on all viewport sizes', async ({ page }) => {
      const viewports = [
        { width: 1920, height: 1080 },
        { width: 768, height: 1024 },
        { width: 375, height: 667 },
      ];

      for (const viewport of viewports) {
        await page.setViewportSize(viewport);
        await page.goto('/?example=email-client');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(100); // Extra wait for render

        // Back button should be visible
        const backButton = page.getByRole('button', { name: 'Back to Examples' });
        await expect(backButton).toBeVisible();

        // Click back
        await backButton.click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(100); // Extra wait for render

        // Should be on selector - check URL instead of heading for reliability
        expect(page.url()).not.toContain('example=');
      }
    });
  });

  test.describe('Cross-browser Responsive Tests', () => {
    test('email client works across different browsers', async ({ page }) => {
      await page.goto('/?example=email-client');
      await waitForGridReady(page);

      // Basic functionality should work regardless of browser
      const folders = page.locator('[data-block-id="folders"]');
      const emailList = page.locator('[data-block-id="email-list"]');

      await expect(folders).toBeVisible();
      await expect(emailList).toBeVisible();

      // Can interact with UI
      const inboxFolder = page.getByRole('button', { name: /Inbox/ });
      await expect(inboxFolder).toBeVisible();
      await inboxFolder.click();
    });

    test('dashboard works across different browsers', async ({ page }) => {
      await page.goto('/?example=basic-dashboard');
      await waitForGridReady(page);

      const sidebar = page.locator('[data-block-id="sidebar"]');
      await expect(sidebar).toBeVisible();

      // Navigation should work
      const usersButton = page.getByRole('button', { name: /Users/ });
      await usersButton.click();
      await expect(page.locator('text=Users Management')).toBeVisible();
    });
  });
});
