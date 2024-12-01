
class BaseElements {
    async click(element) {
      await element.waitForDisplayed({timeout: 5000});
      return element.click()
    }
    async setValue(element, value) {
     return await element.setValue(value);
    }
  
    async getText(element) {
     //await element.waitForDisplayed({timeout: 5000});
     return element.getText();
    }
    async waitForDisplayed(element) {
      await element.waitForDisplayed({ timeout: 5000});
      return $(element).isDisplayed()
    }
  }
  
  export { BaseElements };