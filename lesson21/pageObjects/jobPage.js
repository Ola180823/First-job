//const BasePage = require('./basePage');
const HomePage = require('./homePage');


class JobPage extends HomePage {
    constructor(page) {
      super(page);
      
    }
    get jobButton() {
        return this.page.locator(' div.header__links > div:nth-child(2) ')//
    }

    get headerText() {
    return this.page.locator('.container .intro__content')//.intro__content >h1
}
    async clickJobButton(){
        await this.click(this.jobButton);
        await this.page.waitForTimeout(3000);
}
    async getHeaderText(){
        await this.headerText.textContent()
       
    }
}


module.exports = JobPage;