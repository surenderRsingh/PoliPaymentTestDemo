const {Given,When,Then} = require('cucumber');
const defaultMerchentData = require('../support/helper/defaultMerchentData');
const {setMerchantCode,setAmountValue,clickPayWithPoliBtn} = require('../support/pages/testCheckoutPg');
const {validateAmount,validateDefaultBankName,validateReference,clickContinueBtn}  = require('../support/pages/bankSelectionPg');

Given('I entered test Merchant details',async function(){
    await setMerchantCode(defaultMerchentData.merchentCode);
    await setAmountValue(defaultMerchentData.amount);
    await clickPayWithPoliBtn();
    await clickContinueBtn();

})

Given('I set Replace Merchant Code value to {int}',async function(val){
    await setMerchantCode(val)
})

Given('i set amount value to {float}',async function(val){
    await setAmountValue(val)
})

When('Pay with Poli button is clicked',async function(){
    await clickPayWithPoliBtn();
})

Then('Amount on Bank Selection Page should be {float}',async function(amount){
    await validateAmount(amount);
})

Then('Reference on Bank Selection Page should be {string}',async function(refNo){
    await validateReference(refNo)
})

Then('Default bank on Bank Selection Page should be {string}',async function(bankName){
    await validateDefaultBankName(bankName)
})
