const BaseComponents = require('./baseComponents');

class SearchComponents extends BaseComponents {
    constructor() {
      super();
    }
    searchForProduct(productName) {
       return cy.get(' div.top_new_year  form > input.ui-autocomplete-input',{ timeout:2000 }).type(productName);
     }
    searchButton(){
       return cy.get(' .top > .top_transp > form > [type="submit"]').click()
     
     }
      searchProductInCatalog(){
        return  cy.get(' div.tovars a[href*="https://sila.by/catalog/televizory"]',{ timeout:4000 }).first()//.click();
     
     }
      performAddToCard(){
       return cy.get(' div.tovars > div:nth-child(1) div.btn_zak').should('be.visible').click();
     }
      performCheckout(){
        return cy.get(' div.top_flypanel div > span.top_korz > a').should('be.visible')
     }


};

module.exports = new SearchComponents();
