import { Page, Locator } from "@playwright/test";
import BasePage from "./Base";
import Login from "./LoginPage";

export default class Product extends Login {

  private search: Locator;
  private sButton: Locator;
  private firstProduct: Locator;
  private cardView: Locator;
  private procCheckout: Locator;
  private homeCheckout: Locator;
  private order: Locator;
  private cardName: Locator;
  private cardNumber: Locator;
  private pin: Locator;
  private mm: Locator;
  private year: Locator;
  private confirm: Locator;

  constructor(page: Page) {
    super(page); 
    this.search = page.getByPlaceholder('Search Product');
    this.sButton = page.getByRole('button', { name: '' });
    this.firstProduct = page.getByText('Add to cart').first();
    this.cardView = page.getByRole('link', { name: 'View Cart' });
    this.procCheckout = page.getByText('Proceed To Checkout');
    this.homeCheckout = page.getByText('Home Checkout');
    this.order = page.getByRole('link', { name: 'Place Order' });
    this.cardName = page.locator('input[name="name_on_card"]');
    this.cardNumber = page.locator('input[name="card_number"]');
    this.pin = page.getByPlaceholder('ex.');
    this.mm = page.getByPlaceholder('MM');
    this.year = page.getByPlaceholder('YYYY');
    this.confirm = page.getByRole('button', { name: 'Pay and Confirm Order' });

    }

    async clickProduct(){
        await this.open();
        await this.product.click();
    }

    async searchProduct(name){
        await this.search.click();
        await this.search.fill(name);
        await this.sButton.click();
    }

    async purchase(){
        await this.firstProduct.click();
        await this.cardView.click();
        await this.procCheckout.click();
        await this.homeCheckout.click();
        await this.order.click();
        await this.cardName.click();
        await this.cardName.fill('Qrist Har');
        await this.cardNumber.click();
        await this.cardNumber.fill('4111111111111111');
        await this.pin.click();
        await this.pin.fill('123');
        await this.mm.click();
        await this.mm.fill('10');
        await this.year.click();
        await this.year.fill('2030');
        await this.confirm.click();
    }
}