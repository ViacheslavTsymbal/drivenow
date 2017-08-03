import {landingPage} from "./landingPage";

export class Helsinki extends landingPage{


    private cardNumberIframe = element(by.id("cardNumber"));
    private cardValidToIframe = element(by.name("expiry"));
    private cvvIframe = element(by.name("cvv"));
    private okButtonIframe = element(by.css(".submit-button-text"));

    public addCreditCardIframe(number, expDate, cvv){
        browser.sleep(3000);
        browser.switchTo().frame(0);
        this.helper.sendKeys(this.cardNumberIframe,number);
        this.helper.sendKeys(this.cardValidToIframe,expDate);
        this.helper.sendKeys(this.cvvIframe,cvv);
        this.helper.click(this.okButtonIframe);
        browser.switchTo().defaultContent()
    };

}