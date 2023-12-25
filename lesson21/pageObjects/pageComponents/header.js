//const BasePage = require('../pageObjects/basePage');
const BaseComponents = require('../pageComponents/baseComponents');

class Header extends BaseComponents {
  constructor(page) {
    super (page);
  }
  get currencyButton() {
    return this.page.locator('.currency-box')
  }
  get cartIcon() {
    return this.page.locator('.user-menu__item.user-menu__item--cart-thin')
  }
  async clickCurrencyButton(){
      await this.click(this.currencyButton);
      await this.page.waitForTimeout(2000);
  }
  async getCartItemsCount(){
  const cartItemsCountText = await this.cartIcon.innerText();
  const cartItemsCount = parseInt(cartItemsCountText, 10)
    return cartItemsCount;
  }
}  
  

module.exports = Header;
