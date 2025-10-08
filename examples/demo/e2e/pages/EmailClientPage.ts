import { Page, Locator } from '@playwright/test';
import { getBlock, getDivider, waitForGridReady } from '../helpers/grid-helpers';

/**
 * Page Object Model for the Email Client example
 */
export class EmailClientPage {
  readonly page: Page;

  // Folder navigation
  readonly composeButton: Locator;
  readonly inboxFolder: Locator;
  readonly sentFolder: Locator;
  readonly starredFolder: Locator;
  readonly archiveFolder: Locator;
  readonly trashFolder: Locator;

  // Email list
  readonly searchInput: Locator;
  readonly emailListItems: Locator;

  // Email preview
  readonly emailSubject: Locator;
  readonly emailFrom: Locator;
  readonly emailBody: Locator;
  readonly replyButton: Locator;
  readonly forwardButton: Locator;
  readonly archiveButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Folder navigation elements
    this.composeButton = page.getByRole('button', { name: 'Compose' });
    this.inboxFolder = page.getByRole('button', { name: /Inbox/ });
    this.sentFolder = page.getByRole('button', { name: /Sent/ });
    this.starredFolder = page.getByRole('button', { name: /Starred/ });
    this.archiveFolder = page.getByRole('button', { name: /Archive/ });
    this.trashFolder = page.getByRole('button', { name: /Trash/ });

    // Email list elements
    this.searchInput = page.getByPlaceholder('Search emails...');
    this.emailListItems = page.locator('[data-block-id="email-list"] button');

    // Email preview elements
    this.emailSubject = page.locator('[data-block-id="email-preview"] h2');
    this.emailFrom = page.locator('[data-block-id="email-preview"] .font-medium.text-slate-900').first();
    this.emailBody = page.locator('[data-block-id="email-preview"] .whitespace-pre-line');
    this.replyButton = page.getByRole('button', { name: 'Reply' });
    this.forwardButton = page.getByRole('button', { name: 'Forward' });
    this.archiveButton = page.locator('button').filter({ has: page.locator('svg').first() }).nth(2);
    this.deleteButton = page.locator('button').filter({ has: page.locator('svg').first() }).nth(3);
  }

  async goto() {
    await this.page.goto('/?example=email-client');
    await waitForGridReady(this.page);
  }

  async selectFolder(folder: 'Inbox' | 'Sent' | 'Starred' | 'Archive' | 'Trash') {
    const folderMap = {
      'Inbox': this.inboxFolder,
      'Sent': this.sentFolder,
      'Starred': this.starredFolder,
      'Archive': this.archiveFolder,
      'Trash': this.trashFolder,
    };

    await folderMap[folder].click();
    await this.page.waitForTimeout(100); // Wait for state update
  }

  async selectEmail(index: number) {
    await this.emailListItems.nth(index).click();
    await this.page.waitForTimeout(100); // Wait for state update
  }

  async getFoldersBlock() {
    return getBlock(this.page, 'folders');
  }

  async getEmailListBlock() {
    return getBlock(this.page, 'email-list');
  }

  async getEmailPreviewBlock() {
    return getBlock(this.page, 'email-preview');
  }

  async getDividerBetweenFoldersAndList() {
    // This divider ID might vary based on implementation
    // Adjust based on actual data-divider-id values
    return getDivider(this.page, 'folders-email-list');
  }

  async getDividerBetweenListAndPreview() {
    return getDivider(this.page, 'email-list-email-preview');
  }

  async getEmailCount(): Promise<number> {
    return await this.emailListItems.count();
  }

  async getSelectedEmailSubject(): Promise<string> {
    return await this.emailSubject.textContent() || '';
  }

  async getSelectedEmailFrom(): Promise<string> {
    return await this.emailFrom.textContent() || '';
  }
}
