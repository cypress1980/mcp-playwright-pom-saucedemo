const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/loginPage');
const InventoryPage = require('./pages/inventoryPage');
const CartPage = require('./pages/cartPage');
const CheckoutPage = require('./pages/checkoutPage');

test('Complete purchase flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Navigate to the website
    await loginPage.navigateTo('https://www.saucedemo.com/');

    // Login
    await loginPage.login('standard_user', 'secret_sauce');

    // Add Sauce Labs Backpack to cart
    await inventoryPage.addBackpackToCart();

    // Open cart and proceed to checkout
    await inventoryPage.openCart();
    await cartPage.proceedToCheckout();

    // Fill checkout information with random data
    const randomData = {
        firstName: `User${Math.floor(Math.random() * 1000)}`,
        lastName: `Test${Math.floor(Math.random() * 1000)}`,
        zip: `${Math.floor(Math.random() * 90000) + 10000}`
    };
    await checkoutPage.fillCheckoutInfo(randomData.firstName, randomData.lastName, randomData.zip);

    // Complete purchase
    await checkoutPage.continueToPurchase();
    await checkoutPage.finishPurchase();

    // Verify confirmation message
    const confirmationMessage = await checkoutPage.getConfirmationMessage();
    expect(confirmationMessage).toBe('Thank you for your order!');
});