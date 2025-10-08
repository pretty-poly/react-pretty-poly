import { test, expect } from '@playwright/test';
import { EmailClientPage } from './pages/EmailClientPage';
import { getBlockSize, dragDivider, expectBlockSize, getAllDividers } from './helpers/grid-helpers';

test.describe('Email Client Example', () => {
  let emailPage: EmailClientPage;

  test.beforeEach(async ({ page }) => {
    emailPage = new EmailClientPage(page);
    await emailPage.goto();
  });

  test.describe('Layout and Structure', () => {
    test('displays all three panes', async ({ page }) => {
      const foldersBlock = await emailPage.getFoldersBlock();
      const emailListBlock = await emailPage.getEmailListBlock();
      const previewBlock = await emailPage.getEmailPreviewBlock();

      await expect(foldersBlock).toBeVisible();
      await expect(emailListBlock).toBeVisible();
      await expect(previewBlock).toBeVisible();
    });

    test('folders pane has correct initial size', async ({ page }) => {
      const foldersBlock = await emailPage.getFoldersBlock();
      const size = await getBlockSize(foldersBlock);

      // Default size is 200px
      expect(size.width).toBeGreaterThanOrEqual(195);
      expect(size.width).toBeLessThanOrEqual(205);
    });

    test('email list pane has correct initial size', async ({ page }) => {
      const emailListBlock = await emailPage.getEmailListBlock();
      const size = await getBlockSize(emailListBlock);

      // Default size is 350px
      expect(size.width).toBeGreaterThanOrEqual(345);
      expect(size.width).toBeLessThanOrEqual(355);
    });
  });

  test.describe('Folder Navigation', () => {
    test('displays all folder options', async ({ page }) => {
      await expect(emailPage.inboxFolder).toBeVisible();
      await expect(emailPage.sentFolder).toBeVisible();
      await expect(emailPage.starredFolder).toBeVisible();
      await expect(emailPage.archiveFolder).toBeVisible();
      await expect(emailPage.trashFolder).toBeVisible();
    });

    test('inbox is selected by default', async ({ page }) => {
      // Check Inbox folder is active (has blue background)
      const classList = await emailPage.inboxFolder.getAttribute('class');
      expect(classList).toContain('bg-blue-50');
    });

    test('switches to Sent folder', async ({ page }) => {
      await emailPage.selectFolder('Sent');

      // Check Sent folder is now active
      const classList = await emailPage.sentFolder.getAttribute('class');
      expect(classList).toContain('bg-blue-50');

      // Check email list updated
      const count = await emailPage.getEmailCount();
      expect(count).toBeGreaterThan(0);
    });

    test('switches to Starred folder', async ({ page }) => {
      await emailPage.selectFolder('Starred');

      const classList = await emailPage.starredFolder.getAttribute('class');
      expect(classList).toContain('bg-blue-50');
    });

    test('shows folder counts', async ({ page }) => {
      // Inbox should show count
      const inboxText = await emailPage.inboxFolder.textContent();
      expect(inboxText).toMatch(/\d+/); // Contains a number
    });
  });

  test.describe('Email List', () => {
    test('displays emails in inbox', async ({ page }) => {
      const count = await emailPage.getEmailCount();
      expect(count).toBeGreaterThan(0);
    });

    test('displays search input', async ({ page }) => {
      await expect(emailPage.searchInput).toBeVisible();
      await expect(emailPage.searchInput).toHaveAttribute('placeholder', 'Search emails...');
    });

    test('selects an email', async ({ page }) => {
      await emailPage.selectEmail(0);

      // First email should have blue background/border
      const firstEmail = emailPage.emailListItems.first();
      const classList = await firstEmail.getAttribute('class');
      expect(classList).toContain('bg-blue-50');
    });

    test('shows email preview when selected', async ({ page }) => {
      await emailPage.selectEmail(0);

      // Email preview should update
      await expect(emailPage.emailSubject).toBeVisible();
      await expect(emailPage.emailFrom).toBeVisible();
      await expect(emailPage.emailBody).toBeVisible();
    });

    test('changes selected email', async ({ page }) => {
      // Select first email
      await emailPage.selectEmail(0);
      const firstSubject = await emailPage.getSelectedEmailSubject();

      // Select second email
      await emailPage.selectEmail(1);
      const secondSubject = await emailPage.getSelectedEmailSubject();

      // Subjects should be different
      expect(firstSubject).not.toBe(secondSubject);
    });
  });

  test.describe('Email Preview', () => {
    test.beforeEach(async ({ page }) => {
      // Select first email before each preview test
      await emailPage.selectEmail(0);
    });

    test('displays email subject', async ({ page }) => {
      const subject = await emailPage.getSelectedEmailSubject();
      expect(subject.length).toBeGreaterThan(0);
    });

    test('displays email sender', async ({ page }) => {
      const from = await emailPage.getSelectedEmailFrom();
      expect(from.length).toBeGreaterThan(0);
    });

    test('displays email body', async ({ page }) => {
      const bodyText = await emailPage.emailBody.textContent();
      expect(bodyText?.length || 0).toBeGreaterThan(0);
    });

    test('displays action buttons', async ({ page }) => {
      await expect(emailPage.replyButton).toBeVisible();
      await expect(emailPage.forwardButton).toBeVisible();
    });

    test('shows attachments for emails with attachments', async ({ page }) => {
      // First email in the data has attachments
      const hasAttachment = await page.locator('text=Q3-Budget-Report.pdf').isVisible();
      expect(hasAttachment).toBe(true);
    });
  });

  test.describe('Grid Resize Operations', () => {
    test('can resize folders pane', async ({ page }) => {
      const foldersBlock = await emailPage.getFoldersBlock();
      const initialSize = await getBlockSize(foldersBlock);

      // Find the divider (first vertical divider)
      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      // Drag divider to the right
      await dragDivider(firstDivider, 50, 0);

      // Wait for resize to complete
      await page.waitForTimeout(200);

      const newSize = await getBlockSize(foldersBlock);
      expect(newSize.width).toBeGreaterThan(initialSize.width);
    });

    test('can resize email list pane', async ({ page }) => {
      const emailListBlock = await emailPage.getEmailListBlock();
      const initialSize = await getBlockSize(emailListBlock);

      // Find the second divider
      const dividers = await getAllDividers(page);
      const secondDivider = dividers.nth(1);

      // Drag divider to the left
      await dragDivider(secondDivider, -50, 0);

      // Wait for resize to complete
      await page.waitForTimeout(200);

      const newSize = await getBlockSize(emailListBlock);
      expect(newSize.width).toBeLessThan(initialSize.width);
    });

    test('respects min size constraints', async ({ page }) => {
      const foldersBlock = await emailPage.getFoldersBlock();

      // Find first divider
      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      // Try to drag far to the left (should hit min constraint)
      await dragDivider(firstDivider, -200, 0);

      await page.waitForTimeout(200);

      const size = await getBlockSize(foldersBlock);
      // Min size is 180px
      expect(size.width).toBeGreaterThanOrEqual(180);
    });

    test('respects max size constraints', async ({ page }) => {
      const foldersBlock = await emailPage.getFoldersBlock();

      // Find first divider
      const dividers = await getAllDividers(page);
      const firstDivider = dividers.first();

      // Try to drag far to the right (should hit max constraint)
      await dragDivider(firstDivider, 300, 0);

      await page.waitForTimeout(200);

      const size = await getBlockSize(foldersBlock);
      // Max size is 300px
      expect(size.width).toBeLessThanOrEqual(300);
    });
  });

  test.describe('User Interactions', () => {
    test('compose button is visible and clickable', async ({ page }) => {
      await expect(emailPage.composeButton).toBeVisible();
      await expect(emailPage.composeButton).toBeEnabled();
    });

    test('can switch between multiple folders', async ({ page }) => {
      // Switch through multiple folders
      await emailPage.selectFolder('Sent');
      await page.waitForTimeout(100);

      await emailPage.selectFolder('Starred');
      await page.waitForTimeout(100);

      await emailPage.selectFolder('Inbox');
      await page.waitForTimeout(100);

      // Should still work correctly
      const count = await emailPage.getEmailCount();
      expect(count).toBeGreaterThan(0);
    });
  });
});
