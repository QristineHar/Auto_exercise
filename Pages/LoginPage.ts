import { Page, Locator } from "@playwright/test";
import BasePage from "./Base";

export default class Login extends BasePage {
  private loginButton: Locator;
  private userName: Locator;
  private mail: Locator;
  private signUp: Locator;
  private mrs: Locator;
  private password: Locator;
  private day: Locator;
  private months: Locator;
  private years: Locator;
  private newsletter: Locator;
  private offers: Locator;
  private firstName: Locator;
  private lastName: Locator;
  private company: Locator;
  private address: Locator;
  private address2: Locator;
  private country: Locator;
  private state: Locator;
  private city: Locator;
  private zipcode: Locator;
  private mobile: Locator;
  private createAccount: Locator;
  private continue: Locator;
  private deleteAccount: Locator;


  constructor(page: Page) {
    super(page); 
    this.loginButton = page.getByRole('link', { name: 'Signup / Login' });
    this.userName = page.getByPlaceholder('Name');
    this.mail = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signUp = page.getByRole('button', { name: 'Signup' });
    this.mrs = page.getByLabel('Mrs.');
    this.password = page.getByLabel('Password *');
    this.day = page.locator('#days');
    this.months = page.locator('#months');
    this.years = page.locator('#years');
    this.newsletter = page.getByLabel('Sign up for our newsletter!');
    this.offers = page.getByLabel('Receive special offers from');
    this.firstName = page.getByLabel('First name *');
    this.lastName = page.getByLabel('Last name *');
    this.company = page.getByLabel('Company', { exact: true });
    this.address = page.getByLabel('Address * (Street address, P.');
    this.address2 = page.getByLabel('Address 2');
    this.country = page.getByLabel('Country *');
    this.state = page.getByLabel('State *');
    this.city = page.getByLabel('City *');
    this.zipcode = page.locator('#zipcode');
    this.mobile = page.getByLabel('Mobile Number *');
    this.createAccount = page.getByRole('button', { name: 'Create Account' });
    this.continue = page.getByRole('link', { name: 'Continue' });
    this.deleteAccount = page.getByRole('link', { name: 'Delete Account' });
  }

  async login(){
    await this.open();
    await this.loginButton.click();
    await this.userName.fill("Qristine");
    await this.mail.fill("qristine12345@yopmail.com");
    await this.signUp.click();
    return await this.page;
  }

  async register(){

    await this.mrs.check();
    await this.password.click();
    await this.password.fill('Test1234');
    await this.day.selectOption('16');
    await this.months.selectOption('3');
    await this.years.selectOption('1994');
    await this.newsletter.check();
    await this.offers.check();
    await this.firstName.click();
    await this.firstName.fill('Qrist');
    await this.lastName.click();
    await this.lastName.fill('Harutyunyan');
    await this.company.click();
    await this.company.fill('Zealous');
    await this.address.click();
    await this.address.fill('Streeet 1/4');
    await this.address2.click();
    await this.address2.fill('Streeet 1/4');
    await this.country.selectOption('United States');
    await this.state.click();
    await this.state.fill('NY');
    await this.city.click();
    await this.city.fill('NY');
    await this.zipcode.click();
    await this.zipcode.fill('12345');
    await this.mobile.click();
    await this.mobile.fill('55555555555555555555');
    await this.createAccount.click();
  }

  async continue_page(){
    await this.continue.click();
  }
  
  async delete(){
    await this.deleteAccount.click();
  }
}