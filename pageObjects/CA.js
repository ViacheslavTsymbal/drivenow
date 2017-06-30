"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../helpers/helper");
var customerArea = (function () {
    function customerArea() {
        this.helper = new helper_1.Helper();
        this.switch = element(by.id("switch"));
        this.bmButton = element(by.css('a[href*="/fi/en/customer/bonusminutes/private"]'));
    }
    customerArea.prototype.isLoaded = function () {
        return this.helper.isDisplayed(this.bmButton);
    };
    return customerArea;
}());
exports.customerArea = customerArea;
