import {regPage} from "../../PageObjects/registration/common_reg"
import {errors} from "../../Helpers/errors"
import {Helsinki} from "../../PageObjects/registration/registration_fi"

const reg = new regPage();
const tenant = new errors();
const fi = new Helsinki();

describe("FI registration",function () {
    beforeEach(function () {
        browser.get("/de/berlin/registration/1");
    });


    it("Helsinki registration", function () {

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
        reg.enterUniqueEmail();
        reg.enterPassword("Qazwsx123");
        reg.enterPin("7777");
        reg.selectSecurityQuestion("3");
        reg.enterSecurityAnswer("meetjoeblack");
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
        reg.selectGender();
        reg.enterName("Automation", "BOT");
        reg.enterStreetDetails("someStreet", "22", "optional street name");
        reg.enterPostalCode("01100");
        reg.enterPhone("00380", "939177068");
        reg.enterCity("Helsinki");
        reg.selectDateOfBirth(9);
        reg.selectMonthOfBirth(12);
        reg.selectYearOfBirth(28);
        reg.clickNext();

        //ThirdPage
        reg.licenceValidFrom(5, 2, 1);
        reg.licenceValidTO(5, 5, 5);
        reg.verifyErrorsCount(10);
        reg.getErrorText().then((value) => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.fi.licence);
            expect(erText[1]).toEqual(tenant.fi.licenceDate);
        });
        reg.enterDrivingLicence("123456789");
        reg.licenceValidFrom(5, 2, 2);
        reg.clickNext();

        //Fourth Page
        fi.addCreditCardIframe(4153013999701048, "1229", "048");
        reg.validatePromoCodeLogic("DEFAULT",tenant.fi.promoCodeMessage)
        reg.selectCheckBoxes();
        reg.displayConfirmationText();


    });
});
