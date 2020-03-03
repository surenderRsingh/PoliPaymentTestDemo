const scope = require('../BrowserScope');

module.exports = async function(selector){
    await scope.page.waitForSelector(selector);
    const ele = await scope.page.$(selector);
    const text =  await scope.page.evaluate(element=>{
        return element.textContent;}
        ,ele);
    return text;
}