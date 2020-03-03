const scope = require("../BrowserScope");
const getElementTextValue = require("../actions/getElementTextValue");
const {clickElement} = require('../actions/clickElement');
const assert = require('assert')

const pg = {
  amountLabel: "#merchantInformationRight div:nth-of-type(1)",
  referenecLabel: "#merchantInformationRight div:nth-of-type(2)",
  bankSelect: "#bankdropdown",
  continueBtn: '#proceed-button'
};

module.exports.validateAmount = async function(amount) {
  const text = await getElementTextValue(pg.amountLabel);
  const actual = text.replace("Amount:","").trim().replace("$","");
  assert.equal(actual,amount.toString(),`Expected amount ${amount} is not equal to ${actual}`)
};

module.exports.validateReference = async function(reference) {
  const text = await getElementTextValue(pg.referenecLabel);
  const actual = text.replace("Reference:","").trim().replace("$","");
  assert.equal(actual.toString().trim(),reference.toString(),`Expected Reference ${reference} is not equal to ${actual}`)
};

module.exports.validateDefaultBankName = async function(bankName) {
  const actual = await getElementTextValue(pg.bankSelect);
  assert.equal(actual.toString().trim(),bankName.toString(),`Expected Bank name ${bankName} is not equal to ${actual}`)
};

module.exports.clickContinueBtn = async function() {
  await clickElement(pg.continueBtn);
}