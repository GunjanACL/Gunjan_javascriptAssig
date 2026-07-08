const { test, expect } = require('@playwright/test');

test('Verify Swag Labs inventory page', async ({ page }) => {

  // Open application
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(5000);

  // Verify page title
  await expect(page).toHaveTitle('Swag Labs');

  // Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Verify logo is visible
  await expect(page.locator('.app_logo')).toBeVisible();
  await page.waitForTimeout(5000);

  // Verify inventory page is visible
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_container')).toBeVisible();
  await page.waitForTimeout(5000);

  // Verify at least 6 products are loaded
  const products = page.locator('.inventory_item');
  await expect(products).toHaveCount(6);
  await page.waitForTimeout(5000);

});