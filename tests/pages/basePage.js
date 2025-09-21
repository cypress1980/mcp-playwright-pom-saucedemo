class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async fill(selector, value) {
        await this.page.fill(selector, value);
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }

    async isVisible(selector) {
        return await this.page.isVisible(selector);
    }
}

module.exports = BasePage;