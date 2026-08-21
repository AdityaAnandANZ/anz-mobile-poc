const { test } =
    require('@playwright/test');

const LoginPage =
    require('../pages/LoginPage');

const HomePage =
    require('../pages/HomePage');

const TransferFundsPage =
    require('../pages/TransferFundsPage');

const { testData } =
    require('../utils/TestData');

test.describe(
    'Transfer Funds Across All Devices',
    () => {

    test(
      'Verify fund transfer',
      async ({ page }) => {

        const loginPage =
            new LoginPage(page);

        const homePage =
            new HomePage(page);

        const transferFundsPage =
            new TransferFundsPage(page);

        await loginPage.navigate();

        await loginPage.login(
            testData.username,
            testData.password
        );

        await homePage.clickTransferFunds();

        await transferFundsPage.transferFunds(
            testData.transferAmount
        );

        await transferFundsPage
            .validateTransfer();
    });
});