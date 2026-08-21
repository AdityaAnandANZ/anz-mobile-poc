import { expect, type Locator, type Page } from '@playwright/test';

export default class TransferFundsPage {
  readonly page: Page;
  readonly amount: Locator;
  readonly transferButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.amount = page.locator('#amount');
    this.transferButton = page.locator('input[value="Transfer"]');
    this.successMessage = page.locator('#showResult');
  }

  async transferFunds(amount: string): Promise<void> {
    await this.amount.fill(amount);
    await this.transferButton.click();
  }

  async validateTransfer(): Promise<void> {
    await expect(this.successMessage).toContainText('Transfer Complete');
  }
}