import {expect} from 'chai';
import homePage from '../pageObjects/homePage.js';
import searchComponent from '../pageObjects/pageComponents/searchComponent.js';
import linkComponent from '../pageObjects/pageComponents/linkComponent.js';


describe('Wdio Test', () => {
    it('should open Wdio, change language, perform search, and open Youtube', async () => {
      await homePage. navigate ();
      await homePage.changeLanguage();
      expect(await homePage.headerElement.isExisting()).to.equal(true);
      await searchComponent.searchButton();
      await searchComponent.performElement('expect');
      await browser.keys(['Enter']);
      await  browser.pause(3000);
      await linkComponent.openYoutube();
    });
  });

      