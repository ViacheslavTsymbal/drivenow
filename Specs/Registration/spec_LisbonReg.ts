import {regPage} from "../../PageObjects/registration/common_reg"
import {Lisabon} from "../../PageObjects/registration/registratin_pt"
import {errors} from "../../Helpers/errors"

const reg = new regPage();
const tenant = new errors();
const pt = new Lisabon();

describe("Registration",function () {
    beforeEach(function () {
       //browser.get("/de/berlin/registration/1");
    });



it("Lisbon registration", function () {
    browser.get("https://www.beta.drive-now.com/en/lisbon/registration/1");
    //reg.selectTenant(8);
    reg.clickNext();
    reg.verifyErrorsCount(3);
    reg.getErrorText().then((value => {
        let erText = value.filter(el => el !== "");
        expect(erText[0]).toEqual(tenant.en.ptEmail);
        expect(erText[1]).toEqual(tenant.en.password);
    }));
    reg.enterUniqueEmail();
    reg.enterPassword("Qazwsx123");
    reg.clickNext();
    //page 2
    reg.clickNext();
    reg.getErrorText().then((value) => {
        let erText = value.filter(el => el !== "");
        expect(erText[0]).toEqual(tenant.en.gender);
        expect(erText[1]).toEqual(tenant.en.fistName);
        expect(erText[2]).toEqual(tenant.en.lastName);
        expect(erText[3]).toEqual(tenant.en.addressPT);
        expect(erText[4]).toEqual(tenant.en.postCode);
        expect(erText[5]).toEqual(tenant.en.city);
        expect(erText[6]).toEqual(tenant.en.mobilePhone);
        expect(erText[7]).toEqual(tenant.en.dateOfBirthPT); //BUG
    });
    reg.selectGender();
    reg.enterName("Automation","BOT");
    pt.enterLisbonStreetDetails("RUA DE SANTA MARTA 16E 2 ANDAR");
    reg.enterPostalCode("1250-333");
    reg.enterPhone("00380","939177068");
    reg.enterCity("Lisbon");
    pt.selectDateOfBirth(9);
    pt.selectMonthOfBirth(12);
    pt.selectYearOfBirth(28);
    reg.clickNext();
    //page 3
    reg.clickNext();
    reg.verifyErrorsCount(11);
    reg.getErrorText().then((value) => {
        let erText = value.filter(el => el !== "");
        expect(erText[0]).toEqual(tenant.en.licence);
        expect(erText[1]).toEqual(tenant.en.licenceDate);
        expect(erText[2]).toEqual(tenant.en.pin);

    });
    pt.enterDrivingLicenceLisabon(123456789);
    pt.enterDrivingLicenceCountry(0);
    pt.licenceValidFromLisbon(5,5,5);
    pt.licenceValidToLisbon(12,11,1);;
    pt.enterPin(7777);
    reg.clickNext();
    //page 4
    reg.verifyErrorsCount(7);
    reg.getErrorText().then((value) => {
        let erText = value.filter(el => el !== "");
        expect(erText[0]).toEqual(tenant.en.cardProvider);
        expect(erText[1]).toEqual(tenant.en.cardNumber);
        expect(erText[2]).toEqual(tenant.en.validUntil);
        expect(erText[3]).toEqual(tenant.en.securityCode);
    });
    reg.chooseCreditCard(2);
    reg.enterCardNumber(4153013999701048);
    reg.enterCreditCardDates(2,3);
    reg.enterCardCvv(123);
    reg.validatePromoCodeLogic("DEFAULT",tenant.en.promocode);
    reg.selectCheckBoxes();
    reg.clickNext();
    reg.displayConfirmationText();





    });

});
