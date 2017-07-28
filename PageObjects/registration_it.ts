import {landingPage} from "./landingPage";

export class Milan extends landingPage {
    public codiceFiscale_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.codiceFiscale']"));
    public codiceFiscale_1 = element(by.id("primaryDetails.codiceFiscale"));
    public licence_0 = element(by.css("label[class*='no-wrap-clip'][for='driversLicense.dlicNumber']"));
    public licence_1 = element(by.id("driversLicense.dlicNumber"));

    public approvePrivacyPolicy = element(by.css("label[class='label-wrapper'][for='approvePrivacyPolicy']"));
    public approveExplictConsent = element(by.css("label[class='label-wrapper'][for='registrationDetails.approveExplictConsent']"));
    public agreeCheckbox = element(by.css("label[class='label-wrapper'][for='approveTos']"));

}

