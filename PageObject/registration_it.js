"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by olm on 7/6/17.
 */
var Milan = (function () {
    function Milan() {
        this.codiceFiscale_0 = element(by.css("label[class*='no-wrap-clip'][for='codiceFiscale']"));
        this.codiceFiscale_1 = element(by.name("codiceFiscale"));
        this.licence_0 = element(by.css("label[class*='no-wrap-clip'][for='dlicNumber']"));
        this.licence_1 = element(by.name("dlicNumber"));
        this.approvePrivacyPolicy = element(by.id("approvePrivacyPolicy"));
        this.agreeCheckbox = element(by.id("approveTos-container"));
    }
    return Milan;
}());
exports.Milan = Milan;
