import {landingPage} from "./landingPage";

export class Milan extends landingPage {
    public codiceFiscale_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.codiceFiscale']"));
    public codiceFiscale_1 = element(by.id("primaryDetails.codiceFiscale"));
    public licence_0 = element(by.css("label[class*='no-wrap-clip'][for='driversLicense.dlicNumber']"));
    public licence_1 = element(by.id("driversLicense.dlicNumber"));

    public approvePrivacyPolicy = element(by.css("label[class='label-wrapper'][for='approvePrivacyPolicy']"));
    public approveExplictConsent = element(by.css("label[class='label-wrapper'][for='registrationDetails.approveExplictConsent']"));
    public agreeCheckbox = element(by.css("label[class='label-wrapper'][for='approveTos']"));



    public enterFiscalCodeCard(code){
        this.helper.click(this.codiceFiscale_0);
        this.helper.sendKeys(this.codiceFiscale_1,code)
    };
    public enterDrivingLicenceMilan(license){
        this.helper.click(this.licence_0);
        this.helper.sendKeys(this.licence_1,license)
    };
    public selectCheckBoxesMilan(){
        let agreeCheckbox = browser.driver.findElement(by.css("label[class='label-wrapper'][for='registrationDetails.approveTos']"));
        let approvePrivacyPolicy = browser.driver.findElement(by.css("label[class='label-wrapper'][for='registrationDetails.approvePrivacyPolicy']"));
        let approveExplictContent = browser.driver.findElement(by.css("label[class='label-wrapper'][for='registrationDetails.approveExplictConsent']"));

        this.helper.scrollIntoScreenCenter(this.approveExplictConsent);

        browser.actions().mouseMove(agreeCheckbox, {x:0, y:0}).click().perform();
        browser.actions().mouseMove(approvePrivacyPolicy,{x:0,y:0}).click().perform();
        browser.actions().mouseMove(approveExplictContent,{x:0,y:0}).click().perform();

    };



}

