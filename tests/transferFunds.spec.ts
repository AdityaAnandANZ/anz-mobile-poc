import { test } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import TransferFundsPage from '../pages/TransferFundsPage';
import testData from '../utils/TestData';

test.describe('Transfer Funds Across All Devices', () => {
  test('Verify fund transfer', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const transferFundsPage = new TransferFundsPage(page);

    await loginPage.navigate();
    await loginPage.login(testData.username, testData.password);
    await homePage.clickTransferFunds();
    await transferFundsPage.transferFunds(testData.transferAmount);
    await transferFundsPage.validateTransfer();
  });
});