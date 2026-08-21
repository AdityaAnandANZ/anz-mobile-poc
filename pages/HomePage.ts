import type { Locator, Page } from '@playwright/test';

export default class HomePage {
  readonly page: Page;
  readonly transferFundsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.transferFundsLink = page.getByText('Transfer Funds');
  }

  async clickTransferFunds(): Promise<void> {
    await this.transferFundsLink.click();
  }
}