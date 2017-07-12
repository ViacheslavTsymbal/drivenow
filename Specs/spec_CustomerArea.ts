import {landingPage} from "../PageObject/landingPage"
import {customerArea} from "../PageObject/customerArea"

const lp = new landingPage();
const ca = new customerArea();
const userDataFile = require('../Modules/user.json');


describe("Customer Area tests", function () {
    beforeAll(function () {
        lp.Login(userDataFile.email,userDataFile.password)
    });

    xit('switch profiles',function () {
        ca.switchProfile();
        browser.getCurrentUrl().then((url) =>{
        expect(url).toEqual('https://www.beta.drive-now.com/fi/en/customer/userDataFile/business')
        });
         expect<any>(ca.switchProfile()).toEqual(true);
    });
    it('updateUserProfile',function () {
        ca.updateEmailField();
        ca.updatePasswordField("Qazwsx123");
        ca.updateSecurityQuestion();
        ca.updatePinField("7777");
        ca.clickSaveAndWaitForRefresh();
        ca.checkSubmittedFormAndSaveDataOnSuccess();
    });


});