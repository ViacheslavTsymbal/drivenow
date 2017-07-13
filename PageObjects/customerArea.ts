import {landingPage} from "./landingPage";
import {errors} from "../Modules/components"

let fs = require('fs');
let file = fs.readFileSync('/home/olm/Projects/drivenow/Modules/user.json');
let userData = JSON.parse(file);
let newMail;
let securityQ;
const er = new errors();


export class customerArea extends landingPage {
    public bmButton = element(by.css('a[href*="/fi/en/customer/bonusminutes/private"]'));
    private caButton = element(by.css('a[href*="/fi/en/customer/customer/userDataFile/private"]'));
    private profileSwitchCheckbox = element(by.css("label[class*='visual'][for='switch']"));
    private optionalAddressField = element(by.id('streetAddition'));
    private emailField = element(by.id('email'));
    private passworField = element(by.id('password'));
    private pinField = element(by.id('pin'));
    private securityQuestionField = element(by.id('securityQuestion'));
    private securityAnswerField = element(by.id('securityAnswer'));
    private saveBtn = element(by.css("button[class*='btn btn-form-submit btn-black ']"));
    private errorMessage = element.all(by.css("[class*='content-message']"));
    private resetButton = element(by.css("button[class*='btn btn-reset btn-blue btn-transparent ']"));
    private street = element(by.id("street"));
    private optionalStreet = element(by.name("streetAddition"));
    private postalCode = element(by.name("postCode"));
    private streetNumber = element(by.name("streetNumber"));
    private city = element(by.name("city"));
    private mobileCode = element(by.name("mobileNumber-country-code"));
    private mobileNumber = element(by.name("mobileNumber-number"));



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
        this.helper.sendKeys(this.pinField, pin);

    }

    public updateSecurityQuestion() {
        let random = [0, 1, 2];
        securityQ = this.helper.getRandom(random);
        this.helper.selectDropDownNumber(this.securityQuestionField, securityQ);


    }
    public updateSecurityAnswer(answer){
        this.helper.sendKeys(this.securityAnswerField,answer)
    }

    public clickSaveAndWaitForRefresh() {
        this.helper.click(this.saveBtn);
        browser.sleep(15000)

    }
    public verifyErrorsSecurityBlock (){
        this.emailField.clear();
        this.helper.click(this.passworField);
        this.helper.click(this.pinField);
        this.helper.click(this.securityAnswerField);
        this.helper.click(this.pinField);
        this.errorMessage.getText().then((text) => {
            let erText = text.filter(el => el !== "");
            expect(erText[0]).toEqual(er.en_ca_errors.email);
            expect(erText[1]).toEqual(er.en_ca_errors.password);
            expect(erText[2]).toEqual(er.en_ca_errors.pin);
            expect(erText[3]).toEqual(er.en_ca_errors.sAnswer);
        });


    };

    public resetButtonFunctionality(){
        this.helper.isNotDisplayed(this.resetButton);
        this.helper.click(this.passworField);
        expect<any>(this.resetButton.isDisplayed()).toEqual(true)

    };


    public checkSubmittedFormAndSaveDataOnSuccess() {
       this.emailField.getAttribute('value').then(function (value) {
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

    public updateStreet(street){
        this.helper.sendKeys(this.street,street)

    };
    public updateStreetNumber(streetNumber){
        this.helper.sendKeys(this.streetNumber,streetNumber)

    };
    public updatePostalCode(code){
        this.helper.sendKeys(this.postalCode,code)

    };
    public updateCity(city){
        this.helper.sendKeys(this.city,city)

    };
    public updateMobileCode(mCode){
        this.helper.sendKeys(this.mobileCode, mCode)

    }
    public updateMobilePhone(mPhone){
        this.helper.sendKeys(this.mobileNumber,mPhone)

    };
    public verifyErrorsContactDataBlock(){
        this.helper.click(this.street);
        browser.sleep(1000)
        this.street.clear();
        this.helper.click(this.street);
        // this.helper.clearKeys(this.street);
        this.helper.clearKeys(this.streetNumber);
        this.helper.clearKeys(this.city);
        this.helper.clearKeys(this.postalCode);
        this.helper.clearKeys(this.mobileCode);
        this.helper.clearKeys(this.mobileNumber);
        this.errorMessage.getText().then((text) => {
            let erText = text.filter(el => el !== "");

            console.log(erText);
            expect(erText[4]).toEqual(er.en_ca_errors.street);
            expect(erText[5]).toEqual(er.en_ca_errors.streetNumber);
            expect(erText[6]).toEqual(er.en_ca_errors.postalCode);
            expect(erText[7]).toEqual(er.en_ca_errors.city);

        });




    }
    public clickResetButton(){
        this.helper.click(this.resetButton)
    }

}



