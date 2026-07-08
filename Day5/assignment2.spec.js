const { test, expect } = require('@playwright/test');

test('Shopping cart flow - Sort products and verify cart', async ({ page }) => {

  // Navigate to Swag Labs
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(3000);


  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify inventory page
  await expect(page).toHaveURL(/inventory/);
  await page.waitForTimeout(3000);


  // Sort by Price (Low to High)
  await page.selectOption('.product_sort_container', 'lohi');
  await page.waitForTimeout(2000);

  // Sort by Name (A to Z)
  await page.selectOption('.product_sort_container', 'az');
  await page.waitForTimeout(2000);

  // Add first two products
  const productNames = await page.locator('.inventory_item_name').allTextContents();

  await page.locator('.inventory_item').nth(0).locator('button').click();
  await page.locator('.inventory_item').nth(1).locator('button').click();

  // Verify cart badge shows 2 items
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  // Open cart
  await page.click('.shopping_cart_link');
  await page.waitForTimeout(2000);

  // Verify 2 items are present
  const cartItems = page.locator('.cart_item');
  await expect(cartItems).toHaveCount(2);
   await page.waitForTimeout(2000);

   // Verify correct products are in the cart
  await expect(page.locator('.inventory_item_name').nth(0))
    .toHaveText(productNames[0]);
     await page.waitForTimeout(2000);

  await expect(page.locator('.inventory_item_name').nth(1))
    .toHaveText(productNames[1]);
     await page.waitForTimeout(2000);

});