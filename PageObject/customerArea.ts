import {Helper} from "../Modules/helper"
var data = require('../Modules/user.json')
var fs = require('fs')

export class customerArea {
    public helper = new Helper();

    private bmButton =  element(by.css('a[href*="/fi/en/customer/bonusminutes/private"]'));
    private caButton =  element(by.css('a[href*="/fi/en/customer/customer/data/private"]'))

    private switch = element(by.css("label[class*='visual'][for='switch']"));
    private optionalAdress = element(by.id('streetAddition'));
    private email = element(by.id('email'));
    private password = element(by.id('password'));
    private pin = element(by.id('PIN'));
    private securityQuestion = element(by.id('securityQuestion'));
    private Answer = element(by.id('securityAnswer'));
    private saveBtn = element(by.css("button[class*='btn btn-form-submit btn-black ']"));

    public isLoaded(){
       return this.helper.isDisplayed(this.bmButton)
    };
    public switchProfile(){
     this.helper.click(this.switch)
     return this.helper.isDisplayed(this.optionalAdress)
 };


    public updateAndStoreCustomerData() {
        let newMail;
        let randomPassword = {
            "1":"Qazwsx123",
            "2": "Qazwsx1234",
            "3":"Qazwsx12345"
        };
        let randomPin = {
            "1":"1234",
            "2": "4321",
            "3":"9999"
        };
        let securityQuestion = [1,2,3];

        let newPassword = this.helper.getRandom(randomPassword);
        let newPin = this.helper.getRandom(randomPin);
        let newSecurityQuestion = this.helper.getRandom(securityQuestion);
        let newSecurityAnswer;


        newMail = this.helper.addTimeStamp("meetjoeb11ack+") + "@gmail.com";
        this.helper.sendKeys(this.email, newMail);
        this.helper.sendKeys(this.password,newPassword);
        this.helper.sendKeys(this.pin,newPin);
        this.helper.selectDropDownNumber(this.securityQuestion,newSecurityQuestion);
        let x = element(by.id("securityQuestion")).getAttribute('value').toString()


        let finlandUser = {
            "email": newMail,
            "password": newPassword,
            "pin":newPin,
            "sQuestion":x,
            "sAnswer":newSecurityAnswer

        };
        let updatedUser = JSON.stringify(finlandUser);
        fs.writeFile("/home/olm/Projects/drivenow/Modules/user.json", updatedUser);
        this.helper.scrollIntoScreenCenter(this.saveBtn);
        this.helper.click(this.saveBtn);
        browser.sleep(5000)
    }


}
