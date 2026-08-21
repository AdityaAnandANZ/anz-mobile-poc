import { test } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import AddPayeePage from '../pages/AddPayeePage';
import env from '../config/env';

test('Payee add on mobile', async ({ page }) => {
 const loginPage = new LoginPage(page);
 const addPayeePage = new AddPayeePage(page);

 await loginPage.navigate();
 await loginPage.login(env.users.customer.username, env.users.customer.password);

 await addPayeePage.openBillPay();

 await addPayeePage.addPayee({
   name: 'Test Payee',
   address: 'Sydney Street',
   city: 'Sydney',
   state: 'NSW',
   zipCode: '2000',
   phone: '9999999999',
   accountNumber: '12345678',
   amount: '100'
 });

 await addPayeePage.submit();
 await addPayeePage.verifySuccess();
 await addPayeePage.verifyMobileVisibility();
});