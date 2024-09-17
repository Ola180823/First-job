import { BasePage } from "./basePage.js";

class HomePage extends BasePage {
  constructor() {
    super()

  }
    get languageButton(){
    return $('.dropdown--right');
  }
  async changeLanguage() {
    
     await this.languageButton.click()
     await browser.pause(2000);
  }
    get headerElement (){
  return $('.container .svg_j3ED');
  }
}

export default new HomePage();
