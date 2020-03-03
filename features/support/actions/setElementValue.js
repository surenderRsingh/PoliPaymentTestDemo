const assert = require('assert').strict
const scope = require('../BrowserScope');

module.exports = async function(selector, value) {
    

    const setValue = (ele,valueToSet)=>{
        ele.value = valueToSet;
        return ele.value
    }
    const valueToSet = value ? value : '';
    await scope.page.waitForSelector(selector);
    const isValueSet = await scope.page.$eval(selector, setValue, valueToSet);   

    assert.strictEqual(isValueSet.toString(), value.toString(), `Error: unable to set "${selector}" value to "${value}"`);
};