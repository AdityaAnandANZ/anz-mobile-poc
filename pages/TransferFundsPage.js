const { expect } = require('@playwright/test');

class TransferFundsPage {

    constructor(page) {

        this.page = page;

        this.amount =
            page.locator('#amount');

        this.transferButton =
            page.locator('input[value="Transfer"]');

        this.successMessage =
            page.locator('#showResult');
    }

    async transferFunds(amount) {

        await this.amount.fill(amount);

        await this.transferButton.click();
    }

    async validateTransfer() {

        await expect(this.successMessage)
            .toContainText('Transfer Complete');
    }
}

module.exports = TransferFundsPage;