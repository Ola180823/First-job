//const { expect } = require('@wdio/globals')
import {expect} from 'chai';
import  homePage  from '../pageObjects/homePage.js';
import  headerPage  from '../pageObjects/headerPage.js';
import  categoryComponents  from '../pageObjects/Components/categoryComponents.js';
import searchComponents from '../pageObjects/Components/searchComponents.js';
import cartComponents from '../pageObjects/Components/cartComponents.js';
import substribePage from '../pageObjects/substribePage.js';

describe('Lamoda Tests', () => {
  it(`1 should have a baseLogo on the homePage`, async () => {
    await homePage.navigate();
    expect (await homePage.titleLogo.waitForExist());
  })

  it(`2 should have correct title `, async () => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.equal(
    'Интернет магазин одежды и обуви. Купить обувь, купить одежду, аксессуары в онлайн магазине Lamoda.by'); 
  })

  it(`3 should contains menuNav `, async () => {
    await homePage.topNavMenu();
    expect(await homePage.menuNav .isDisplayed()).to.be.true;
  })

  it(` 4 should navigate to the deliveri `, async () => {
    await headerPage.click(headerPage.deliveriLink);
    await headerPage.getActualText();
    expect (await headerPage.actualText.getText()).to.equal('Воспользуйтесь бесконтактной доставкой');
  })

  it(`5 should select Grodno city `, async () => {
    await headerPage.click(headerPage.cityDropdown);
    await headerPage.click(headerPage.grodnoOption); 
    await headerPage.click(headerPage.confirmButton);
    expect (await headerPage.selectedCity.getText()).to.equal('г. Гродно ');
  })

  it.skip(`5.5 should interact slide `, async () => {
    const slides = await $$ (' ._root_1g2fj_2')
    const isVisible = await slides.isDisplayed()
    expect ( await isVisible()).to.be.true  
    .waitForDisplayed();
  })

  it(`6 should navigate to a product category`, async () => {
    await categoryComponents.click(categoryComponents.menCategory);
    expect  (await categoryComponents.menCategoryText.getText()).to.include('Популярное');

  })

  it(`7 should perfom a search by keyword `, async () => {
    await searchComponents.searchInputValue('сумка');
    await searchComponents.click(searchComponents.searchButton);
    expect(await searchComponents.searchResults).to.not.equal(0);
  })

  it(`8 should perfom a search a filter `, async () => {
    await searchComponents. popularFilterLamodaClick();
    expect(await searchComponents. popularFilterLamoda.isDisplayed()).to.be.true;
  })

  it(`9 should add product to the cart`, async () => { 
    await cartComponents.click(cartComponents.product);
    await cartComponents.click(cartComponents.addToCartButton2);
    await cartComponents.click(cartComponents.cartIcon); 
    expect(await cartComponents.isProductInCart.isExisting()).to.be.true;
  })

  it(`10 should serch categiry`, async () => {
    await categoryComponents.click(categoryComponents.childCategiry);
    await categoryComponents.click(categoryComponents.aksesoria);
    await categoryComponents.click(categoryComponents.game);
    await categoryComponents.click(categoryComponents.gameCart);
    await categoryComponents.click(categoryComponents.buttonCart);
    expect(await categoryComponents.isGamerInCart.isExisting()).to.be.true;
 })

  it(`11 should remove product from the cart `, async () => {
   await cartComponents.click(cartComponents.cartIcon);
   await cartComponents.click(cartComponents.removeButton);
   await cartComponents.click(cartComponents.removeButton2); 
   expect  (await cartComponents. emptyCartText.getText()).to.include('В корзине нет товаров');
  })

  it (`12 should substribe to newsletter`, async ()=> {
   await substribePage.emailInput.setValue('sov.82@mail.ru');
   await substribePage.click(substribePage.chekBox);
   await substribePage.click(substribePage. substribeButton);
   const successMessage = await (successMessageSelector).getText();
   expect(successMessage).to.contain('Спасибо! Мы уже отправили промокод вам на почту.')

  })
 
})
