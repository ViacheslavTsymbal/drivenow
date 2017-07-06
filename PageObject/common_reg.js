"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../Modules/helper");
var registration_de_1 = require("./registration_de");
var registration_it_1 = require("./registration_it");
var de = new registration_de_1.Germany();
var it = new registration_it_1.Milan();
var regPage = (function () {
    function regPage() {
        this.helper = new helper_1.Helper();
        //Page 1
        this.countrySelect = element(by.name("tenantSelector"));
        this.email_1 = element(by.name("email"));
        this.email_0 = element(by.css("label[class*='no-wrap-clip'][for='email']"));
        this.password_0 = element(by.css("label[class*='no-wrap-clip'][for='password']"));
        this.password_1 = element(by.name("password"));
        this.pin_0 = element(by.css("label[class*='no-wrap-clip'][for='pin']"));
        this.pin_1 = element(by.name("pin"));
        this.securityQuestion = element(by.name("securityQuestion"));
        this.securityAnswer = element(by.name("securityAnswer"));
        this.nextButton = element(by.css("button[class*='button blue']"));
        this.selectGenderCheckbox = element(by.css("label[for='primaryDetails-gender-M']"));
        this.firstName = element(by.name("firstName"));
        this.lastName = element(by.name("lastName"));
        //Page 2
        this.streetNumber_0 = element(by.css("label[class*='no-wrap-clip'][for='streetNumber']"));
        this.streetNumber_1 = element(by.name("streetNumber"));
        this.mobileCode = element(by.name("mobileNumber-country-code"));
        this.mobileNumber = element(by.name("mobileNumber-number"));
        this.street = element(by.name("street"));
        this.optionalStreet_0 = element(by.css("label[class*='no-wrap-clip'][for='streetAddition']"));
        this.optionalStreet_1 = element(by.name("streetAddition"));
        this.postalCode = element(by.name("areaCode"));
        this.city_0 = element(by.css("label[class*='no-wrap-clip'][for='city']"));
        this.city_1 = element(by.name("city"));
        this.age = element(by.name("age-day"));
        this.month = element(by.name("age-month"));
        this.year = element(by.name("age-year"));
        //Page 3
        this.licence_0 = element(by.css("label[class*='no-wrap-clip'][for='dlicNumberWithExplanation']"));
        this.licence_1 = element(by.name("dlicNumberWithExplanation"));
        this.lCountry = element(by.name("dlicCountry"));
        this.lDay = element(by.name("dlicCdate-day"));
        this.lMonth = element(by.name("dlicCdate-month"));
        this.lYear = element(by.name("dlicCdate-year"));
        this.expLDay = element(by.name("dlicExpDate-day"));
        this.expLMonth = element(by.name("dlicExpDate-month"));
        this.expLYear = element(by.name("dlicExpDate-year"));
        this.cardNumber = element(by.id("cardNumber"));
        this.cardValidTo = element(by.name("expiry"));
        this.cvv = element(by.name("cvv"));
        this.okButton = element(by.css(".submit-button-text"));
        this.agreeCheckbox = element(by.id("approveTos-container"));
        this.errorMessage = element.all(by.css("[class*='content-message']"));
        this.message = element.all(by.css("[class*='cms-injected']")).get(0);
        this.sms1 = element(by.css("[class='registration-header']"));
    }
    regPage.prototype.getErrorText = function () {
        return this.errorMessage.getText();
    };
    regPage.prototype.verifyErrors = function (errors, object) {
        expect(errors[0]).toEqual(object.email);
        expect(errors[1]).toEqual(object.password);
        expect(errors[2]).toEqual(object.pin);
        expect(errors[3]).toEqual(object.sQuestion);
        expect(errors[4]).toEqual(object.sAnswer);
    };
    regPage.prototype.verifyErrorsCount = function (num) {
        this.helper.click(this.nextButton);
        this.errorMessage.count()
            .then(function (size) {
            expect(size).toEqual(num);
            return browser.sleep(1000);
        });
    };
    regPage.prototype.selectTenant = function (tenant) {
        this.helper.selectDropDownNumber(this.countrySelect, tenant);
        this.helper.isDisplayed(this.email_0);
    };
    ;
    regPage.prototype.selectPreferredCity = function (city) {
        this.helper.selectDropDownNumber(de.special_preferred_city, (city));
    };
    regPage.prototype.enterUniqueEmail = function () {
        var _this = this;
        var uniqMail;
        uniqMail = this.helper.addTimeStamp("meetjoeb11ack+") + "@gmail.com";
        this.helper.click(this.email_0)
            .then(function () { return _this.helper.sendKeys(_this.email_1, uniqMail); });
    };
    ;
    regPage.prototype.enterPassword = function (password) {
        var _this = this;
        this.helper.click(this.password_0)
            .then(function () { return _this.helper.sendKeys(_this.password_1, password); });
    };
    ;
    regPage.prototype.enterPin = function (pin) {
        var _this = this;
        this.helper.click(this.pin_0)
            .then(function () { return _this.helper.sendKeys(_this.pin_1, pin); });
    };
    ;
    regPage.prototype.selectSecurityQuestion = function (question) {
        this.helper.selectDropDownNumber(this.securityQuestion, question);
    };
    ;
    regPage.prototype.enterSecurityAnswer = function (answer) {
        this.helper.sendKeys(this.securityAnswer, answer);
    };
    regPage.prototype.clickNext = function () {
        return this.helper.click(this.nextButton);
    };
    regPage.prototype.selectGender = function () {
        this.helper.nonButtonClick(this.selectGenderCheckbox);
    };
    regPage.prototype.enterName = function (firstName, lastName) {
        this.helper.sendKeys(this.firstName, firstName);
        this.helper.sendKeys(this.lastName, lastName);
    };
    regPage.prototype.enterStreetDetails = function (street, streetNumber, additionalStreet) {
        var _this = this;
        this.helper.sendKeys(this.street, street);
        this.helper.click(this.streetNumber_0)
            .then(function () {
            _this.helper.sendKeys(_this.streetNumber_1, streetNumber);
        });
        this.helper.click(this.optionalStreet_0)
            .then(function () {
            _this.helper.sendKeys(_this.optionalStreet_1, additionalStreet);
        });
    };
    regPage.prototype.enterPostalCode = function (postalCode) {
        this.helper.sendKeys(this.postalCode, postalCode);
    };
    regPage.prototype.enterPhone = function (mobileCode, mobileNumber) {
        browser.sleep(500);
        this.helper.sendKeys(this.mobileCode, mobileCode);
        this.helper.sendKeys(this.mobileNumber, mobileNumber);
    };
    regPage.prototype.enterCity = function (city) {
        var _this = this;
        this.helper.click(this.city_0)
            .then(function () {
            _this.helper.sendKeys(_this.city_1, city);
        });
    };
    ;
    regPage.prototype.selectDateOfBirth = function (date) {
        this.helper.selectDropDownNumber(this.age, date);
    };
    ;
    regPage.prototype.selectMonthOfBirth = function (month) {
        this.helper.selectDropDownNumber(this.month, month);
    };
    ;
    regPage.prototype.selectYearOfBirth = function (year) {
        this.helper.selectDropDownNumber(this.year, year);
    };
    ;
    regPage.prototype.enterDrivingLicence = function (licence) {
        this.helper.click(this.licence_0);
        this.helper.sendKeys(this.licence_1, licence);
    };
    regPage.prototype.selectLicenceCountry = function (lcountry) {
        this.helper.selectDropDownNumber(this.lCountry, lcountry);
    };
    regPage.prototype.licenceValidFrom = function (day, month, year) {
        this.helper.selectDropDownNumber(this.lDay, day);
        this.helper.selectDropDownNumber(this.lMonth, month);
        this.helper.selectDropDownNumber(this.lYear, year);
    };
    regPage.prototype.licenceValidTO = function (day, month, year) {
        this.helper.selectDropDownNumber(this.expLDay, day);
        this.helper.selectDropDownNumber(this.expLMonth, month);
        this.helper.selectDropDownNumber(this.expLYear, year);
    };
    regPage.prototype.addCreditCardIframe = function (number, expDate, cvv) {
        browser.sleep(3000);
        browser.switchTo().frame(0);
        this.helper.sendKeys(this.cardNumber, number);
        this.helper.sendKeys(this.cardValidTo, expDate);
        this.helper.sendKeys(this.cvv, cvv);
        this.helper.click(this.okButton);
        browser.switchTo().defaultContent();
    };
    regPage.prototype.finishReg = function () {
        this.helper.scrollIntoScreenCenter(this.agreeCheckbox);
        this.helper.click(this.agreeCheckbox);
        this.helper.click(this.nextButton);
    };
    regPage.prototype.displayText = function () {
        this.helper.isDisplayed(this.sms1);
        this.message.getText()
            .then(function (text) {
            console.log(text);
            // expect(text).toEqual("We've sent an email to " +this.uniqMail+" and a text message to 00380939177068.")
        });
    };
    regPage.prototype.selectDliCountry = function (day, month, year) {
        this.helper.scrollIntoScreenCenter(de.de_dLiCountryDay);
        this.helper.selectDropDownNumber(de.de_dLiCountryDay, day);
        this.helper.selectDropDownNumber(de.de_dLiCountryMonth, month);
        this.helper.selectDropDownNumber(de.de_dLiCountryYear, year);
    };
    regPage.prototype.chooseCreditCard = function (card) {
        this.helper.selectDropDownNumber(de.de_creditCardDropdown, card);
    };
    regPage.prototype.enterCardNumber = function (number) {
        this.helper.sendKeys(de.de_creditCardField, number);
    };
    regPage.prototype.enterCreditCardDates = function (year, month) {
        this.helper.selectDropDownNumber(de.creditCardYear, year);
        this.helper.selectDropDownNumber(de.creditCardMonth, month);
    };
    regPage.prototype.enterCardCvv = function (cvv) {
        var _this = this;
        this.helper.click(de.creditCardCvv_0)
            .then(function () {
            _this.helper.sendKeys(de.creditCardCvv_1, cvv);
        });
    };
    regPage.prototype.enterFiscalCodeCard = function (code) {
        this.helper.click(it.codiceFiscale_0);
        this.helper.sendKeys(it.codiceFiscale_1, code);
    };
    regPage.prototype.enterItDrivingLicence = function (license) {
        this.helper.click(it.licence_0);
        this.helper.sendKeys(it.licence_1, license);
    };
    regPage.prototype.enterITGTCapprove = function () {
        this.helper.scrollIntoScreenCenter(it.agreeCheckbox);
        this.helper.click(it.agreeCheckbox);
        this.helper.click(it.approvePrivacyPolicy);
    };
    return regPage;
}());
exports.regPage = regPage;
