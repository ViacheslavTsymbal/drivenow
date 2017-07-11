import {Helper} from "../Modules/helper"
const EC = protractor.ExpectedConditions;
let fs = require('fs');
const userDataFile = require('../Modules/user.json');


export class landingPage {

    public helper = new Helper();
    public url = "/en";
    public userProfileIcon = element(by.css("[class='icon icon-profile']"));
    public email_0 =  element(by.css("label[class*='no-wrap-clip'][for='email']"));
    public email_1 = element(by.name("email"));
    public password_0 = element(by.css("label[class*='no-wrap-clip'][for='password']"));
    public password_1 = element(by.name("password"));
    public loginBtn = element(by.buttonText("Login"));
    public bmButton =  element(by.css('a[href*="/fi/en/customer/bonusminutes/private"]'));



    public Login(mail,password){
        browser.get(this.url);
        this.helper.click(this.userProfileIcon);
        this.helper.sendKeys(this.email_1,mail);
        this.helper.sendKeys(this.password_1,password);
        this.helper.click(this.loginBtn);
        this.helper.isDisplayed(this.bmButton)

    };

}