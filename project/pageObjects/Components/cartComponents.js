import { BaseComponents } from "./baseComponents.js";


class CartComponents extends BaseComponents {
    constructor() {
        super()
      }
      get product(){
       return $ ('  div.x-product-card__link.x-product-card__hit-area >a[href="/p/rtlacg222501/bags-karllagerfeld-sumka/"]');
      } 
      get addToCartButton2(){
        return $ ('#vue-root .recaptcha._recaptcha_lrjtr_7 > button');
      }
      get cartIcon (){
        return $ (' .x-button.x-button_primaryFilledWeb7184.x-button_32.x-button_link.x-button_link_32.x-button_intrinsic-width');
      }
      get isProductInCart(){
       return $ ('._count_1kpa7_11');
      }
      get cartIcon  (){
        return $ ('._count_1kpa7_11');
      }
      get removeButton  (){
        return $ ('._inner_13so9_2');
      }
      get removeButton2 (){
        return $ ('.x-button.x-button_primaryFilledWeb7184.x-button_32.x-button_intrinsic-width._actionButton_4stt4_7');
      }
      get emptyCartText (){
        return $ ('._title_1wc5j_7');
      }
      async isProductInCartShould(){
      await (await this.isProductInCart).waitForExist()
      }
    }
    export default new CartComponents ();