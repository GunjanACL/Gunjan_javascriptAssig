class InventoryPage {

    constructor(page) {

        this.page = page;

        this.firstProduct = page.locator('.inventory_item').first();

        this.addToCart = page.locator('button:has-text("Add to cart")').first();

        this.cart = page.locator('.shopping_cart_link');
    }

    async addFirstItemToCart() {

        await this.addToCart.click();
    }

    async openCart() {

        await this.cart.click();
    }

}

module.exports = InventoryPage;