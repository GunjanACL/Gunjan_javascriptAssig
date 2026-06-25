const { test, expect } = require('@playwright/test');

test('Locate elements and print placeholder text', async ({ page }) => {

  // Open site
  await page.goto('https://www.saucedemo.com/');
   await page.waitForTimeout(5000);

  // Locate elements
  const username = page.locator('#user-name');
  const password = page.locator('#password');
  const loginBtn = page.locator('#login-button');

  // Get placeholder text
  const usernamePlaceholder = await username.getAttribute('placeholder');
  const passwordPlaceholder = await password.getAttribute('placeholder');

  // Print values
  console.log("Username placeholder:", usernamePlaceholder);
  console.log("Password placeholder:", passwordPlaceholder);

  // Verify elements are visible
  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await expect(loginBtn).toBeVisible();
});