import { test, expect } from '@playwright/test';
import { ExampleSelectorPage } from './pages/ExampleSelectorPage';

test.describe('Example Selector', () => {
  let selectorPage: ExampleSelectorPage;

  test.beforeEach(async ({ page }) => {
    selectorPage = new ExampleSelectorPage(page);
    await selectorPage.goto();
  });

  test('displays the example selector page', async ({ page }) => {
    await expect(selectorPage.heading).toBeVisible();
    await expect(selectorPage.heading).toHaveText('PrettyPoly Demo Examples');
  });

  test('displays all three example cards', async ({ page }) => {
    await expect(selectorPage.basicDashboardCard).toBeVisible();
    await expect(selectorPage.ideLayoutCard).toBeVisible();
    await expect(selectorPage.emailClientCard).toBeVisible();
  });

  test('navigates to Basic Dashboard example', async ({ page }) => {
    await selectorPage.selectExample('Basic Dashboard');

    // Check URL updated
    expect(await selectorPage.getCurrentUrl()).toContain('example=basic-dashboard');

    // Check selector is hidden and back button is visible
    await expect(selectorPage.heading).not.toBeVisible();
    await expect(selectorPage.backButton).toBeVisible();
  });

  test('navigates to IDE Layout example', async ({ page }) => {
    await selectorPage.selectExample('IDE Layout');

    // Check URL updated
    expect(await selectorPage.getCurrentUrl()).toContain('example=ide-layout');

    // Check back button is visible
    await expect(selectorPage.backButton).toBeVisible();
  });

  test('navigates to Email Client example', async ({ page }) => {
    await selectorPage.selectExample('Email Client');

    // Check URL updated
    expect(await selectorPage.getCurrentUrl()).toContain('example=email-client');

    // Check back button is visible
    await expect(selectorPage.backButton).toBeVisible();
  });

  test('navigates back to selector from example', async ({ page }) => {
    // Go to an example
    await selectorPage.selectExample('Email Client');
    await expect(selectorPage.heading).not.toBeVisible();

    // Click back button
    await selectorPage.goBack();

    // Should be back on selector page
    await expect(selectorPage.heading).toBeVisible();
    expect(await selectorPage.getCurrentUrl()).not.toContain('example=');
  });

  test('supports direct URL navigation to examples', async ({ page }) => {
    // Navigate directly via URL
    await page.goto('/?example=email-client');
    await page.waitForLoadState('networkidle');

    // Should show the example, not the selector
    await expect(selectorPage.heading).not.toBeVisible();
    await expect(selectorPage.backButton).toBeVisible();
  });

  test('handles browser back button', async ({ page }) => {
    // Navigate to example
    await selectorPage.selectExample('Basic Dashboard');
    await expect(selectorPage.heading).not.toBeVisible();

    // Use browser back
    await page.goBack();
    await page.waitForLoadState('networkidle');

    // Should be back on selector
    await expect(selectorPage.heading).toBeVisible();
  });

  test('handles browser forward button', async ({ page }) => {
    // Navigate to example and back
    await selectorPage.selectExample('IDE Layout');
    await page.goBack();
    await page.waitForLoadState('networkidle');

    // Use browser forward
    await page.goForward();
    await page.waitForLoadState('networkidle');

    // Should be on the example again
    expect(await selectorPage.getCurrentUrl()).toContain('example=ide-layout');
    await expect(selectorPage.backButton).toBeVisible();
  });

  test('maintains state across navigation', async ({ page }) => {
    // Visit multiple examples
    await selectorPage.selectExample('Email Client');
    await selectorPage.goBack();
    await selectorPage.selectExample('IDE Layout');
    await selectorPage.goBack();

    // Should still show selector correctly
    await expect(selectorPage.heading).toBeVisible();
    await expect(selectorPage.basicDashboardCard).toBeVisible();
    await expect(selectorPage.ideLayoutCard).toBeVisible();
    await expect(selectorPage.emailClientCard).toBeVisible();
  });
});
