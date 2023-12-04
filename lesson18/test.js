const { Builder, By } = require('selenium-webdriver');


(async function() {
  
    const driver = new Builder().forBrowser('chrome').build();

    await driver.get('https://chromedriver.chromium.org/home');

    await driver.manage().window().setSize({width: 1960, height: 1280});

    const pageTitle = await driver.findElement(By.css('span.Rn3Z1b')).getText();  
    console.log("ChromeDriver",pageTitle);

    const enterButton = await driver.findElement(By.css('nav.plFg0c >ul >li:nth-child(3) '));
    await enterButton.click();

    const newPageTitle = await driver.findElement(By.css('span.Rn3Z1b'))
    //console.log("Chrome Extensions",newPageTitle );
    await driver.executeScript("arguments[0].style.backgroundColor = 'yellow'",newPageTitle );
    await driver.sleep(5000);
 
    const newPageTitleText = await newPageTitle.getText();
    console.log( "Chrome Extensions", newPageTitleText );
  
    await driver.get('https://www.google.com/');
    const searchInput = await driver.findElement(By.css('#APjFqb'));
    await searchInput.sendKeys('driver');
    await driver.sleep(1000);

    const firstSearchResult = await driver.findElement(By.css('#APjFqb'));
    const firstResultText = await firstSearchResult.getText();
    console.log(firstResultText.includes ('driver'));
    
   await driver.sleep(5000);
   await driver.quit();
})();
