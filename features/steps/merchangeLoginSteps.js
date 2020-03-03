
const {Given,When}  = require('cucumber')
const {login} = require('../support/pages/merchangeLoginPg');
const merchantUser = require('../support/helper/defaultMerchentData');
const userLoginDetails = {
    userName:null,
    password:null
}

Given('i enter {string} as username', (uname) =>{
    userLoginDetails.userName = uname;
})

 Given('i enter {string} as password',(password)=>{
    userLoginDetails.password = password;
 })

 Given('i click on log in', async ()=>{
    await login(userLoginDetails.userName,userLoginDetails.password);
 })

 Given('I login with default credentials',async () =>{
     await login(merchantUser.userName,merchantUser.password);
     
 })
