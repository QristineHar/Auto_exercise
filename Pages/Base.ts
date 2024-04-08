import { Page } from "@playwright/test";

export default abstract class BasePage {
  private host: string;
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
    this.host = 'http://automationexercise.com'; 
  }

  async open() {
    await this.page.goto(this.host);
    return this.page;
  }
  async wait() {
    await this.page.waitForURL(this.host);
    return this;
  }


  // Scrolling
}