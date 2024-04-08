// import { test, expect } from '@playwright/test';

// // test('has title', async ({ page }) => {
// //   await page.goto('http://automationexercise.com');

// //   // Expect a title "to contain" a substring.
// //   await expect(page).toHaveTitle(/Automation Exercise/);
// // });

// // test('register', async ({ page }) => {
// //   await page.goto('https://automationexercise.com/');
// //   await page.getByRole('link', { name: 'Signup / Login' }).click();
// //   await page.getByPlaceholder('Name').click();
// //   await page.getByPlaceholder('Name').fill('Qrist');
// //   await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
// //   await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('qristine12345@yopmail.com');
// //   await page.getByRole('button', { name: 'Signup' }).click();
// //   await page.getByLabel('Mrs.').check();
// //   await page.getByLabel('Password *').click();
// //   await page.getByLabel('Password *').fill('Test1234');
// //   await page.locator('#days').selectOption('16');
// //   await page.locator('#months').selectOption('3');
// //   await page.locator('#years').selectOption('1994');
// //   await page.getByLabel('Sign up for our newsletter!').check();
// //   await page.getByLabel('Receive special offers from').check();
// //   await page.getByLabel('First name *').click();
// //   await page.getByLabel('First name *').fill('Qrist');
// //   await page.getByLabel('Last name *').click();
// //   await page.getByLabel('Last name *').fill('Harutyunyan');
// //   await page.getByLabel('Company', { exact: true }).click();
// //   await page.getByLabel('Company', { exact: true }).fill('Zealous');
// //   await page.getByLabel('Address * (Street address, P.').click();
// //   await page.getByLabel('Address * (Street address, P.').fill('Streeet 1/4');
// //   await page.getByLabel('Address 2').click();
// //   await page.getByLabel('Address 2').fill('Street 2');
// //   await page.getByLabel('Country *').selectOption('United States');
// //   await page.getByLabel('State *').click();
// //   await page.getByLabel('State *').fill('NY');
// //   await page.getByLabel('City *').click();
// //   await page.getByLabel('City *').fill('NY');
// //   await page.locator('#zipcode').click();
// //   await page.locator('#zipcode').fill('12345');
// //   await page.getByLabel('Mobile Number *').click();
// //   await page.getByLabel('Mobile Number *').fill('55555555555555555555');
// //   await page.getByRole('button', { name: 'Create Account' }).click();
// //   await page.getByRole('link', { name: 'Continue' }).click();
// //   await page.getByRole('link', { name: 'Delete Account' }).click();
// //   await page.getByRole('link', { name: 'Continue' }).click();
// // });


// // test('Search Product', async ({ page }) => {
// //  await page.goto('https://automationexercise.com/');
// //  await page.getByRole('link', { name: 'Products' }).click();
// //  await page.getByPlaceholder('Search Product').click();
// //  await page.getByPlaceholder('Search Product').fill('polo');
// //  await page.getByRole('button', { name: '' }).click();
// //  await page.getByRole('link', { name: '(6) Polo' }).click();
// // });

// // test('Scrolling', async ({ page }) => {
// //   await page.goto('https://automationexercise.com/');
// //   await page.locator('.grippy-host').click();
// //   await page.getByRole('link', { name: '' }).click();
// //   await page.getByRole('heading', { name: 'Full-Fledged practice website' }).click();
// // });


// test('card', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: 'Signup / Login' }).click();
//   await page.getByPlaceholder('Name').click();
//   await page.getByPlaceholder('Name').fill('Qrist');
//   await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('qristine12345@yopmail.com');
//   await page.getByRole('button', { name: 'Signup' }).click();
//   await page.getByLabel('Mrs.').check();
//   await page.getByLabel('Password *').click();
//   await page.getByLabel('Password *').fill('Test1234');
//   await page.locator('#days').selectOption('16');
//   await page.locator('#months').selectOption('3');
//   await page.locator('#years').selectOption('2010');
//   await page.getByLabel('First name *').click();
//   await page.getByLabel('First name *').fill('Qrist');
//   await page.getByLabel('Last name *').click();
//   await page.getByLabel('Last name *').fill('Har');
//   await page.getByLabel('Address * (Street address, P.').click();
//   await page.getByLabel('Address * (Street address, P.').fill('Street');
//   await page.getByLabel('State *').click();
//   await page.getByLabel('State *').fill('ny');
//   await page.getByLabel('City *').click();
//   await page.getByLabel('City *').fill('ny');
//   await page.locator('#zipcode').click();
//   await page.locator('#zipcode').fill('12345');
//   await page.getByLabel('Mobile Number *').click();
//   await page.getByLabel('Mobile Number *').fill('5555555555');
//   await page.getByRole('button', { name: 'Create Account' }).click();
//   await page.getByRole('link', { name: 'Continue' }).click();
//   await page.getByRole('link', { name: 'Products' }).click();
//   await page.locator('body').press('ArrowDown');

//   await page.getByText('Add to cart').first().click();
//   await page.getByRole('link', { name: 'View Cart' }).click();
//   await page.getByText('Proceed To Checkout').click();
//   await page.getByText('Home Checkout').click();
//   await page.getByRole('link', { name: 'Place Order' }).click();
//   await page.locator('input[name="name_on_card"]').click();
//   await page.locator('input[name="name_on_card"]').fill('Qrist Har');
//   await page.locator('input[name="card_number"]').click();
//   await page.locator('input[name="card_number"]').fill('4111111111111111');
//   await page.getByPlaceholder('ex.').click();
//   await page.getByPlaceholder('ex.').fill('123');
//   await page.getByPlaceholder('MM').click();
//   await page.getByPlaceholder('MM').fill('10');
//   await page.getByPlaceholder('YYYY').click();
//   await page.getByPlaceholder('YYYY').fill('2030');
//   await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
//   await page.getByRole('link', { name: 'Continue' }).click();
//   await page.getByRole('link', { name: 'Delete Account' }).click();
//   await page.getByRole('link', { name: 'Continue' }).click();
// });

// // test('get started link', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Click the get started link.
// //   await page.getByRole('link', { name: 'Get started' }).click();

// //   // Expects page to have a heading with the name of Installation.
// //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// // });
