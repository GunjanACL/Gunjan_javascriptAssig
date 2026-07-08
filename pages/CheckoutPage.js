class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.checkoutBtn = page.locator('#checkout');

        this.firstName = page.locator('#first-name');

        this.lastName = page.locator('#last-name');

        this.zip = page.locator('#postal-code');

        this.continueBtn = page.locator('#continue');

        this.finishBtn = page.locator('#finish');

        this.success = page.locator('.complete-header');

    }

    async checkout(data) {

        await this.checkoutBtn.click();

        await this.firstName.fill(data.firstName);

        await this.lastName.fill(data.lastName);

        await this.zip.fill(data.postalCode);

        await this.continueBtn.click();

        await this.finishBtn.click();
    }

}

module.exports = CheckoutPage;