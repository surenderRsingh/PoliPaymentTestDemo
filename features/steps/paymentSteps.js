
const {Given,When,Then} = require('cucumber')
const {confirmPayment} = require('../support/pages/paymentConfirmationPg');
const {validateSelectedAccount,validateSelectedBank,clickContinueBtn,selectAccount} =
     require('../support/pages/accountSelectionPg')
const {validatePaymentTransactionTimeIsAvailable} =require('../support/pages/transactionReceipt');

Then('selected bank should be {string}',async (bank)=>{
    await validateSelectedBank(bank)
})

Then('default selected account should be {string}',async (account)=>{
   await validateSelectedAccount(account)
})

Given('i select account {string}',async (account)=>{
    await selectAccount(account);
})
When('i click continue on bank account Page',async ()=>{
   await clickContinueBtn();
})

When('i click confirm on payment confirmation Page',async ()=>{
    await confirmPayment();
})

Then('transaction receipt screen should be displayed',async() =>{
   await validatePaymentTransactionTimeIsAvailable();
})