import {regPage} from "../../PageObjects/registration/common_reg"
import {Lisabon} from "../../PageObjects/registration/registratin_pt"
import {errors} from "../../Helpers/errors"

const reg = new regPage();
const tenant = new errors();
const pt = new Lisabon();

describe("Registration",function () {
    beforeEach(function () {
        console.log("---------------!!!PRODUCTION!!!PT non VV registration test--------------")
        //browser.get("https://www.drive-now.com");
        //browser.manage().addCookie("enabledFeatures","{%22developmentTools%22:[%22local%22%2C%22alpha%22]%2C%22lisbon%22:[%22local%22%2C%22alpha%22%2C%22beta%22%2C%22production%22]%2C%22contentSync%22:[%22alpha%22]%2C%22bypassCachedContent%22:[%22alpha%22%2C%22beta%22]%2C%22packages%22:[%22local%22%2C%22alpha%22%2C%22beta%22]%2C%22newRegistrationPT%22:[%22local%22%2C%22alpha%22%2C%22beta%22%2C%22production%22]}")
    });
    it("Lisbon registration", function () {
        browser.get("https://www.drive-now.com/pt/lisbon/registration/1");
        //reg.selectTenant(8);
        reg.verifyErrorsCount(3);
        reg.getErrorText().then((value => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.pt.email);
            expect(erText[1]).toEqual(tenant.pt.password);
        }));
        reg.enterUniqueEmail();
        reg.enterPassword("Qazwsx123");
        reg.clickNext();

        //Here comes Page 2
        reg.verifyErrorsCount(14); // Looks like a bug in schema
        reg.getErrorText().then((value) => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.pt.gender);
            expect(erText[1]).toEqual(tenant.pt.fistName);
            expect(erText[2]).toEqual(tenant.pt.lastName);
            expect(erText[3]).toEqual(tenant.pt.addressPT);
            expect(erText[4]).toEqual(tenant.pt.postCode);
            expect(erText[5]).toEqual(tenant.pt.city);
            expect(erText[6]).toEqual(tenant.pt.mobilePhone);
            expect(erText[7]).toEqual(tenant.pt.dateOfBirth); //BUG
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
        reg.clickaAtivateDNforBusinessCheckbox();
        reg.clickAddBusinessAddressCheckbox();
        reg.clickNext();
        reg.verifyErrorsCount(23);
        //deactivate checkboxes
        reg.clickAddBusinessAddressCheckbox();
        reg.clickaAtivateDNforBusinessCheckbox();
        reg.clickNext();

        //Here comes Page 3
        reg.clickNext();
        reg.verifyErrorsCount(11);
        reg.getErrorText().then((value) => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.pt.licence);
            expect(erText[1]).toEqual(tenant.pt.licenceDate);
            expect(erText[2]).toEqual(tenant.pt.pin);

        });
        pt.enterDrivingLicenceLisabon(123456789);
        pt.enterDrivingLicenceCountry(0);
        pt.licenceValidFromLisbon(5,5,5);
        pt.licenceValidToLisbon(12,11,1);;
        pt.enterPin(7777);
        reg.clickNext();
        //page 4s
        reg.verifyErrorsCount(7);
        reg.getErrorText().then((value) => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.pt.cardProvider);
            expect(erText[1]).toEqual(tenant.pt.cardNumber);
            expect(erText[2]).toEqual(tenant.pt.validUntil);
            expect(erText[3]).toEqual(tenant.pt.securityCode);
        });
        reg.chooseCreditCard(1);
        reg.enterCardNumber(4731185604795267);
        reg.enterCreditCardDates(9,1);
        reg.enterCardCvv(231);
        reg.validatePromoCodeLogic("SLAVA",tenant.pt.promocode); //BUG
        reg.selectCheckBoxes();
        reg.clickNext();
        reg.displayConfirmationText();

    });

});
