const { expect } = require('@playwright/test');

class AddPayeePage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.billPayLink = page.getByRole('link', {
      name: 'Bill Pay'
    });

    // Payee Details
    this.payeeName = page.locator('[name="payee.name"]');

    this.address = page.locator(
      '[name="payee.address.street"]'
    );

    this.city = page.locator(
      '[name="payee.address.city"]'
    );

    this.state = page.locator(
      '[name="payee.address.state"]'
    );

    this.zipCode = page.locator(
      '[name="payee.address.zipCode"]'
    );

    this.phoneNumber = page.locator(
      '[name="payee.phoneNumber"]'
    );

    this.accountNumber = page.locator(
      '[name="payee.accountNumber"]'
    );

    this.verifyAccount = page.locator(
      '[name="verifyAccount"]'
    );

    this.amount = page.locator(
      '[name="amount"]'
    );

    this.sendPaymentButton = page.locator(
      'input[value="Send Payment"]'
    );

    this.successMessage = page.getByText(
      'Bill Payment Complete'
    );
  }

  async openBillPay() {
    await this.billPayLink.click();
  }

  async addPayee(payee) {
    await this.payeeName.fill(payee.name);

    await this.address.fill(payee.address);

    await this.city.fill(payee.city);

    await this.state.fill(payee.state);

    await this.zipCode.fill(payee.zipCode);

    await this.phoneNumber.fill(payee.phone);

    await this.accountNumber.fill(
      payee.accountNumber
    );

    await this.verifyAccount.fill(
      payee.accountNumber
    );

    await this.amount.fill(
      payee.amount
    );
  }

  async submit() {
    await this.sendPaymentButton.click();
  }

  async verifySuccess() {
    await expect(
      this.successMessage
    ).toBeVisible();
  }

  async verifyMobileVisibility() {
    await expect(
      this.successMessage
    ).toBeInViewport();
  }
}

module.exports = AddPayeePage;