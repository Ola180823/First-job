import { BaseComponents } from "./baseComponents.js";

class LinkComponent extends BaseComponents{
    constructor() {
        super();
    }
    get youtubeLink() {
        return $(' a.navbar__item.navbar__link.header-youtube-link');
    }
    async openYoutube() { 
  await this.youtubeLink.click();
  await browser.pause(2000);
    }
}
export default new LinkComponent();