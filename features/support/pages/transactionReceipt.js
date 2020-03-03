const assert = require('assert');
const scope = require('../BrowserScope');
const getElementTextValue= require('../actions/getElementTextValue')

const pg={
    receiptBody:'#receiptBody',
    paymentInformation:'#paymentInformation'
}

module.exports.validatePaymentTransactionTimeIsAvailable = async()=>{
    const actualText = await getElementTextValue(pg.paymentInformation)
    assert.strictEqual(actualText.toString().indexOf('Amount') > -1,true,"Payment is not successfull");
}

module.exports.receiptBody=pg.receiptBody;