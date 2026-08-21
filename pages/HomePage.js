class HomePage {

    constructor(page) {

        this.page = page;

        this.transferFundsLink =
            page.getByText('Transfer Funds');
    }

    async clickTransferFunds() {

        await this.transferFundsLink.click();
    }
}

module.exports = HomePage;