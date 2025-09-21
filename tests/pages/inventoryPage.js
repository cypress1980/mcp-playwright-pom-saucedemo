const BasePage = require('./basePage');

class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.backpackAddToCartButton = '#add-to-cart-sauce-labs-backpack';
        this.cartButton = '.shopping_cart_link';
    }

    async addBackpackToCart() {
        await this.click(this.backpackAddToCartButton);
    }

    async openCart() {
        await this.click(this.cartButton);
    }
}

module.exports = InventoryPage;