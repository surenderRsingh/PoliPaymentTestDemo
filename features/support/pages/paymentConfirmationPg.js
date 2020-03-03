const scope = require('../BrowserScope');
const {clickElement} = require('../actions/clickElement');
const {receiptBody} = require('./transactionReceipt');

const pg = {
    confirmBtn:'button.stp-button.primary-button',
    changeAcctBtn:'button.button.stp-button.secondary-button'
}

module.exports.confirmPayment = async ()=>{
    
    await clickElement(pg.confirmBtn);
}

module.exports.confirmBtn = pg.confirmBtn