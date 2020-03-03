
const {clickElement} = require('../actions/clickElement');

const pg = {
    confirmBtn:'button.stp-button.primary-button',
    changeAcctBtn:'button.button.stp-button.secondary-button'
}

module.exports.confirmPayment = async ()=>{
    
    await clickElement(pg.confirmBtn);
}

