"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registration_1 = require("../pageObjects/registration");
var reg = new registration_1.regPage();
beforeEach(function () {
    browser.get("/de/berlin/registration/1");
});
var en_errors = {
    "email": "Please enter a valid e-mail address",
    "password": "Please enter a valid password",
    "pin": "Enter PIN consisting of 4 digits",
    "sQuestion": "Please select a security question",
    "sAnswer": "Please enter security answer",
    "gender": "Please select gender",
    "fistName": "Please enter first name",
    "lastName": "Please enter last name",
    "street": "Please enter street",
    "streetNumber": "No.",
    "postCode": "Postcode",
    "city": "Please enter city",
    "mobilePhone": "Please enter mobile phone number",
    "dateOfBirth": "Please select valid date of birth",
    "licence": "Please enter the number of your driving licence.",
    "licenceDate": "Please select issuing date",
    "preferredCity": "Please select preferred city"
};
var fi_errors = {
    "email": "Syötä kelvollinen sähköpostiosoite",
    "password": "Syötä kelvollinen salasana",
    "pin": "Anna 4-numeroinen pääsykoodisi",
    "sQuestion": "Valitse varmistuskysymys",
    "sAnswer": "Syötä vastaus varmistuskysymykseen",
    "gender": "Valitse sukupuoli",
    "fistName": "Syötä etunimi",
    "lastName": "Syötä sukunimi",
    "street": "Syötä kadunnimi",
    "streetNumber": "Katunro",
    "postCode": "Postinumero",
    "city": "Syötä postitoimipaikka",
    "mobilePhone": "Syötä matkapuhelinnumero",
    "dateOfBirth": "Valitse kelvollinen syntymäaika",
    "licence": "Syötä ajokorttisi numero.",
    "licenceDate": "Valitse myöntämispäivä",
    "confirmation": "Olemme lähettäneet sähköpostin osoitteeseen meetjoeb11ack+1498723830@gmail.com ja tekstiviestin numeroon 00380939177068."
};
var de_errors = {
    "email": "Bitte gültige E-Mail-Adresse eingeben",
    "password": "Bitte gültiges Passwort eingeben",
    "pin": "Bitte PIN bestehend aus 4 Ziffern eingeben",
    "sQuestion": "Bitte Sicherheitsfrage auswählen",
    "sAnswer": "Bitte Antwort auf Sicherheitsfrage eingeben",
    "gender": "Bitte Anrede wählen",
    "fistName": "Bitte Vorname eingeben",
    "lastName": "Bitte Nachname eingeben",
    "street": "Bitte Straße eingeben",
    "streetNumber": "Nr.",
    "postCode": "PLZ",
    "city": "Bitte Ort eingeben",
    "mobilePhone": "Bitte gültige Mobilfunknummer eingeben",
    "preferredCity": "Bitte bevorzugte Stadt auswählen",
    "dateOfBirth": "Bitte gültiges Geburtsdatum auswählen",
    "licence": "Please enter the number of your driving licence.",
    "licenceDate": "Please select issuing date",
    "cardProvider": "Bitte Kartenanbieter auswählen",
    "cardNumber": "Bitte gültige Kreditkartennummer eingeben",
    "cardDates": "Bitte gültigen Wert eingeben",
    "cvvCode": "Bitte Sicherheitscode eingeben"
};
it("Berlin registration", function () {
    //First Page
    reg.selectTenant(0);
    reg.verifyErrorsCount(6);
    reg.getErrorText().then(function (text) {
        var erText = text.filter(function (el) { return el !== ""; });
        expect(erText[0]).toEqual(de_errors.email);
        expect(erText[1]).toEqual(de_errors.password);
        expect(erText[2]).toEqual(de_errors.pin);
        expect(erText[3]).toEqual(de_errors.sQuestion);
        expect(erText[4]).toEqual(de_errors.sAnswer);
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
        expect(erText[0]).toEqual(de_errors.gender);
        expect(erText[1]).toEqual(de_errors.fistName);
        expect(erText[2]).toEqual(de_errors.lastName);
        expect(erText[3]).toEqual(de_errors.street);
        expect(erText[4]).toEqual(de_errors.streetNumber);
        expect(erText[5]).toEqual(de_errors.postCode);
        expect(erText[6]).toEqual(de_errors.city);
        expect(erText[7]).toEqual(de_errors.mobilePhone);
        expect(erText[8]).toEqual(de_errors.preferredCity);
        expect(erText[9]).toEqual(de_errors.dateOfBirth);
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
        expect(erText[0]).toEqual(de_errors.cardProvider);
        expect(erText[1]).toEqual(de_errors.cardNumber);
        expect(erText[2]).toEqual(de_errors.cardDates);
        expect(erText[3]).toEqual(de_errors.cvvCode);
    });
    reg.chooseCreditCard(2);
    reg.enterCardNumber(4153013999701048);
    reg.enterCreditCardDates(2, 3);
    reg.enterCardCvv(123);
    reg.finishReg();
    reg.displayText();
});
it("Helsinki registration", function () {
    //First Page
    reg.selectTenant(3);
    reg.verifyErrorsCount(6);
    reg.getErrorText().then(function (text) {
        var erText = text.filter(function (el) { return el !== ""; });
        expect(erText[0]).toEqual(fi_errors.email);
        expect(erText[1]).toEqual(fi_errors.password);
        expect(erText[2]).toEqual(fi_errors.pin);
        expect(erText[3]).toEqual(fi_errors.sQuestion);
        expect(erText[4]).toEqual(fi_errors.sAnswer);
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
        expect(erText[0]).toEqual(fi_errors.gender);
        expect(erText[1]).toEqual(fi_errors.fistName);
        expect(erText[2]).toEqual(fi_errors.lastName);
        expect(erText[3]).toEqual(fi_errors.street);
        expect(erText[4]).toEqual(fi_errors.streetNumber);
        expect(erText[5]).toEqual(fi_errors.postCode);
        expect(erText[6]).toEqual(fi_errors.city);
        expect(erText[7]).toEqual(fi_errors.mobilePhone);
        expect(erText[8]).toEqual(fi_errors.dateOfBirth);
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
        expect(erText[0]).toEqual(fi_errors.licence);
        expect(erText[1]).toEqual(fi_errors.licenceDate);
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
