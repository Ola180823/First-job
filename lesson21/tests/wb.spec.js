const { test, expect } = require('@playwright/test');
const BasePage = require('../pageObjects/basePage');
const HomePage = require('../pageObjects/homePage');
const Header = require('../pageObjects/pageComponents/header');
const SearchComponents = require('../pageObjects/pageComponents/searchComponents');
const  JobPage = require('../pageObjects/jobPage');

  test.describe('Wildberris tests',  () => {
    let basePage;
    let searchComponents;
    let homePage;
    let header ;
    let jobPage;
    test.beforeEach(async ({page}) => {
      basePage = new BasePage(page);
      searchComponents = new SearchComponents(page);
      homePage = new HomePage(page);
      header = new Header(page);
      jobPage = new JobPage(page);
      await homePage.navigate('https://www.wildberries.by/  ');
      await homePage.click(homePage.agreeCookiesButton);

    })
 
  test('Change Currency Test', async ({ page, context }) => {
     await  header.clickCurrencyButton();
     const selectedCurrency = await homePage.getCurrency();
     await homePage.changeCurrency('USD');
     const currentCurrency = await homePage.getCurrency();
     expect(selectedCurrency).toBe(currentCurrency);
  })
  test(' Search Add Basket and Check Test', async ({ page, context }) => {
    await searchComponents.fillsearchForProduct('ёлка');
    await searchComponents.clickOnFirstProduct();
    await searchComponents.addToCart();
    const cartItemsCount = await header.getCartItemsCount();
    expect(cartItemsCount).toBeGreaterThan(0);

  })
  test(' Go toWork Page and Cheack Title Test', async ({ page, context }) => {
    const jobPage = new JobPage(page);
    await jobPage.clickJobButton();
    const headerText = await jobPage.getHeaderText({timeout:60000 });
    expect (await(await this.headerText)).toContain('Приглашаем на работу сотрудников');
    
  });
})
   test.afterEach(async() => {

})

 