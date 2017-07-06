"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EC = protractor.ExpectedConditions;
var Helper = (function () {
    function Helper() {
        this.SHORT_WAIT = 5000;
        this.NORMAL_WAIT = 10000;
        this.LONG_WAIT = 30000;
    }
    /**
     * Returns timestamp
     * @returns {number}
     */
    Helper.getTimeStamp = function () {
        return (Math.floor(Date.now() / 1000));
    };
    ;
    Helper.prototype.addTimeStamp = function (value) {
        return value + Helper.getTimeStamp().toString();
    };
    ;
    /**
     * Waits for element to be visible and clickable and clicks after.
     * Is used to click only on buttons
     * @param element
     * @returns {Promise<void>}
     */
    Helper.prototype.selectDropDownNumber = function (element, number) {
        var options = element.all(by.tagName("option"))
            .then(function (options) {
            options[number].click();
        });
    };
    Helper.prototype.click = function (element) {
        return browser.wait(this.isClickable(element), this.NORMAL_WAIT, "Following element did not show up " + element.locator().toString())
            .then(function () { return element.click(); });
    };
    /**
     * Waits for element to be displayed and clicks after.
     * Is used to click non button elements
     * @param element
     * @returns {Promise<void>}
     */
    Helper.prototype.nonButtonClick = function (element) {
        return browser.wait(element.isDisplayed(), this.NORMAL_WAIT, "Following element did not show up " + element.locator().toString())
            .then(function () { return element.click(); });
    };
    /**
     * Waits for element to be displayed and sends keys
     *
     * @param element
     * @param value
     * @returns {Promise<void>}
     */
    Helper.prototype.sendKeys = function (element, value) {
        return browser.wait(this.isClickable(element), this.LONG_WAIT, "Following element did not show up " + element.locator().toString())
            .then(function () {
            element.clear().then(function () {
                element.sendKeys(value);
            });
        });
    };
    ;
    /**
     * Waits for element is present in DOM
     * @param element
     * @returns {webdriver.promise.Promise<T>}
     */
    Helper.prototype.isDisplayed = function (element) {
        return browser.wait(EC.presenceOf(element), this.LONG_WAIT, "Element did not show up - " + element.locator().toString());
    };
    ;
    /**
     * Waits for element is not present in DOM
     * @param element
     * @returns {webdriver.promise.Promise<T>}
     */
    Helper.prototype.isNotDisplayed = function (element) {
        return browser.wait(EC.stalenessOf(element), this.NORMAL_WAIT, "Element did not hide - " + element.locator().toString());
    };
    ;
    /**
     * Adds unique timestamp to passed string
     * @param value
     * @returns {string}
     */
    /**
     * Scrolls Page so that element would be centered.
     * @param element
     * @returns {Promise<R>}
     */
    Helper.prototype.scrollIntoScreenCenter = function (element) {
        return element.getLocation()
            .then(function (location) {
            return browser.executeScript("return window.outerHeight")
                .then(function (height) {
                var offset = Number(location.y) - Number(height) / 2 + 100;
                return browser.executeScript("window.scrollTo(0," + offset + ")");
            });
        });
    };
    ;
    /**
     * Get the inner text value for the Component.
     * @returns {webdriver.promise.Promise<string>}
     */
    Helper.prototype.getText = function (element) {
        return element.getTagName()
            .then(function (t) {
            var tagName = t.toLowerCase();
            if (tagName === "input" || tagName === "textarea") {
                return element.getAttribute("value");
            }
            else {
                return element.getText();
            }
        });
    };
    ;
    /**
     * Moves mouse over elementOnHover and afterwards clicks on elementToClick.
     * @param elementOnHover
     * @param elementToClick
     * @returns {webdriver.promise.Promise<void>}
     */
    Helper.prototype.showElementOnHoverAndClick = function (elementOnHover, elementToClick) {
        return browser.findElements(elementOnHover.locator()).then(function (elements) {
            browser.actions()
                .mouseMove(elements[0])
                .perform().then(function () {
                return browser.actions()
                    .click(elementToClick)
                    .perform();
            });
        });
    };
    ;
    /**
     *
     * @param element
     * @returns {webdriver.until.Condition<T>}
     */
    Helper.prototype.isClickable = function (element) {
        return EC.and(EC.visibilityOf(element), EC.elementToBeClickable(element));
    };
    ;
    Helper.prototype.mail = function () {
        var notifier = require('mail-notifier');
        var imap = {
            user: "meetjoeb11ack@gmail.com",
            password: "Nhjudfhnhjudfh1123",
            host: "imap.gmail.com",
            port: 993,
            tls: true,
            tlsOptions: { rejectUnauthorized: false },
            markSeen: true,
        };
        return notifier(imap).on('mail', function (mail) { console.log(mail); }).start();
    };
    return Helper;
}());
exports.Helper = Helper;
