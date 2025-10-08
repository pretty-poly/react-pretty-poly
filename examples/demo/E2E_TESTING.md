# E2E Testing with Playwright

This demo application has comprehensive end-to-end tests powered by Playwright.

## 🚀 Quick Start

```bash
# Run all tests
npm run test:e2e

# Run with interactive UI (recommended for development)
npm run test:e2e:ui

# Run in headed mode (see browser)
npm run test:e2e:headed

# Debug tests step-by-step
npm run test:e2e:debug
```

## 📋 Test Suite Overview

### Test Files

- **`example-selector.spec.ts`** - Navigation, URL routing, browser history
- **`email-client.spec.ts`** - Email client layout, resize, interactions
- **`ide-layout.spec.ts`** - IDE layout with file tree, editor, terminal, properties
- **`basic-dashboard.spec.ts`** - Dashboard navigation, KPIs, dynamic content
- **`responsive.spec.ts`** - Responsive behavior across viewports

### Test Coverage (111 tests)

- ✅ Layout rendering and structure
- ✅ Grid resize operations with dividers
- ✅ Size constraints (min/max)
- ✅ User interactions (clicks, navigation)
- ✅ Dynamic content updates
- ✅ Responsive behavior (desktop, tablet, mobile)
- ✅ Cross-browser compatibility
- ✅ URL routing and browser history

## 🎯 Running Specific Tests

```bash
# Test specific browser
npm run test:e2e:chromium
npm run test:e2e:firefox
npm run test:e2e:webkit

# Test specific file
npm run test:e2e -- email-client.spec.ts

# Test specific example
npm run test:e2e -- -g "Email Client"

# Test responsive behavior
npm run test:e2e -- --project=tablet
npm run test:e2e -- --project=mobile
```

## 📊 View Test Reports

```bash
# View HTML report after test run
npm run test:e2e:report
```

## 🔧 Configuration

Test configuration is in `playwright.config.ts`:

- **Projects**: chromium, firefox, webkit (desktop), tablet, mobile
- **Base URL**: http://localhost:5173
- **Auto-start**: Dev server starts automatically
- **Artifacts**: Screenshots/videos on failure
- **CI Ready**: GitHub Actions compatible

## 🤖 CI/CD

Tests run automatically on GitHub Actions:

- Triggered on push/PR to `main` and `develop`
- Parallel execution across browsers
- Automatic artifact uploads (screenshots, videos, reports)
- Responsive viewport testing

See `.github/workflows/e2e.yml` for CI configuration.

## 📝 Writing New Tests

### Page Object Model Example

```typescript
// e2e/pages/MyPage.ts
import { Page, Locator } from '@playwright/test';

export class MyPage {
  readonly page: Page;
  readonly myButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myButton = page.getByRole('button', { name: 'Click Me' });
  }

  async goto() {
    await this.page.goto('/?example=my-example');
  }
}
```

### Helper Functions

The `e2e/helpers/grid-helpers.ts` provides utilities for grid testing:

```typescript
import { getBlock, getAllDividers, dragDivider, getBlockSize } from './helpers/grid-helpers';

// Get a specific block
const sidebar = await getBlock(page, 'sidebar');

// Get all dividers
const dividers = await getAllDividers(page);

// Drag a divider
await dragDivider(dividers.first(), 50, 0); // drag right 50px

// Check block size
const size = await getBlockSize(sidebar);
expect(size.width).toBeGreaterThan(200);
```

## 🐛 Debugging Tips

1. **Use UI Mode** for interactive debugging:
   ```bash
   npm run test:e2e:ui
   ```

2. **Use Debug Mode** to step through tests:
   ```bash
   npm run test:e2e:debug
   ```

3. **Run in Headed Mode** to see what's happening:
   ```bash
   npm run test:e2e:headed
   ```

4. **Check screenshots** in `test-results/` folder after failures

5. **Use trace viewer** for failed tests:
   ```bash
   npx playwright show-trace test-results/[test-name]/trace.zip
   ```

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [Pretty Poly Library](https://github.com/your-org/pretty-poly)
- [Test Writing Best Practices](https://playwright.dev/docs/best-practices)
