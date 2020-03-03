const cucumber = require('cucumber');
const scope = require('./BrowserScope');
const settings = require('../support/Settings');

require('regenerator-runtime/runtime');

cucumber.Before( async function(){
    await scope.initializeBrowser();
    await scope.page.goto("https://demo.tst1.paywithpoli.com/PriceBuster/TestCheckout.aspx"),
    { waitUntil: 'networkidle' };
    cucumber.setDefaultTimeout(settings.DEFAULT_TIMEOUT);
})

cucumber.After(async function(){
    // setTimeout(() => {
        scope.closeBrowser(); 
    // }, 3000);
    
})