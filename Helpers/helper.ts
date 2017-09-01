const EC = protractor.ExpectedConditions;
let notifier = require('mail-notifier');
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();
let regLink;
let fs = require('fs');
let file = fs.readFileSync('Helpers/user.json');
let userData = JSON.parse(file);
let flow = browser.controlFlow();

export class Helper {

    public SHORT_WAIT: number = 5000;
    public NORMAL_WAIT: number = 10000;
    public LONG_WAIT: number = 30000;

    public static  getTimeStamp() {
        return (Math.floor(Date.now() / 1000));
    };

    public addTimeStamp(value: string) {
        return value + Helper.getTimeStamp().toString();
    };

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
            this.LONG_WAIT,
            "Following element did not show up " + element.locator().toString())
            .then(() => element.click());
    }

    public nonButtonClick(element) {
        return browser.wait(
            element.isDisplayed(),
            this.NORMAL_WAIT,
            "Following element did not show up " + element.locator().toString())
            .then(() => element.click());
    }

    public sendKeys(element: protractor.ElementFinder, value: string) {
         browser.wait(
            this.isClickable(element),
            this.LONG_WAIT,
            "Following element did not show up " + element.locator().toString())
            .then(() => {
                element.clear().then(() => {
                    element.sendKeys(value);

                });


            });
    };

    public clearKeys(element: protractor.ElementFinder) {
        browser.wait(
            this.isClickable(element),
            this.LONG_WAIT,
            "Following element did not show up " + element.locator().toString())
            .then(() => {
                element.click();

            });
    };

    public isDisplayed(element) {
        return browser.wait(
            EC.presenceOf(element),
            this.LONG_WAIT,
            "Element did not show up - " + element.locator().toString());
    };

    public isNotDisplayed(element: protractor.ElementFinder) {
        return browser.wait(
            EC.stalenessOf(element),
            this.NORMAL_WAIT,
            "Element did not hide - " + element.locator().toString());
    };

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

    private isClickable(element: protractor.ElementFinder) {
        return EC.and(
            EC.visibilityOf(element),
            EC.elementToBeClickable(element));
    };
    public getRandom(obj){

        let keys = Object.keys(obj);
        return obj[keys[ keys.length * Math.random() << 0]];


    }
    public isVisible(element){
        return EC.visibilityOf(element)
    };
    public get(){
        browser.wait(function () {
            let path = 'https://beta.content-api.drivenow.com/web/crm/bonusminutes/private?country=fi&language=en'
            xhr.open('GET',path,false);
            xhr.setRequestHeader("X-Auth-Token", 'd3e03345ae2d17c5cd022e240efff6df');
            xhr.setRequestHeader("X-Api-Key", 'rz7a9SgrPfHwTz3gFza81XnoXNQ7IuIU');
            xhr.send();
            if (xhr.status != 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                console.log("????");
                console.log(JSON.parse(xhr.responseText));
            }
        },100000)


    }

    public getEmailLink(){
        browser.sleep(5000);

        let imap = {
            user: "meetjoeb11ack@gmail.com",
            password: "Nhjudfhnhjudfh1123",
            host: "imap.gmail.com",
            port: 993, // imap port
            tls: true,// use secure connection
            tlsOptions: { rejectUnauthorized: false },
            markSeen:false,

        };

         notifier(imap).on('mail',function(mail){
                if(regLink === mail.text.match(/(https:.*\?)(.*(country=)?.*&(city=)?.*&(language=)?.*&(code=)?.*)/g))
                {
                    console.log(regLink);
                    browser.get(regLink.toString());

                }
            else{
                console.log("invalid email");
            }


        }).start();

    }
    public saveEmail(userEmail){
        flow.execute(function () {
            userData.newUserEmail = userEmail;
            fs.writeFile("Helpers/user.json", JSON.stringify(userData,null,2));
            console.log("\nUpdated contact:userEmail to " + userEmail);
            return true;
            
        })
        // browser.wait(function () {
        //     userData.newUserEmail = userEmail;
        //     fs.writeFileSync("Helpers/user.json", JSON.stringify(userData,null,2));
        //     return true;
        // },2000).then(function () {
        //     console.log("\nUpdated contact:userEmail to " + userEmail);
        // });




    }



}
