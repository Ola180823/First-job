const HomePage = require('../page-objects/homePage');
const SearchComponents = require('../page-objects/components/searchComponents');
const CatalogPage = require('../page-objects/catalogPage');



describe('sila.by Tests', function () {
 
  it('sould display elementson the home page', () => {
     HomePage.navigate('https://sila.by/');
      HomePage.getTitle().should('include','ЭЛЕКТРОСИЛА');
      HomePage.wait(2000);
      HomePage.getLogoElement().should('exist');
    })
    it('should search product add to basket ', () => {
      HomePage.navigate('https://sila.by/');
      SearchComponents.searchForProduct('телевизор');
      SearchComponents.searchButton();
      HomePage.wait(2000);
      SearchComponents.searchProductInCatalog().should('be.visible');
      SearchComponents.performAddToCard();
      HomePage.wait(2000);
      SearchComponents.performCheckout().should('exist');
    })
    it('should catalogBlok ', () => {
      HomePage.navigate('https://sila.by/');
      CatalogPage.catalogBlok().should('contain','Скидки');
    })
    it('should navigate  adress mapYandex ', () => {
      HomePage.navigate('https://sila.by/');
      HomePage.getAdress()
      HomePage.wait(2000);
      HomePage.mapYandex().should('exist');
    })
  });



  