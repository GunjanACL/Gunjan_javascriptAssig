const { test, expect } = require('@playwright/test');

test('Cart Test', async ({ page }) => {

    console.log(`Cart Test - Worker ${test.info().workerIndex}`);

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('button:has-text("Add to cart")');

    await page.click('.shopping_cart_link');

    await expect(page.locator('.cart_item')).toHaveCount(1);

});