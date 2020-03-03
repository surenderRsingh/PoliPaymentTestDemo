const scope = require('../BrowserScope');

module.exports = async (selector) =>{
    const ele = await scope.page.$(selector);
    const text =  await scope.page.evaluate(element=>{
        return element.value;}
        ,ele);
    return text;
}