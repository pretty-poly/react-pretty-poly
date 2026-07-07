import { test, expect } from '@playwright/test';
import { DocsShellPage } from './pages/DocsShellPage';
import { dragDivider, getBlockSize } from './helpers/grid-helpers';

test.describe('Demo Docs Shell', () => {
  let docsPage: DocsShellPage;

  test.beforeEach(async ({ page }) => {
    docsPage = new DocsShellPage(page);
  });

  test('redirects the root route to the default example docs shell', async ({ page }) => {
    await docsPage.goto('/');

    await expect(page).toHaveURL(/\/examples\/basic-dashboard$/);
    await expect(docsPage.detailsTitle).toHaveText('Basic Dashboard');
    await expect(docsPage.navItem('basic-dashboard')).toHaveAttribute('aria-current', 'page');
    await docsPage.waitForEmbeddedGrid();
  });

  test('displays navigation groups and core examples', async ({ page }) => {
    await docsPage.goto('/examples/basic-dashboard');

    await expect(page.getByRole('heading', { name: 'Normal App Patterns' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dense Context Tools' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Under Review' })).toBeVisible();
    await expect(docsPage.navItem('basic-dashboard')).toBeVisible();
    await expect(docsPage.navItem('email-client')).toBeVisible();
    await expect(docsPage.navItem('ide-layout')).toBeVisible();
    await expect(docsPage.navItem('view-registry-demo')).toBeVisible();
  });

  test('navigates between examples and updates iframe plus details', async ({ page }) => {
    await docsPage.goto('/examples/basic-dashboard');
    await docsPage.selectExample('email-client');

    await expect(page).toHaveURL(/\/examples\/email-client$/);
    await expect(docsPage.detailsTitle).toHaveText('Email Client');
    await expect(docsPage.docsPanel).toContainText('folder navigation');
    await expect(docsPage.docsPanel).toContainText('inbox-like workflow');
    await expect(docsPage.demoFrame.locator('[data-block-id="folders"]')).toBeVisible();
    await expect(docsPage.demoFrame.locator('[data-block-id="email-list"]')).toBeVisible();
  });

  test('keeps full-page launch in the notes panel instead of the demo pane', async ({ page }) => {
    await docsPage.goto('/examples/basic-dashboard');

    await expect(page.getByText('Open full page')).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'Open Basic Dashboard full page' })).toBeVisible();
  });

  test('shows raw source for the selected example', async ({ page }) => {
    await docsPage.goto('/examples/email-client');

    await page.getByRole('tab', { name: 'Source' }).click();

    await expect(page.locator('[data-testid="example-source"]')).toContainText('const emailLayout');
    await expect(page.locator('[data-testid="example-source"]')).toContainText('<Grid');
  });

  test('resizes docs shell dividers without the iframe stealing drag events', async ({ page }) => {
    await docsPage.goto('/examples/basic-dashboard');

    const navBlock = page.locator('[data-block-id="docs-nav"]');
    const navDivider = page.locator('[data-divider-id="docs-nav-end-divider"]');
    await expect(navDivider).toBeVisible();

    const initialSize = await getBlockSize(navBlock);
    await dragDivider(navDivider, 120, 0);

    const resizedSize = await getBlockSize(navBlock);
    expect(resizedSize.width).toBeGreaterThan(initialSize.width + 50);
  });

  test('supports browser back and forward between docs routes', async ({ page }) => {
    await docsPage.goto('/examples/basic-dashboard');
    await docsPage.selectExample('email-client');
    await docsPage.selectExample('ide-layout');

    await page.goBack();
    await expect(page).toHaveURL(/\/examples\/email-client$/);
    await expect(docsPage.detailsTitle).toHaveText('Email Client');

    await page.goForward();
    await expect(page).toHaveURL(/\/examples\/ide-layout$/);
    await expect(docsPage.detailsTitle).toHaveText('IDE Layout');
  });

  test('redirects invalid docs and embed routes to the default example', async ({ page }) => {
    await page.goto('/examples/not-real');
    await expect(page).toHaveURL(/\/examples\/basic-dashboard$/);
    await expect(docsPage.detailsTitle).toHaveText('Basic Dashboard');

    await page.goto('/embed/not-real');
    await expect(page).toHaveURL(/\/embed\/basic-dashboard$/);
    await expect(page.locator('[data-block-id="sidebar"]')).toBeVisible();
    await expect(page.locator('[data-testid="docs-shell"]')).not.toBeVisible();
  });

  test('renders embed routes without the docs shell', async ({ page }) => {
    await page.goto('/embed/email-client');

    await expect(page.locator('[data-testid="docs-shell"]')).not.toBeVisible();
    await expect(page.locator('[data-block-id="folders"]')).toBeVisible();
    await expect(page.locator('[data-block-id="email-preview"]')).toBeVisible();
  });
});
