/**
 * Created by olm on 7/6/17.
 */
export class Milan {
    public codiceFiscale_0 = element(by.css("label[class*='no-wrap-clip'][for='codiceFiscale']"));
    public codiceFiscale_1 = element(by.name("codiceFiscale"));
    public licence_0 = element(by.css("label[class*='no-wrap-clip'][for='dlicNumber']"));
    public licence_1 = element(by.name("dlicNumber"));
    public approvePrivacyPolicy = element(by.id("approvePrivacyPolicy"));
    public agreeCheckbox = element(by.id("approveTos-container"));



}
