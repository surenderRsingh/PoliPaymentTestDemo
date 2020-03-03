const scope = require("../BrowserScope");
const settings = require('../Settings');

module.exports.clickElement = async function(selector) {
  await Promise.all([
     scope.page.click(selector),
     scope.page.waitForNavigation({ waitUntil: 'networkidle0' ,timeOut:settings.DEFAULT_TIMEOUT })
  ]);
};

module.exports.clickElementAndWaitForNextPgElement = async function(selector,nextPgElementSelector) {
   
     await scope.page.click(selector);
     await scope.page.waitForSelector(nextPgElementSelector);
     
  
};
