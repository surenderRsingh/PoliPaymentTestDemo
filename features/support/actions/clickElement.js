const scope = require("../BrowserScope");
const settings = require("../Settings");

module.exports.clickElement = async function(selector) {
  
  await scope.page.waitForSelector(selector);
  scope.page.$eval(selector,ele=>ele.click());
  
};

// module.exports.clickElementAndWaitForNextPgElement = async function(
//   selector,
//   nextPgElementSelector
// ) {
//   await scope.page.click(selector);
//   await scope.page.waitForSelector(nextPgElementSelector);
// };
