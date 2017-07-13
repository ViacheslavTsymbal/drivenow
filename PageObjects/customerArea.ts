import {landingPage} from "./landingPage";
import {Promise, reject} from "q";
import {error, log} from "util";
let fs = require('fs');
let file = fs.readFileSync('/home/olm/Projects/drivenow/Modules/user.json');
let userData = JSON.parse(file);
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
        console.log("\n\nGenerated new random email: "+newMail)


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



    public checkSubmittedFormAndSaveDataOnSuccess() {
        element(by.id('email')).getAttribute('value').then(function (value) {
            return value
        }).then(value => {
            expect(value).toEqual(newMail);
           if(value==newMail){
                browser.wait(function ()  {
                    userData.email = newMail;
                    fs.writeFileSync("/home/olm/Projects/drivenow/Modules/user.json", JSON.stringify(userData,null,1));
                    return true;
               },2000).then(function () {
                   console.log("\nUpdated "+ browser.params.user.email + " to " + newMail);
               });
           }else {
               console.log("Whoops, something went wrong, file is not updated")
           }
        });
    };


}



