import { test, expect } from '@playwright/test';
import Login from '../Pages/LoginPage';
import Product from '../Pages/Product';
import BasePage from '../Pages/Base';


// test('register', async ({ page }) => {
//   const login = await new Login(page);
//   await login.login();
//   await expect(page).toHaveTitle(/Automation Exercise/);
//   await expect(page.getByRole('heading', { name: 'ENTER ACCOUNT INFORMATION' })).toBeVisible();
//   await login.register();
//   await expect(page.getByRole('heading', { name: 'ACCOUNT CREATED!' })).toBeVisible();
//   await login.continue_page();
//   await login.delete();
//   await expect(page.getByRole('heading', { name: 'ACCOUNT DELETED!' })).toBeVisible();
//   await login.continue_page();
// })

// test('Search Product', async ({ page }) => {
//   const productpage = await new Product(page);
//   await productpage.clickProduct();
//   await expect(page.getByRole('heading', { name: 'ALL PRODUCTS' })).toBeVisible();
//   await productpage.searchProduct('polo');
//   await expect(page.getByRole('link', { name: 'POLO' })).toBeVisible();
// });

// need refactor
test('checkout', async ({ page }) => {
  const login = await new Product(page);
  await login.login();
  await expect(page).toHaveTitle(/Automation Exercise/);
  await login.register();
  await expect(page.getByRole('heading', { name: 'ACCOUNT CREATED!' })).toBeVisible();
  await login.continue_page();
  await login.clickProduct();
  await login.arrowDown();
  await login.purchase();
  await expect(page.getByText('Congratulations! Your order')).toBeVisible();
  await login.continue_page();
  await login.delete();
  await login.continue_page();
});


// need refactor
test('Scrolling', async ({ page }) => {
  
  const productpage = await new BasePage(page);
  await productpage.open();

  await page.locator('.grippy-host').click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('heading', { name: 'Full-Fledged practice website' }).click();
});