const BasePage = require('./basePage');

class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.zipInput = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.confirmationMessage = '.complete-header';
    }

    async fillCheckoutInfo(firstName, lastName, zip) {
        await this.fill(this.firstNameInput, firstName);
        await this.fill(this.lastNameInput, lastName);
        await this.fill(this.zipInput, zip);
    }

    async continueToPurchase() {
        await this.click(this.continueButton);
    }

    async finishPurchase() {
        await this.click(this.finishButton);
    }

    async getConfirmationMessage() {
        return await this.getText(this.confirmationMessage);
    }
}

module.exports = CheckoutPage;