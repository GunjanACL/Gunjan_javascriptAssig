const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const users = require('../test-data/users.json');

exports.test = base.test.extend({

    loggedInPage: async ({ page }, use) => {

        const login = new LoginPage(page);

        await login.open();

        await login.login(
            users.username,
            users.password
        );

        await use(page);

    }

});

exports.expect = base.expect;