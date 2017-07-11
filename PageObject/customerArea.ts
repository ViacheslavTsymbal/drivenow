import {landingPage} from "./landingPage";
import {Promise, reject} from "q";
import {error, log} from "util";
const fs = require('fs');
const userDataFile = require('../Modules/user.json');
let newMail;
let securityQ;


export class customerArea extends landingPage {
    public bmButton = element(by.css('a[href*="/fi/en/customer/bonusminutes/private"]'));
    private caButton = element(by.css('a[href*="/fi/en/customer/customer/userDataFile/private"]'));
    private profileSwitchCheckbox = element(by.css("label[class*='visual'][for='switch']"));
    private optionalAddressField = element(by.id('streetAddition'));
    private emailField = element(by.id('email'));
    private passworField = element(by.id('password'));
    private pin = element(by.id('PIN'));
    private securityQuestion = element(by.id('securityQuestion'));
    private Answer = element(by.id('securityAnswer'));
    private saveBtn = element(by.css("button[class*='btn btn-form-submit btn-black ']"));
    private successSubmitButton = element(by.xpath("//*[@id='react-root']/div/main/div/section[5]/div/fieldset/div[3]/div/div/button/span/div/div/span"));

    //page Methods

    public isLoaded() {
        return this.helper.isDisplayed(this.bmButton)
    };

    public switchProfile() {
        this.helper.click(this.profileSwitchCheckbox);
        return this.helper.isDisplayed(this.optionalAddressField);
    };

    public updateEmailField() {

        newMail = this.helper.addTimeStamp("meetjoeb11ack+") + "@gmail.com";
        this.helper.sendKeys(this.emailField, newMail);


    }

    public updatePasswordField(password) {
        this.helper.sendKeys(this.passworField, password);

    }

    public updatePinField(pin) {
        this.helper.sendKeys(this.pin, pin);

    }

    public updateSecurityQuestion() {
        let random = [0, 1, 2];
        securityQ = this.helper.getRandom(random);
        this.helper.selectDropDownNumber(this.securityQuestion, securityQ);


    }

    public clickSaveAndWaitForRefresh() {
        this.helper.click(this.saveBtn);
        browser.sleep(15000)

    }

    public checkSubmittedForm() {
        let email;
        element(by.id('email')).getAttribute('value').then(function (value) {
            return email = value;
        });
        Promise<any>((resolve) => {
            if (expect(email).toEqual(newMail) === true) {
                var s = function () {
                    let finlandUser = {
                        "email": newMail,
                        "password": "Qazwsx123",
                        "pin": "7777",
                        "sQuestion": securityQ.toString(),
                        "sAnswer": "test"
                    };
                    let updatedUser = JSON.stringify(finlandUser);
                    fs.writeFile("/home/olm/Projects/drivenow/Modules/user.json", updatedUser);
                };
                resolve(s);

            }


        });
    }


    }



