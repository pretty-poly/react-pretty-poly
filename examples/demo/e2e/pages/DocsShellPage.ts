import { expect, type FrameLocator, type Locator, type Page } from '@playwright/test';

export class DocsShellPage {
  readonly page: Page;
  readonly shell: Locator;
  readonly nav: Locator;
  readonly demoFrameElement: Locator;
  readonly demoFrame: FrameLocator;
  readonly docsPanel: Locator;
  readonly detailsTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shell = page.locator('[data-testid="docs-shell"]');
    this.nav = page.locator('[data-testid="docs-nav"]').first();
    this.demoFrameElement = page.locator('[data-testid="demo-frame"]');
    this.demoFrame = page.frameLocator('[data-testid="demo-frame"]');
    this.docsPanel = page.locator('[data-testid="example-docs-panel"]').first();
    this.detailsTitle = page.locator('[data-testid="example-details-title"]');
  }

  async goto(path = '/') {
    await this.page.goto(path);
    await this.waitForShell();
  }

  async waitForShell() {
    await expect(this.shell).toBeVisible();
    await expect(this.nav).toBeVisible();
    await expect(this.demoFrameElement).toBeVisible();
    await expect(this.docsPanel).toBeVisible();
  }

  navItem(exampleId: string) {
    return this.page.locator(`[data-testid="docs-nav-item"][data-example-id="${exampleId}"]`).first();
  }

  async selectExample(exampleId: string) {
    await this.navItem(exampleId).click();
    await this.page.waitForURL(new RegExp(`/examples/${exampleId}$`));
    await this.waitForShell();
  }

  async waitForEmbeddedGrid() {
    await this.demoFrame.locator('[data-grid-id]').first().waitFor({ state: 'visible' });
  }
}
