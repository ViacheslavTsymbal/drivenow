import {landingPage} from "../PageObjects/landingPage"
import {customerArea} from "../PageObjects/customerArea"

const lp = new landingPage();
const ca = new customerArea();


describe("Customer Area tests", function () {
    beforeAll(function () {
        let userDataFile = ca.getNewUserEmail();
        browser.sleep(10000);
        console.log("waiting for events to sync")
        lp.Login(userDataFile.newUserEmail, browser.params.user.password)
    });


    it('PrivateBlock',function () {
        ca.verifyErrorsSecurityBlock();
        ca.updateEmailField();
        ca.updatePasswordField("Qazwsx123");
        ca.updateSecurityQuestion();
        ca.updatePinField("7777");
        ca.updateSecurityAnswer("my Answer");
        ca.saveAndWaitWhileSecurityFormIsUpdated();
        ca.checkSecurityBlockAndSaveDataOnSuccess();
    });

    it("resetButton",function () {
        ca.verifyResetButtonFunctionality();
        ca.clickResetButton();
    });

    it("ContactBlock",function () {
        ca.updateStreet();
        ca.updateStreetNumber("22");
        ca.updatePostalCode();
        ca.updateCity("Helsinki");
        ca.updateMobileCode("00380");
        ca.updateMobilePhone("939177068");
        ca.saveAndWaitWhileContactFormIsUpdated();
        ca.checkContactDataFormAndSaveDataOnSuccess();

    });

    xit('switch profiles',function () {
        ca.switchProfile();
        browser.getCurrentUrl().then((url) =>{
            expect(url).toEqual('https://www.beta.drive-now.com/fi/en/customer/data/business')
        });
        expect<any>(ca.switchProfile()).toEqual(true);
    });



});