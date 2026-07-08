const { test, expect } = require('../fixtures/loginFixture');

const InventoryPage = require('../pages/InventoryPage');

const CheckoutPage = require('../pages/CheckoutPage');

const checkout = require('../test-data/checkout.json');

test('Checkout Product', async ({ loggedInPage }) => {

    const inventory = new InventoryPage(loggedInPage);

    const checkoutPage = new CheckoutPage(loggedInPage);

    await inventory.addFirstItemToCart();

    await inventory.openCart();

    await checkoutPage.checkout(checkout);

    await expect(checkoutPage.success).toContainText(
        'Thank you for your order!'
    );

});