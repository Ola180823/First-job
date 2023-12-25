
class BaseComponents {
    constructor(page) {
      this.page = page;
    }
    async click(locator){
        await locator.click();
    }
    async fill(locator, text){
        await this.page.fill(locator, text);
    }
    async waitForSelector(css) {
        await this.page.waitForSelector(css)
    }
}
module.exports = BaseComponents;