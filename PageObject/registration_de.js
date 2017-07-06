"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Germany = (function () {
    function Germany() {
        this.de_creditCardDropdown = element(by.name("payment-CC-payment-method-card-provider"));
        this.de_creditCardField = element(by.name("payment-CC-payment-method-card-number"));
        this.de_dLiCountryDay = element(by.name("dlicCdate-day"));
        this.de_dLiCountryMonth = element(by.name("dlicCdate-month"));
        this.de_dLiCountryYear = element(by.name("dlicCdate-year"));
        this.london_sub_building_0 = element(by.css("label[class*='no-wrap-clip'][for='buildingName']"));
        this.london_sub_building_1 = element(by.name("buildingName"));
        this.special_preferred_city = element(by.name("preferredCity"));
        this.creditCardYear = element(by.name("payment-CC-payment-method-valid-until-year"));
        this.creditCardMonth = element(by.name("payment-CC-payment-method-valid-until-month"));
        this.creditCardCvv_0 = element(by.css("label[class*='no-wrap-clip'][for='payment-CC-payment-method-security-code']"));
        this.creditCardCvv_1 = element(by.name("payment-CC-payment-method-security-code"));
    }
    return Germany;
}());
exports.Germany = Germany;
