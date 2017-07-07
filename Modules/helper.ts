const EC = protractor.ExpectedConditions;

export class Helper {

    public SHORT_WAIT: number = 5000;
    public NORMAL_WAIT: number = 10000;
    public LONG_WAIT: number = 30000;
    /**
     * Returns timestamp
     * @returns {number}
     */
    public static  getTimeStamp() {
        return (Math.floor(Date.now() / 1000));
    };

    public addTimeStamp(value: string) {
        return value + Helper.getTimeStamp().toString();
    };

    /**
     * Waits for element to be visible and clickable and clicks after.
     * Is used to click only on buttons
     * @param element
     * @returns {Promise<void>}
     */
    public selectDropDownNumber(element,number){

            let options = element.all(by.tagName("option"))
                .then(function (options) {
                    options[number].click()
                });

    }

    public open (url){
        browser.get(url);
       return browser.getCurrentUrl().then((url) => {
            return url
        })
    }


    public click(element) {
        return browser.wait(
            this.isClickable(element),
            this.NORMAL_WAIT,
            "Following element did not show up " + element.locator().toString())
            .then(() => element.click());
    }

    /**
     * Waits for element to be displayed and clicks after.
     * Is used to click non button elements
     * @param element
     * @returns {Promise<void>}
     */
    public nonButtonClick(element) {
        return browser.wait(
            element.isDisplayed(),
            this.NORMAL_WAIT,
            "Following element did not show up " + element.locator().toString())
            .then(() => element.click());
    }

    /**
     * Waits for element to be displayed and sends keys
     *
     * @param element
     * @param value
     * @returns {Promise<void>}
     */
    public sendKeys(element: protractor.ElementFinder, value: string) {
        return browser.wait(
            this.isClickable(element),
            this.LONG_WAIT,
            "Following element did not show up " + element.locator().toString())
            .then(() => {
                element.clear().then(function(){
                    element.sendKeys(value);

                });
            });
    };

    /**
     * Waits for element is present in DOM
     * @param element
     * @returns {webdriver.promise.Promise<T>}
     */
    public isDisplayed(element: protractor.ElementFinder) {
        return browser.wait(
            EC.presenceOf(element),
            this.LONG_WAIT,
            "Element did not show up - " + element.locator().toString());
    };

    /**
     * Waits for element is not present in DOM
     * @param element
     * @returns {webdriver.promise.Promise<T>}
     */
    public isNotDisplayed(element: protractor.ElementFinder) {
        return browser.wait(
            EC.stalenessOf(element),
            this.NORMAL_WAIT,
            "Element did not hide - " + element.locator().toString());
    };

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
    public scrollIntoScreenCenter(element: protractor.ElementFinder): protractor.promise.Promise<{}> {
        return element.getLocation()
            .then(function (location) {
                return browser.executeScript("return window.outerHeight")
                    .then(function (height) {
                        const offset = Number(location.y) - Number(height) / 2 + 100;
                        return browser.executeScript("window.scrollTo(0," + offset + ")");
                    });
            });
    };

    /**
     * Get the inner text value for the Component.
     * @returns {webdriver.promise.Promise<string>}
     */
    public getText(element: protractor.ElementFinder): webdriver.promise.Promise<string> {
        return element.getTagName()
            .then(t => {
                const tagName = t.toLowerCase();

                if (tagName === "input" || tagName === "textarea") {
                    return element.getAttribute("value");
                } else {
                    return element.getText();
                }
            });
    };

    /**
     * Moves mouse over elementOnHover and afterwards clicks on elementToClick.
     * @param elementOnHover
     * @param elementToClick
     * @returns {webdriver.promise.Promise<void>}
     */
    public showElementOnHoverAndClick(elementOnHover, elementToClick) {
        return browser.findElements(elementOnHover.locator()).then((elements) => {
            browser.actions()
                .mouseMove(elements[0])
                .perform().then(() => {
                return browser.actions()
                    .click(elementToClick)
                    .perform();
            });
        });
    };
    /**
     *
     * @param element
     * @returns {webdriver.until.Condition<T>}
     */
    private isClickable(element: protractor.ElementFinder) {
        return EC.and(
            EC.visibilityOf(element),
            EC.elementToBeClickable(element));
    };

    public mail(){
        let notifier = require('mail-notifier');

        let imap = {
            user: "meetjoeb11ack@gmail.com",
            password: "Nhjudfhnhjudfh1123",
            host: "imap.gmail.com",
            port: 993, // imap port
            tls: true,// use secure connection
            tlsOptions: { rejectUnauthorized: false },
            markSeen:true,

        };

        return notifier(imap).on('mail',function(mail){console.log(mail);}).start();
    }
}
