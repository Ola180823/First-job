import { BaseComponents } from "./baseComponents.js";

class SearchComponent extends BaseComponents {
  constructor() {
    super();
    
  }
  get searchElement (){
    return $('.navbarSearchContainer_Bca1');
  }
  get searchText(){
    return $('.DocSearch-Input');
   
  }
  async searchButton () {
    await this.searchElement .click();
  }
  async performElement (searchText) {
    await this.searchText.setValue(searchText);
    await this.searchText.click();
  } 
}

export default new SearchComponent();

