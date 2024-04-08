import { Locator, Page } from "@playwright/test";

export default class BasePage {
  private host: string;
  protected page: Page;
  protected product: Locator;
  protected body: Locator;

  constructor(page: Page) {
    this.page = page;
    this.host = 'http://automationexercise.com';
    this.product = page.getByRole('link', { name: 'Products' });
    this.body = page.locator('body');
  }

  async open() {
    await this.page.goto(this.host);
    return this.page;
  }
  async wait() {
    await this.page.waitForURL(this.host);
    return this;
  }

  async clickProduct(){
    await this.open();
    await this.product.click();
  }

  async arrowDown(){
    await this.body.press('ArrowDown');
  }

  async arrowUp(){
    await this.body.press('ArrowUp');
  }


  // Scrolling
}