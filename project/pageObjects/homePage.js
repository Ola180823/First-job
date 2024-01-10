import { BasePage } from "./basePage.js";


class HomePage extends BasePage {
  constructor() {
    super()
  }

  get titleLogo() {
    return $('._middleRow_v5ijp_10._widthContainer_v5ijp_107 >a');
  }
  get menuNav() {
    return $('._root_1416b_2');
  }
  get  pageTitle(){
    return  browser.getTitle();
  }
  async topNavMenu() {
    await this.menuNav.waitForDisplayed()
  }  
  async toptitleLogo() {
    await this.titleLogo.waitForExist()
    return  await this.titleLogo.getText();
  }
  async pageTitleEqual() {
    await this.pageTitle.getTitle()
  }
  
}

export default new HomePage();