"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../helpers/helper");
var landingPage = (function () {
    function landingPage() {
        this.helper = new helper_1.Helper();
        this.url = "/en";
        this.profile = element(by.css("[class='icon icon-profile']"));
        this.email_0 = element(by.css("label[class*='no-wrap-clip'][for='email']"));
        this.email_1 = element(by.name("email"));
        this.password_0 = element(by.css("label[class*='no-wrap-clip'][for='password']"));
        this.password_1 = element(by.name("password"));
        this.loginBtn = element(by.buttonText("Login"));
    }
    landingPage.prototype.Login = function (mail, password) {
        var _this = this;
        browser.get(this.url);
        this.helper.click(this.profile);
        this.helper.click(this.email_0)
            .then(function () {
            _this.helper.sendKeys(_this.email_1, mail);
        });
        this.helper.click(this.password_0)
            .then(function () {
            _this.helper.sendKeys(_this.password_1, password);
        });
        this.helper.click(this.loginBtn);
    };
    return landingPage;
}());
exports.landingPage = landingPage;
