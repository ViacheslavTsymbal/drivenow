import {regPage} from "../../PageObjects/registration/common_reg"
import {errors} from "../../Helpers/errors"
import {Requests} from "../../Helpers/xhr"

const reg = new regPage();
const tenant = new errors();
const api = new Requests();


 let flow = browser.controlFlow();
      

describe("Registration",function () {
    beforeEach(function () {
    browser.get("/de/berlin/registration/1");


});

    it("Berlin registration", function () {
        //First Page
        reg.selectTenant(0);
        reg.verifyErrorsCount(6);
        reg.getErrorText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.de.email);
            expect(erText[1]).toEqual(tenant.de.password);
            expect(erText[2]).toEqual(tenant.de.pin);
            expect(erText[3]).toEqual(tenant.de.sQuestion);
            expect(erText[4]).toEqual(tenant.de.sAnswer);
        });
        reg.enterUniqueEmail();
        reg.enterPassword("Qazwsx123");
        reg.enterPin("7777");
        reg.selectSecurityQuestion("3");
        reg.enterSecurityAnswer("meetjoeblack");
        reg.clickNext();
        //Second page
        reg.verifyErrorsCount(21);
        reg.getErrorText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.de.gender);
            expect(erText[1]).toEqual(tenant.de.fistName);
            expect(erText[2]).toEqual(tenant.de.lastName);
            expect(erText[3]).toEqual(tenant.de.street);
            expect(erText[4]).toEqual(tenant.de.streetNumber);
            expect(erText[5]).toEqual(tenant.de.postCode);
            expect(erText[6]).toEqual(tenant.de.city);
            expect(erText[7]).toEqual(tenant.de.mobilePhone);
            expect(erText[8]).toEqual(tenant.de.preferredCity);
            expect(erText[9]).toEqual(tenant.de.dateOfBirth);
            expect(erText[10]).toEqual(tenant.de.dlicDate)

        });
        reg.selectGender();
        reg.enterName("Joe","Black");
        reg.enterStreetDetails("some street","22","optional street name");
        reg.enterPostalCode("01100");
        reg.enterPhone("00380","939177068");
        reg.enterCity("Berlin");
        reg.selectPreferredCity(5);
        reg.selectDateOfBirth(9);
        reg.selectMonthOfBirth(12);
        reg.selectYearOfBirth(28);
        reg.selectDliCountry(5,2,10);
        reg.clickNext();
        //Page 3
        reg.verifyErrorsCount(8);
        reg.getErrorText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.de.cardProvider);
            expect(erText[1]).toEqual(tenant.de.cardNumber);
            expect(erText[2]).toEqual(tenant.de.cardDates);
            expect(erText[3]).toEqual(tenant.de.cvvCode);
        });
        reg.chooseCreditCard(2);
        reg.enterCardNumber(4153013999701048);
        reg.enterCreditCardDates(2,3);
        reg.enterCardCvv(123);
        reg.validatePromoCodeLogic("DEFAULT",tenant.de.promoCodeMessage)
        reg.selectCheckBoxes();
        reg.clickNext();
        reg.displayConfirmationText();

    });

});


