import { Page, Locator } from "@playwright/test";
import BasePage from "./Base";

export default class Product extends BasePage {
  private product: Locator;


  constructor(page: Page) {
    super(page); 
    this.product = page.getByRole('link', { name: 'Products' });
    }
}