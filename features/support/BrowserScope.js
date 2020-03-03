const puppeteer = require("puppeteer");

let scope = {
  browser: null,
  page: null
};

scope.initializeBrowser = async function() {
  if (scope.page == null) {
    this.browser = await puppeteer.launch({ headless: false });
    this.page = await this.browser.newPage();
  } else console.log("already initialized browser page");
};

scope.closeBrowser = async function() {
  // setTimeout(async () => {
  //     if(this.browser){
  //         await this.browser.close();
  //      }
  //      this.browser = null;
  //      this.page = null;
  // }, 2000);

  if (this.browser) {
    await this.browser.close();
  }
  this.browser = null;
  this.page = null;
};

module.exports = scope;
