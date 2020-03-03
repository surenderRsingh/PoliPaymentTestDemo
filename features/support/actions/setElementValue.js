const assert = require('assert').strict
const scope = require('../BrowserScope');

module.exports = async function(selector, value) {
    const valueToSet = value ? value : '';

    const setValue = (el, valueToSet) => {
        const tagName = el.tagName ? el.tagName.toLowerCase() : null;
        const validTagNames = ['input', 'select', 'textarea'];

        // Is it a valid tag and not disabled/readonly?
        if(validTagNames.includes(tagName) && !el.disabled && !el.readOnly){

            // Does the select element contain the value to be set?
            if(tagName === 'select'){
                for(let i = 0, len = el.options.length; i < len; i++){
                    let option = el.options[i];
                    if(option.value === valueToSet){
                        el.value = valueToSet;
                        option.selected = true;
                        break;
                    }
                }
            } else {
                el.value = valueToSet;              
            }
        }
        return el.value;
    };

    const isValueSet = await scope.page.$eval(selector, setValue, valueToSet);   

    assert.strictEqual(isValueSet.toString(), value.toString(), `Error: unable to set "${selector}" value to "${value}"`);
};