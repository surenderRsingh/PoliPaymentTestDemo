
const setElementValue = require('../actions/setElementValue');
const {clickElement} = require('../actions/clickElement');
const pg = {
    merchantCodeEdit:'input[name="txtMerchantCode"]',
    amountEdit:'input[name="PaymentAmount"]',
    payWithPoliBtn : '#PayWithPOLi1'

}

module.exports.setMerchantCode = async function(mCode){
    await setElementValue(pg.merchantCodeEdit,mCode);
}

module.exports.setAmountValue = async function(amount){
    await setElementValue(pg.amountEdit,amount);
}

module.exports.clickPayWithPoliBtn = async function(){
    await clickElement(pg.payWithPoliBtn);
}