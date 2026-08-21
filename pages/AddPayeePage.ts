import { expect, type Locator, type Page } from '@playwright/test';

interface PayeeData {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  accountNumber: string;
  amount: string;
}

export default class AddPayeePage {
  readonly page: Page;
  readonly billPayLink: Locator;
  readonly payeeName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phoneNumber: Locator;
  readonly accountNumber: Locator;
  readonly verifyAccount: Locator;
  readonly amount: Locator;
  readonly sendPaymentButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.billPayLink = page.getByRole('link', { name: 'Bill Pay' });
    this.payeeName = page.locator('[name="payee.name"]');
    this.address = page.locator('[name="payee.address.street"]');
    this.city = page.locator('[name="payee.address.city"]');
    this.state = page.locator('[name="payee.address.state"]');
    this.zipCode = page.locator('[name="payee.address.zipCode"]');
    this.phoneNumber = page.locator('[name="payee.phoneNumber"]');
    this.accountNumber = page.locator('[name="payee.accountNumber"]');
    this.verifyAccount = page.locator('[name="verifyAccount"]');
    this.amount = page.locator('[name="amount"]');
    this.sendPaymentButton = page.locator('input[value="Send Payment"]');
    this.successMessage = page.getByText('Bill Payment Complete');
  }

  async openBillPay(): Promise<void> {
    await this.billPayLink.click();
  }

  async addPayee(payee: PayeeData): Promise<void> {
    await this.payeeName.fill(payee.name);
    await this.address.fill(payee.address);
    await this.city.fill(payee.city);
    await this.state.fill(payee.state);
    await this.zipCode.fill(payee.zipCode);
    await this.phoneNumber.fill(payee.phone);
    await this.accountNumber.fill(payee.accountNumber);
    await this.verifyAccount.fill(payee.accountNumber);
    await this.amount.fill(payee.amount);
  }

  async submit(): Promise<void> {
    await this.sendPaymentButton.click();
  }

  async verifySuccess(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
  }

  async verifyMobileVisibility(): Promise<void> {
    await expect(this.successMessage).toBeInViewport();
  }
}