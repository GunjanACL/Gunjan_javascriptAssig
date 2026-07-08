const { test, expect } = require('@playwright/test');

// Maximize browser window
test.use({
  viewport: null,
});

test('Checkout - End to End Scenario', async ({ page }) => {

// test('End-to-End Checkout Flow', async ({ page }) => {

  // Open application
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(5000);

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.waitForTimeout(2000);
  await page.fill('#password', 'secret_sauce');
  await page.waitForTimeout(2000);
  await page.click('#login-button');
  await page.waitForTimeout(2000);

  // Verify inventory page
  await expect(page).toHaveURL(/inventory/);
  await page.waitForTimeout(2000);

  // Add first product to cart
  const firstProduct = page.locator('.inventory_item').first();
  const productName = await firstProduct.locator('.inventory_item_name').textContent();
  await page.waitForTimeout(2000);

  await firstProduct.locator('button').click();

  // Verify cart badge
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.waitForTimeout(2000);

  // Open cart
  await page.click('.shopping_cart_link');
  await page.waitForTimeout(2000);

  // Verify selected product is in cart
  await expect(page.locator('.inventory_item_name')).toHaveText(productName);
  await page.waitForTimeout(2000);

  // Proceed to checkout
  await page.click('#checkout');
  await page.waitForTimeout(2000);

  // Fill checkout information
  await page.fill('#first-name', 'Alice');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '00000');
  await page.waitForTimeout(2000);

  // Continue
  await page.click('#continue');
  await page.waitForTimeout(2000);

  // Verify checkout overview page
  await expect(page).toHaveURL(/checkout-step-two.html/);

  // Finish order
  await page.click('#finish');

  // Validate success page
  await expect(page).toHaveURL(/checkout-complete.html/);

  // Validate success message
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

  // Validate confirmation text
  await expect(page.locator('.complete-text'))
    .toContainText('Your order has been dispatched');

  console.log('Checkout completed successfully.');
 });