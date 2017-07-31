import {regPage} from "../../PageObjects/common_reg"
import {errors} from "../../Modules/components"
const reg = new regPage();
const tenant = new errors();

describe("FI registration",function () {
    beforeEach(function () {
        browser.get("/de/berlin/registration/1");
    });


    it("Milan registration", function () {
        reg.selectTenant(7);
        reg.verifyErrorsCount(6);
        reg.getErrorText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.it.email);
            expect(erText[1]).toEqual(tenant.it.password);
            expect(erText[2]).toEqual(tenant.it.pin);
            expect(erText[3]).toEqual(tenant.it.sQuestion);
            expect(erText[4]).toEqual(tenant.it.sAnswer);
        });
        reg.enterUniqueEmail();
        reg.enterPassword("Qazwsx123");
        reg.enterPin("7777");
        reg.selectSecurityQuestion("3");
        reg.enterSecurityAnswer("meetjoeblack");
        reg.clickNext();

        //Second page
        reg.verifyErrorsCount(16);
        reg.getErrorText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.it.gender);
            expect(erText[1]).toEqual(tenant.it.fistName);
            expect(erText[2]).toEqual(tenant.it.lastName);
            expect(erText[3]).toEqual(tenant.it.street);
            expect(erText[4]).toEqual(tenant.it.streetNumber);
            expect(erText[5]).toEqual(tenant.it.postCode);
            expect(erText[6]).toEqual(tenant.it.city);
            expect(erText[7]).toEqual(tenant.it.mobilePhone);
            expect(erText[8]).toEqual(tenant.it.dateOfBirth);
            expect(erText[9]).toEqual(tenant.it.fiscalCode);


        });
        reg.selectGender();
        reg.enterName("Joe", "Black");
        reg.enterStreetDetails("some street", "22", "optional street name");
        reg.enterPostalCode("01100");
        reg.enterPhone("00380", "939177068");
        reg.enterCity("Milan");
        reg.selectDateOfBirth(9);
        reg.selectMonthOfBirth(12);
        reg.selectYearOfBirth(28);
        reg.enterFiscalCodeCard("JOE BCK 90T09 F205J");
        reg.clickNext();

        //Page 3
        reg.clickNext();
        reg.verifyErrorsCount(10);
        reg.getErrorText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.it.licence);
            expect(erText[1]).toEqual(tenant.it.licenceDate);


        });
        reg.enterDrivingLicenceMilan(12345689);
        reg.selectDliCountry(5, 5, 5);
        reg.clickNext();
        //Page 4
        reg.clickNext();
        reg.getErrorText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.it.cardProvider);
            expect(erText[1]).toEqual(tenant.it.cardNumber);
            expect(erText[2]).toEqual(tenant.it.cardDates);
            expect(erText[3]).toEqual(tenant.it.cvvCode);
        });
        //page 4
        reg.chooseCreditCard(2);
        reg.enterCardNumber(4153013999701048);
        reg.enterCreditCardDates(2, 3);
        reg.enterCardCvv(123);
        reg.selectCheckBoxesMilan();
        reg.displayConfirmationText();

    });
});
