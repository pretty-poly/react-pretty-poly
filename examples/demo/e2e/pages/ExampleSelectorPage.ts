import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the Example Selector page
 */
export class ExampleSelectorPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly basicDashboardCard: Locator;
  readonly ideLayoutCard: Locator;
  readonly emailClientCard: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'PrettyPoly Demo Examples' });
    this.basicDashboardCard = page.getByText('Basic Dashboard').locator('..');
    this.ideLayoutCard = page.getByText('IDE Layout').locator('..');
    this.emailClientCard = page.getByText('Email Client').locator('..');
    this.backButton = page.getByRole('button', { name: 'Back to Examples' });
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async selectExample(exampleName: 'Basic Dashboard' | 'IDE Layout' | 'Email Client') {
    const cardMap = {
      'Basic Dashboard': this.basicDashboardCard,
      'IDE Layout': this.ideLayoutCard,
      'Email Client': this.emailClientCard,
    };

    const card = cardMap[exampleName];
    await card.click();
    await this.page.waitForLoadState('networkidle');
  }

  async goBack() {
    await this.backButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async isOnSelectorPage(): Promise<boolean> {
    return await this.heading.isVisible();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
}
