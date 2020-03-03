const scope = require('../BrowserScope');
const setElementValue = require('../actions/setElementValue');
const {clickElement} = require('../actions/clickElement');
const pg = {
    loginEdit:'input[name="Username"]',
    passwordEdit: 'input[name="Password"]',
    loginBtn: 'button.stp-button.primary-button',
}

module.exports.login =  async function(username,password){
    await setElementValue(pg.loginEdit,username);
    await setElementValue(pg.passwordEdit,password);
    await clickElement(pg.loginBtn);
}