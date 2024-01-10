
import { BaseElements } from "../helpers/baseElements.js";


class BasePage   extends BaseElements {
    async navigate() {
        const url = await this. getUrlByEnv();
        console.log(url);
        await browser.url(url);
      }
      async getUrlByEnv(){
        return ('https://www.lamoda.by/')
    }
  }
  
  export { BasePage };