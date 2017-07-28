import {regPage} from "../../PageObjects/common_reg"
import {errors} from "../../Modules/components"
const reg = new regPage();
const tenant = new errors();

describe("Registration",function () {
    beforeEach(function () {
        browser.get("/de/berlin/registration/1");
    });



it("Lisbon registration", function () {
    browser.get("https://www.beta.drive-now.com/en/lisbon/registration/1");
    reg.selectTenant(8);
    reg.clickNext();
    reg.verifyErrorsCount(5);
    reg.enterUniqueEmail();
    reg.enterPassword("Qazwsx123");
    reg.selectSecurityQuestion(1);
    reg.enterSecurityAnswer("meet Joe Black");
    reg.clickNext();
    //page 2
    reg.clickNext();
    reg.verifyErrorsCount(15);
    reg.getErrorText().then((value) => {
        let erText = value.filter(el => el !== "");
        expect(erText[0]).toEqual(tenant.en.gender);
        expect(erText[1]).toEqual(tenant.en.fistName);
        expect(erText[2]).toEqual(tenant.en.lastName);
        expect(erText[3]).toEqual(tenant.en.street);
        expect(erText[4]).toEqual(tenant.en.streetNumber);
        expect(erText[5]).toEqual(tenant.en.postCode);
        expect(erText[6]).toEqual(tenant.en.city);
        expect(erText[7]).toEqual(tenant.en.mobilePhone);
        expect(erText[8]).toEqual(tenant.en.dateOfBirth);
    });
    reg.selectGender();
    reg.enterName("Automation","BOT");
    reg.enterStreetDetails("someStreet","22","optional street name");
    reg.enterPostalCode("1250-333");
    reg.enterPhone("00380","939177068");
    reg.enterCity("Lisbon");
    reg.selectDateOfBirth(9);
    reg.selectMonthOfBirth(12);
    reg.selectYearOfBirth(28);
    reg.clickNext();
    //page 3
    reg.clickNext();
    reg.verifyErrorsCount(11);
    reg.enterPin(7777);
    reg.enterDrivingLicenceLisabon(123456789);
    reg.selectLicenceCountry(0);
    reg.licenceValidFrom(5,2,2);
    reg.licenceValidTO(5,5,5);
    reg.clickNext();
    //page 4
    reg.chooseCreditCard(2);
    reg.enterCardNumber(4153013999701048);
    reg.enterCreditCardDates(2,3);
    reg.enterCardCvv(123);
    reg.selectCheckBoxes();
    reg.displayText();





    });

});
