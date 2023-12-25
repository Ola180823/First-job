const BasePage = require('./basePage');
const BaseComponents = require('./pageComponents/baseComponents');
const Header = require('../pageObjects/pageComponents/header');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new Header(page);
  }
  
  get agreeCookiesButton() {
    return this.page.locator(' .modal-body__buttons');
  }

  async acceptCookies() {
    await this.click(this.agreeCookiesButton)
  }

async getCurrency() {
    
  }
  async changeCurrency(newCurrency) {
    await this.header.clickCurrencyButton();

    await this.page.waitForTimeout(5000);
  }
  async click(locator){
      await locator.click();

  }

};

module.exports = HomePage;