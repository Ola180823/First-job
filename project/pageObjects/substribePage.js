import { BasePage } from "./basePage.js";


class SubstribePage extends BasePage {
  constructor() {
    super()
  }
  get emailInput (){
    return $ ('.input-material__input-wrapper');
  }
get substribeButton(){
   return  $ ('._buttons_1lmun_12 > button');
}
get chekBox (){
   return $ ('._icon_1qrec_2.x-checkbox__icon');
}
get successMessageSelector  (){
    return $ ('  ._titleResult_1lmun_30');
}
}
    export default new SubstribePage();