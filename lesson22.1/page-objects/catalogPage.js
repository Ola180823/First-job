const BasePage = require('./basePage')

class CatalogPage extends BasePage {
    constructor() {
      super();
    }
    catalogBlok(){
    return cy.get('.block_catalog.block_catalog__wrap').should('exist')
 }
}
module.exports = new CatalogPage ();