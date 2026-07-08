const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const users = require('../test-data/users.json');

test('User Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.open();

    await login.login(
        users.username,
        users.password
    );

    await expect(page).toHaveURL(/inventory/);

});