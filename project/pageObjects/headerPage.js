import { BasePage } from "./basePage.js";

class HeaderPage extends BasePage {
  constructor() {
    super()
  }

  get deliveriLink() {
    return $(' div._right_s9bjz_35 > div:nth-child(1) > a > span')
  }
  get actualText() {
    return $('  div.t396__elem.tn-elem.tn-elem__1789880391584497896110 > div');
  }
  get cityDropdown() {
    return $('._message_32s20_11');
  }
  get grodnoOption (){
    return $ ('  div._rightCol_1tu7k_8  a:nth-child(10)');
  }
  get confirmButton (){
   return $ ('.x-button.x-button_primaryFilledWeb7184.x-button_32.x-button_intrinsic-width');
  }
  get selectedCity() {
    return $ (' div._root_s9bjz_2._black_s9bjz_12._topRow_v5ijp_6 span> span.notranslate');
  }
 
  
  async getActualText(){
    await this.actualText.waitForExist({timout: 5000});
    await this.actualText.getText();
  }
  
}
export default new HeaderPage();