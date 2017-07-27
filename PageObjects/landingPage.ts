import {Helper} from "../Modules/helper"
const EC = protractor.ExpectedConditions;
let fs = require('fs');


export class landingPage {

    public helper = new Helper();
    public url = "/en";
    public userProfileIcon = element(by.id("login-opener"));
    public email_0 =  element(by.css("label[class*='no-wrap-clip'][for='loginDetails.email']"));
    public email_1 = element(by.name("email"));
    public password_0 = element(by.css("label[class*='no-wrap-clip'][for='loginDetails.password']"));
    public password_1 = element(by.name("password"));
    public loginBtn = element(by.buttonText("Login"));
    public bmButton =  element(by.css('a[href*="/fi/en/customer/bonusminutes/private"]'));
    public logOutButton = element(by.css("button[class='btn btn-black']"));
    public deRegIcon =  element(by.className('icon icon-germany'));





    public Login(mail,password){
        browser.get(this.url);
        this.helper.click(this.userProfileIcon);
        this.helper.sendKeys(this.email_1,mail);
        this.helper.sendKeys(this.password_1,password);
        this.helper.click(this.loginBtn);
        this.helper.isDisplayed(this.bmButton).then(() => {
            console.log("\nLogged in with: \n" +"email: "+ browser.params.user.email+"\npassword: "+ browser.params.user.password);
        })

    };
    public logOut(){
        this.helper.click(this.userProfileIcon);
        this.helper.click(this.logOutButton);
        expect<any>(this.deRegIcon.isDisplayed()).toEqual(true);
    };

}