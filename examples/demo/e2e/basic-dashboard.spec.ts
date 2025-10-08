import { test, expect } from '@playwright/test';
import { getBlock, dragDivider, getBlockSize, waitForGridReady, getAllDividers } from './helpers/grid-helpers';

test.describe('Basic Dashboard Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?example=basic-dashboard');
    await waitForGridReady(page);
  });

  test.describe('Layout and Structure', () => {
    test('displays all three panes', async ({ page }) => {
      const sidebar = await getBlock(page, 'sidebar');
      const main = await getBlock(page, 'main');
      const activity = await getBlock(page, 'activity');

      await expect(sidebar).toBeVisible();
      await expect(main).toBeVisible();
      await expect(activity).toBeVisible();
    });

    test('sidebar has correct initial size', async ({ page }) => {
      const sidebar = await getBlock(page, 'sidebar');
      const size = await getBlockSize(sidebar);

      // Default size is 280px
      expect(size.width).toBeGreaterThanOrEqual(275);
      expect(size.width).toBeLessThanOrEqual(285);
    });

    test('activity panel has correct initial size', async ({ page }) => {
      const activity = await getBlock(page, 'activity');
      const size = await getBlockSize(activity);

      // Default size is 320px
      expect(size.width).toBeGreaterThanOrEqual(315);
      expect(size.width).toBeLessThanOrEqual(325);
    });

    test('main content takes remaining space', async ({ page }) => {
      const main = await getBlock(page, 'main');
      const size = await getBlockSize(main);

      // Main should be larger than fixed-width sidebars
      expect(size.width).toBeGreaterThan(400);
    });
  });

  test.describe('Sidebar Navigation', () => {
    test('displays dashboard header', async ({ page }) => {
      const header = page.locator('[data-block-id="sidebar"] >> text=Dashboard');
      await expect(header).toBeVisible();
    });

    test('displays all navigation items', async ({ page }) => {
      await expect(page.getByRole('button', { name: /Home/ })).toBeVisible();
      await expect(page.getByRole('button', { name: /Users/ })).toBeVisible();
      await expect(page.getByRole('button', { name: /Analytics/ })).toBeVisible();
      await expect(page.getByRole('button', { name: /Settings/ })).toBeVisible();
    });

    test('home is selected by default', async ({ page }) => {
      const homeButton = page.getByRole('button', { name: /Home/ });
      const classList = await homeButton.getAttribute('class');
      expect(classList).toContain('bg-slate-800');
      expect(classList).toContain('text-white');
    });

    test('switches to Users navigation', async ({ page }) => {
      await page.getByRole('button', { name: /Users/ }).click();

      // Check Users button is active
      const usersButton = page.getByRole('button', { name: /Users/ });
      const classList = await usersButton.getAttribute('class');
      expect(classList).toContain('bg-slate-800');

      // Check main content updated
      await expect(page.locator('[data-block-id="main"] >> text=Users Management')).toBeVisible();
    });

    test('switches to Analytics navigation', async ({ page }) => {
      await page.getByRole('button', { name: /Analytics/ }).click();

      const analyticsButton = page.getByRole('button', { name: /Analytics/ });
      const classList = await analyticsButton.getAttribute('class');
      expect(classList).toContain('bg-slate-800');

      await expect(page.locator('[data-block-id="main"] >> text=Analytics Dashboard')).toBeVisible();
    });

    test('switches to Settings navigation', async ({ page }) => {
      await page.getByRole('button', { name: /Settings/ }).click();

      const settingsButton = page.getByRole('button', { name: /Settings/ });
      const classList = await settingsButton.getAttribute('class');
      expect(classList).toContain('bg-slate-800');

      await expect(page.locator('[data-block-id="main"] >> text=Settings')).toBeVisible();
    });
  });

  test.describe('Main Content Area', () => {
    test('displays overview title by default', async ({ page }) => {
      const title = page.locator('[data-block-id="main"] h2');
      await expect(title).toHaveText('Overview');
    });

    test('displays KPI cards', async ({ page }) => {
      await expect(page.locator('text=Total Revenue')).toBeVisible();
      await expect(page.locator('text=$45,231')).toBeVisible();
      await expect(page.locator('text=Active Users')).toBeVisible();
      await expect(page.locator('text=2,350')).toBeVisible();
    });

    test('displays data table', async ({ page }) => {
      await expect(page.locator('[data-block-id="main"] >> text=Recent Activity')).toBeVisible();
      await expect(page.locator('[data-block-id="main"] table')).toBeVisible();
    });

    test('table has correct headers', async ({ page }) => {
      await expect(page.locator('[data-block-id="main"] th >> text=User')).toBeVisible();
      await expect(page.locator('[data-block-id="main"] th >> text=Action')).toBeVisible();
      await expect(page.locator('[data-block-id="main"] th >> text=Time')).toBeVisible();
    });

    test('table has data rows', async ({ page }) => {
      const rows = page.locator('[data-block-id="main"] tbody tr');
      const count = await rows.count();
      expect(count).toBeGreaterThan(0);
    });

    test('updates content when navigation changes', async ({ page }) => {
      // Switch to Users
      await page.getByRole('button', { name: /Users/ }).click();
      await expect(page.locator('[data-block-id="main"] h2')).toHaveText('Users Management');
      await expect(page.locator('text=Total Users')).toBeVisible();

      // Switch to Analytics
      await page.getByRole('button', { name: /Analytics/ }).click();
      await expect(page.locator('[data-block-id="main"] h2')).toHaveText('Analytics Dashboard');
      await expect(page.locator('text=Page Views')).toBeVisible();
    });

    test('displays notification bell', async ({ page }) => {
      const bell = page.locator('[data-block-id="main"] svg').first();
      await expect(bell).toBeVisible();
    });
  });

  test.describe('Activity Panel', () => {
    test('displays live activity header', async ({ page }) => {
      await expect(page.locator('[data-block-id="activity"] >> text=Live Activity')).toBeVisible();
    });

    test('displays activity items', async ({ page }) => {
      const activityItems = page.locator('[data-block-id="activity"] .space-y-4 > div');
      const count = await activityItems.count();
      expect(count).toBeGreaterThan(0);
    });

    test('activity items have colored indicators', async ({ page }) => {
      const indicators = page.locator('[data-block-id="activity"] .rounded-full');
      const count = await indicators.count();
      expect(count).toBeGreaterThan(0);
    });

    test('displays activity text and timestamps', async ({ page }) => {
      await expect(page.locator('[data-block-id="activity"] >> text=minutes ago').first()).toBeVisible();
    });

    test('updates activity when navigation changes', async ({ page }) => {
      // Default activity
      const initialActivity = await page.locator('[data-block-id="activity"] >> text=New user registered').isVisible();
      expect(initialActivity).toBe(true);

      // Switch to Users
      await page.getByRole('button', { name: /Users/ }).click();
      await page.waitForTimeout(100);

      // Activity should update
      await expect(page.locator('[data-block-id="activity"] >> text=signed up')).toBeVisible();
    });
  });

  test.describe('Grid Resize Operations', () => {
    test('can resize sidebar', async ({ page }) => {
      const sidebar = await getBlock(page, 'sidebar');
      const initialSize = await getBlockSize(sidebar);

      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      await dragDivider(firstDivider, 50, 0);
      await page.waitForTimeout(200);

      const newSize = await getBlockSize(sidebar);
      expect(newSize.width).toBeGreaterThan(initialSize.width);
    });

    test('can resize activity panel', async ({ page }) => {
      const activity = await getBlock(page, 'activity');
      const initialSize = await getBlockSize(activity);

      const dividers = await getAllDividers(page);
      const lastDivider = dividers.last();

      await dragDivider(lastDivider, -50, 0);
      await page.waitForTimeout(200);

      const newSize = await getBlockSize(activity);
      expect(newSize.width).toBeGreaterThan(initialSize.width);
    });

    test('respects min size on sidebar', async ({ page }) => {
      const sidebar = await getBlock(page, 'sidebar');
      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      await dragDivider(firstDivider, -200, 0);
      await page.waitForTimeout(200);

      const size = await getBlockSize(sidebar);
      // Min size is 200px
      expect(size.width).toBeGreaterThanOrEqual(200);
    });

    test('respects max size on sidebar', async ({ page }) => {
      const sidebar = await getBlock(page, 'sidebar');
      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      await dragDivider(firstDivider, 300, 0);
      await page.waitForTimeout(200);

      const size = await getBlockSize(sidebar);
      // Max size is 400px
      expect(size.width).toBeLessThanOrEqual(400);
    });

    test('respects min size on activity panel', async ({ page }) => {
      const activity = await getBlock(page, 'activity');
      const dividers = await getAllDividers(page);
      const lastDivider = dividers.last();

      await dragDivider(lastDivider, 200, 0);
      await page.waitForTimeout(200);

      const size = await getBlockSize(activity);
      // Min size is 280px
      expect(size.width).toBeGreaterThanOrEqual(280);
    });

    test('all panels remain functional after resizing', async ({ page }) => {
      // Resize both panels
      const dividers = await getAllDividers(page);
      await dragDivider(dividers.first(), 30, 0);
      await dragDivider(dividers.last(), -30, 0);
      await page.waitForTimeout(200);

      // Navigation should still work
      await page.getByRole('button', { name: /Analytics/ }).click();
      await expect(page.locator('[data-block-id="main"] h2')).toHaveText('Analytics Dashboard');

      // All panels should still be visible
      const sidebar = await getBlock(page, 'sidebar');
      const main = await getBlock(page, 'main');
      const activity = await getBlock(page, 'activity');

      await expect(sidebar).toBeVisible();
      await expect(main).toBeVisible();
      await expect(activity).toBeVisible();
    });
  });

  test.describe('Dynamic Content Updates', () => {
    test('KPIs update when switching sections', async ({ page }) => {
      // Home KPIs
      await expect(page.locator('text=Total Revenue')).toBeVisible();

      // Users KPIs
      await page.getByRole('button', { name: /Users/ }).click();
      await expect(page.locator('text=Total Users')).toBeVisible();
      await expect(page.locator('text=8,492')).toBeVisible();

      // Analytics KPIs
      await page.getByRole('button', { name: /Analytics/ }).click();
      await expect(page.locator('text=Page Views')).toBeVisible();
      await expect(page.locator('text=124,503')).toBeVisible();
    });

    test('table content updates when switching sections', async ({ page }) => {
      // Home table
      await expect(page.locator('text=Recent Activity')).toBeVisible();

      // Users table
      await page.getByRole('button', { name: /Users/ }).click();
      await expect(page.locator('text=Recent Users')).toBeVisible();
      await expect(page.locator('th >> text=Email')).toBeVisible();

      // Analytics table
      await page.getByRole('button', { name: /Analytics/ }).click();
      await expect(page.locator('text=Top Pages')).toBeVisible();
      await expect(page.locator('th >> text=Views')).toBeVisible();
    });

    test('can navigate through all sections', async ({ page }) => {
      const sections = ['Home', 'Users', 'Analytics', 'Settings'];

      for (const section of sections) {
        await page.getByRole('button', { name: new RegExp(section) }).click();
        await page.waitForTimeout(100);

        // Check that navigation is active
        const button = page.getByRole('button', { name: new RegExp(section) });
        const classList = await button.getAttribute('class');
        expect(classList).toContain('bg-slate-800');
      }
    });
  });
});
