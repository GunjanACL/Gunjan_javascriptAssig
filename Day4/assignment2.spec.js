const { test, expect } = require('@playwright/test');

test('Google page title test', async ({ page }) => {

  // Open web page :Google
  await page.goto('https://www.google.com');

  // Verify page title: Google
  await expect(page).toHaveTitle(/Google/);

});