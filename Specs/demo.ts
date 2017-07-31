import {regPage} from "../PageObjects/common_reg"
import {errors} from "../Modules/components"
import {landingPage} from "../PageObjects/landingPage"
import {customerArea} from "../PageObjects/customerArea"
const reg = new regPage();
const tenant = new errors();


const lp = new landingPage();
const ca = new customerArea();




describe("demo", function () {

    xit("Helsinki registration",function() {
        browser.get("/de/berlin/registration/1");

        //First Page
        reg.selectTenant(3);
        reg.verifyErrorsCount(6);
        reg.getErrorText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.fi.email);
            expect(erText[1]).toEqual(tenant.fi.password);
            expect(erText[2]).toEqual(tenant.fi.pin);
            expect(erText[3]).toEqual(tenant.fi.sQuestion);
            expect(erText[4]).toEqual(tenant.fi.sAnswer);
        });
        browser.sleep(5000);
        reg.enterUniqueEmail();
        reg.enterPassword("Qazwsx123");
        reg.enterPin("7777");
        reg.selectSecurityQuestion("3");
        reg.enterSecurityAnswer("meetjoeblack");
        browser.sleep(5000);
        reg.clickNext();

        //Second Page
        reg.verifyErrorsCount(15);
        reg.getErrorText().then((value) => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.fi.gender);
            expect(erText[1]).toEqual(tenant.fi.fistName);
            expect(erText[2]).toEqual(tenant.fi.lastName);
            expect(erText[3]).toEqual(tenant.fi.street);
            expect(erText[4]).toEqual(tenant.fi.streetNumber);
            expect(erText[5]).toEqual(tenant.fi.postCode);
            expect(erText[6]).toEqual(tenant.fi.city);
            expect(erText[7]).toEqual(tenant.fi.mobilePhone);
            expect(erText[8]).toEqual(tenant.fi.dateOfBirth);
        });
        browser.sleep(5000);
        reg.selectGender();
        reg.enterName("Automation","BOT");
        reg.enterStreetDetails("someStreet","22","optional street name");
        reg.enterPostalCode("01100");
        reg.enterMobileCode("00380");
        reg.enterMobilePhone("939177068");
        reg.enterCity("Helsinki");
        reg.selectDateOfBirth(9);
        reg.selectMonthOfBirth(12);
        reg.selectYearOfBirth(28);
        browser.sleep(5000);
        reg.clickNext();

        //ThirdPage
        reg.licenceValidFrom(5,2,1);
        reg.licenceValidTO(5,5,5);
        reg.verifyErrorsCount(10);
        reg.getErrorText().then((value) => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.fi.licence);
            expect(erText[1]).toEqual(tenant.fi.licenceDate);
        });
        reg.enterDrivingLicence("123456789");
        reg.licenceValidFrom(5,2,2);
        browser.sleep(5000);
        reg.clickNext();

        //Fourth Page
        reg.addCreditCardIframe(4153013999701048,"1229","048");
        reg.selectCheckBoxes();
        browser.sleep(5000);
        reg.displayConfirmationText();





    });
    xit('PrivateBlock',function () {
        lp.Login(browser.params.user.email,browser.params.user.password);
        ca.verifyErrorsSecurityBlock();
        browser.sleep(3000);
        ca.updateEmailField();
        ca.updatePasswordField("Qazwsx123");
        ca.updateSecurityQuestion();
        ca.updatePinField("7777");
        ca.updateSecurityAnswer("my Answer");
        browser.sleep(2000);
        ca.saveAndWaitWhileSecurityFormIsUpdated();
        ca.checkSecurityBlockAndSaveDataOnSuccess();
    });
    xit("resetButton",function () {
        ca.verifyResetButtonFunctionality();
        ca.clickResetButton();
    });

    it("ContactBlock",function () {
        lp.Login(browser.params.user.email,browser.params.user.password);
        ca.updateStreet();
        ca.updateStreetNumber("22");
        ca.updatePostalCode();
        ca.updateCity("Helsinki");
        ca.updateMobileCode("00380");
        ca.updateMobilePhone("939177068");
        browser.sleep(3000);
        ca.saveAndWaitWhileContactFormIsUpdated();
        ca.checkContactDataFormAndSaveDataOnSuccess();

    });
    it("logOut",function () {
        lp.logOut()

    });


});

