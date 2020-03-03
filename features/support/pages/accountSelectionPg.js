const assert = require('assert');
const getElementTextValue  = require('../actions/getElementTextValue')
const selectValueByRegExText  = require('../actions/selectValueByRegExText')
const {confirmBtn} =require('./paymentConfirmationPg');
const {clickElement,clickElementAndWaitForNextPgElement} = require('..//actions/clickElement')
const scope = require('../BrowserScope');

const pg = {
    selectedBankLabel:'#selectedBankText',
    accountSelectionList:'select[name="AccountSelection"]',
    continueBtn : 'button.stp-button.primary-button'
}

module.exports.selectedBankLabel = pg.selectedBankLabel;

module.exports.validateSelectedBank = async (bank) =>{
    const actual = await getElementTextValue(pg.selectedBankLabel)
    assert.equal(actual.toString().trim(),bank,`Selected bank ${actual} is not equal to ${bank}`)
}

module.exports.selectAccount = async (account) =>{
     await selectValueByRegExText(pg.accountSelectionList,account)
    
}
module.exports.validateSelectedAccount = async (account) =>{
    const actual = await getElementTextValue(pg.accountSelectionList)
    assert.equal(actual.toString().trim(),account,`Selected account number  ${actual} is not equal to ${account}`)
}

module.exports.clickContinueBtn = async () =>{
   await scope.page.waitFor(1000);
   await clickElementAndWaitForNextPgElement(pg.continueBtn,confirmBtn);
}