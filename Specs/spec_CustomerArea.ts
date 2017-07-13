import {landingPage} from "../PageObjects/landingPage"
import {customerArea} from "../PageObjects/customerArea"

const lp = new landingPage();
const ca = new customerArea();


describe("Customer Area tests", function () {
    beforeAll(function () {
        lp.Login(browser.params.user.email,browser.params.user.password)
    });

    xit('switch profiles',function () {
        ca.switchProfile();
        browser.getCurrentUrl().then((url) =>{
        expect(url).toEqual('https://www.beta.drive-now.com/fi/en/customer/data/business')
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