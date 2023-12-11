

class BasePage  {

    async navigate() {
        const url = await this. getUrlByEnv();
        console.log(url);
        await browser.url(url);
      }
      async getUrlByEnv(){
        return ('https://webdriver.io/')
      }
    }
  
export { BasePage };

