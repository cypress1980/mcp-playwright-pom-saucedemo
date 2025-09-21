const BasePage = require('./basePage');

class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.checkoutButton = '#checkout';
    }

    async proceedToCheckout() {
        await this.click(this.checkoutButton);
    }
}

module.exports = CartPage;