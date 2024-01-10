
import { BaseComponents } from "./baseComponents.js";

class CategoryComponents extends BaseComponents {
    constructor() {
        super()
      }

      get menCategory () {
        return  $ ('  div._genderWrapper_v5ijp_80  a:nth-child(2)');
}
      get  menCategoryText(){
        return $('.d-recommendations__title');
}
     get childCategiry (){
        return $('  div._genderWrapper_v5ijp_80  a:nth-child(3)')
}
     get aksesoria (){
       return $ (' ._root_1416b_2 a[href="/c/6327/default-detskieigrushki/?sitelink=topmenuK&l=9"]')
       
}
     get game  (){
       return $ ('#MP002XG03FZ9  div._area_552z7_8')
}
     get gameCart (){
       return $ ('.recaptcha._recaptcha_lrjtr_7 >button')
}
    get   buttonCart (){
       return $ ('.d-modal__close-button')
}
    get isGamerInCart (){
       return $ ('._count_1kpa7_11')//.isExisting()
}
async isGamerInCartExist() {
  await (await this.isGamerInCart).waitForExist()
}

}

export default new CategoryComponents();