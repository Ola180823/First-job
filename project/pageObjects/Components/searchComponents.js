import { BaseComponents } from "./baseComponents.js";

class SearchComponent extends BaseComponents {
  constructor() {
    super();
   ;
  }
  get searchInput () {
    return $('._root_1su1z_2 > input');
}
  get searchButton () {
    return $('._root_1su1z_2 > button');
  }
  get searchResults() {
    return $('._input_1su1z_19._inputShown_1su1z_43');
  }
  get popularFilterLamoda (){
    return $('  div._filters_py6ob_19 div:nth-child(10)   div._item_pjvgk_2 ');
  }
  async searchInputValue() {
    await this.searchInput.setValue('сумка');
  }
  async searchResultsEqual(){
    await this.searchResults.to.not.equal(0);
  }
  async popularFilterLamodaClick(){
    await this.popularFilterLamoda.click();
    await this.popularFilterLamoda.waitForDisplayed();
    
  }

}


export default new SearchComponent();

