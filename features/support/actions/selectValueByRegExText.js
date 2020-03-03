const scope = require('../BrowserScope');
const  assert = require('assert')
module.exports = async function(selector, value) {
    const valueToSet = value ? value : '';

    const setValue = (el, valueToSet) => {
        const tagName = el.tagName ? el.tagName.toLowerCase() : null;
        const regex = RegExp(valueToSet);

         let option;
         let found = false;
            if(tagName === 'select'){
                for(let i = 0, len = el.options.length; i < len; i++){
                    option = el.options[i];
                    if(regex.test(option.textContent.toString())){
                        el.value = option.value;
                        // option.selected = true;
                        found = true;
                        break;
                    }
                }
            
        }
        return found? option.textContent:"No such value present";
    };

    await scope.page.waitForSelector(selector);
    const actual = await scope.page.$eval(selector, setValue, valueToSet);   

    assert.strictEqual(RegExp(valueToSet).test(actual),true, `Error: unable to set "${selector}" value to "${value}"`);
};