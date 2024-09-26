import {expect} from 'chai';
import { expect as assert } from '@wdio/globals'


describe('Wdio Test', () => {
    it('should open wdio and change laguage', async () => {
       await browser.url('https://webdriver.io/');
       const lauangeTogle = await $('.dropdown--right');
       await lauangeTogle.click();
       await browser.pause(2000)
    });
  
    it('should perform a search',async () => {
      const searchElement = await $('.navbarSearchContainer_Bca1');
       await searchElement.click();
       await browser.pause(2000);
       const input = await $('.DocSearch-Input');
       await input.setValue('expect');
       //await input.click('Enter')
        //await input[0].waitForClickable();
    });
      
       it('should check the existens of a header element', async () => {
        const headerElement = await $('.container .svg_j3ED');
        expect(await headerElement.isExisting()).to.equal(true);
        await browser.pause(3000);
       });
       it('should navigate to YouTube page', async() => {
         const navigateButton = await $( ' a.navbar__item.navbar__link.header-youtube-link');
         await navigateButton.click();
         await browser.pause(2000)
       


       });
      });
       
      
      

  