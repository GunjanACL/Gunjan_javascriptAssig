const { test, expect } = require('@playwright/test');

test('Checkout Test', async ({ page }) => {

    console.log(`Checkout Test - Worker ${test.info().workerIndex}`);

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('button:has-text("Add to cart")');

    await page.click('.shopping_cart_link');

    await page.click('#checkout');

    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '411001');

    await page.click('#continue');

    await expect(page).toHaveURL(/checkout-step-two/);

});