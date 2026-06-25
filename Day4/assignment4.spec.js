const { test, expect } = require('@playwright/test');

test('Valid login - verify inventory page', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(5000);

  // Login with valid credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.waitForTimeout(5000);
  await page.click('#login-button');

  // Verify inventory page
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  console.log("Valid login successful - Inventory page loaded");
 });


test('Invalid login - verify error message', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // Invalid credentials
  await page.fill('#user-name', 'user1');
  await page.fill('#password', '12345');
  await page.click('#login-button');

  // Verify error message
  const errorMsg = page.locator('[data-test="error"]');

  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toContainText('Username and password do not match');

  console.log("Invalid login error displayed correctly");
});