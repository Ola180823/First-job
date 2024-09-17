

class BasePage {
    navigate(url) {
      cy.visit(url)
    }
    wait(time){
      cy.wait(time);
    }
  }
  
  module.exports = BasePage;