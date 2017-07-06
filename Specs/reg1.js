"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_reg_1 = require("../PageObject/common_reg");
var components_1 = require("../Modules/components");
var reg = new common_reg_1.regPage();
var tenant = new components_1.errors();
beforeEach(function () {
    browser.get("/de/berlin/registration/1");
});
describe("Registration", function () {
    xit("Berlin registration", function () {
        //First Page
        reg.selectTenant(0);
        reg.verifyErrorsCount(6);
        reg.getErrorText().then(function (text) {
            var erText = text.filter(function (el) { return el !== ""; });
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
        reg.getErrorText().then(function (text) {
            var erText = text.filter(function (el) { return el !== ""; });
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
        });
        reg.selectGender();
        reg.enterName("Joe", "Black");
        reg.enterStreetDetails("some street", "22", "optional street name");
        reg.enterPostalCode("01100");
        reg.enterPhone("00380", "939177068");
        reg.enterCity("Munich");
        reg.selectPreferredCity(5);
        reg.selectDateOfBirth(9);
        reg.selectMonthOfBirth(12);
        reg.selectYearOfBirth(28);
        reg.selectDliCountry(5, 2, 10);
        reg.clickNext();
        //Page 3
        reg.verifyErrorsCount(8);
        reg.getErrorText().then(function (text) {
            var erText = text.filter(function (el) { return el !== ""; });
            expect(erText[0]).toEqual(tenant.de.cardProvider);
            expect(erText[1]).toEqual(tenant.de.cardNumber);
            expect(erText[2]).toEqual(tenant.de.cardDates);
            expect(erText[3]).toEqual(tenant.de.cvvCode);
        });
        reg.chooseCreditCard(2);
        reg.enterCardNumber(4153013999701048);
        reg.enterCreditCardDates(2, 3);
        reg.enterCardCvv(123);
        reg.finishReg();
        reg.displayText();
    });
    xit("Helsinki registration", function () {
        //First Page
        reg.selectTenant(3);
        reg.verifyErrorsCount(6);
        reg.getErrorText().then(function (text) {
            var erText = text.filter(function (el) { return el !== ""; });
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
        reg.getErrorText().then(function (value) {
            var erText = value.filter(function (el) { return el !== ""; });
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
        reg.enterName("Joe", "Black");
        reg.enterStreetDetails("some street", "22", "optional street name");
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
        reg.getErrorText().then(function (value) {
            var erText = value.filter(function (el) { return el !== ""; });
            expect(erText[0]).toEqual(tenant.fi.licence);
            expect(erText[1]).toEqual(tenant.fi.licenceDate);
        });
        reg.enterDrivingLicence("123456789");
        reg.licenceValidFrom(5, 2, 2);
        reg.clickNext();
        //Fourth Page
        reg.addCreditCardIframe(4153013999701048, "1229", "048");
        reg.finishReg();
        reg.displayText();
        browser.sleep(5000);
    });
    it("Milan registration", function () {
        reg.selectTenant(7);
        reg.verifyErrorsCount(6);
        reg.getErrorText().then(function (text) {
            var erText = text.filter(function (el) { return el !== ""; });
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
        reg.getErrorText().then(function (text) {
            var erText = text.filter(function (el) { return el !== ""; });
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
        reg.enterCity("Munich");
        reg.selectDateOfBirth(9);
        reg.selectMonthOfBirth(12);
        reg.selectYearOfBirth(28);
        reg.enterFiscalCodeCard("JOE BCK 90T09 F205J");
        reg.clickNext();
        //Page 3
        reg.clickNext();
        reg.verifyErrorsCount(10);
        reg.getErrorText().then(function (text) {
            var erText = text.filter(function (el) { return el !== ""; });
            expect(erText[0]).toEqual(tenant.it.licence);
            expect(erText[1]).toEqual(tenant.it.licenceDate);
        });
        reg.enterItDrivingLicence(12345689);
        reg.selectDliCountry(5, 5, 5);
        reg.clickNext();
        //Page 4
        reg.clickNext();
        reg.getErrorText().then(function (text) {
            var erText = text.filter(function (el) { return el !== ""; });
            console.log(erText);
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
        reg.enterITGTCapprove();
        reg.displayText();
    });
});
