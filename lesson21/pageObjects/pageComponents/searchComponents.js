const BaseComponents = require('./baseComponents')

class SearchComponents extends BaseComponents {
    constructor(page) {
        super(page);
    }
    get searchButton() {
        return this.page.locator('.search-component-input'); 
    }
    get InputField() {
        return this.page.locator('input.search-component-input');
    }
    get firstProduct(){
return this.page.locator(' div.search-list.search-list__searches > div:nth-child(1) ');
    }
    get addToCartButton() {
        return this.page.locator('div.card-grid > div:nth-child(1) > div > div > button')
    }

async fillsearchForProduct(productName) {
await this.InputField.fill(productName);
await this.page.waitForTimeout(2000);
await this.searchButton.click();

}
async clickOnFirstProduct(){
    await this.click(this.firstProduct);
    await this.page.waitForTimeout(2000);
}
async addToCart() {
    await this.addToCartButton.click();
    await this.page.waitForTimeout(2000);
}
}

module.exports = SearchComponents;
