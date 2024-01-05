const BasePage = require('./basePage')

class HomePage extends BasePage {
    constructor() {
      super();
    }
    getTitle() {
      return cy.title();
    }
  
    getLogoElement() {
     return cy.get('div.top .logo_sila').should('exist');
    
  } 
  getAdress() {
    return cy.get(' .t_menu1 >a[href="https://sila.by/shops"]').click()
  }
  mapYandex(){
    return cy.get('#ymap_all').should('exist').and('be visible')
  }
}
  module.exports = new HomePage();