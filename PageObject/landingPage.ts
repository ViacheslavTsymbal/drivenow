import {Helper} from "../Modules/helper"
let fs = require('fs');


export class landingPage {

    public helper = new Helper();

    public url = "/en";
    private   profile = element(by.css("[class='icon icon-profile']"));
    private email_0 =  element(by.css("label[class*='no-wrap-clip'][for='email']"));
    private email_1 = element(by.name("email"));

    private password_0 = element(by.css("label[class*='no-wrap-clip'][for='password']"));
    private password_1 = element(by.name("password"));

    private loginBtn = element(by.buttonText("Login"));
    private bmButton =  element(by.css('a[href*="/fi/en/customer/bonusminutes/private"]'))











    public Login(mail,password){

        browser.get(this.url);
        this.helper.click(this.profile);
        this.helper.click(this.email_0)
            .then(()=>{
                this.helper.sendKeys(this.email_1,mail)
                console.log("\nmail: " + mail)
            });
        this.helper.click(this.password_0)
            .then(()=>{
                this.helper.sendKeys(this.password_1,password)
                console.log("\npassword: " + password)

            });
        this.helper.click(this.loginBtn);

    };

}