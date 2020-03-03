const scope = require('../BrowserScope');
const {clickElementAndWaitForNextPgElement} = require('../actions/clickElement');
const {receiptBody} = require('./transactionReceipt');

const pg = {
    confirmBtn:'button.stp-button.primary-button',
    changeAcctBtn:'button.button.stp-button.secondary-button'
}

module.exports.confirmPayment = async ()=>{
    await scope.page.waitFor(1000);
    await clickElementAndWaitForNextPgElement(pg.confirmBtn,receiptBody);
}

module.exports.confirmBtn = pg.confirmBtn