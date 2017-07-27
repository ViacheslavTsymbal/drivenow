import {landingPage} from "./landingPage";

export class Germany extends landingPage{

    public de_creditCardDropdown = element(by.name("payment-CC-payment-method-card-provider"));
    public de_creditCardField = element(by.name("payment-CC-payment-method-card-number"));
    public de_dLiCountryDay = element(by.name("dlicCdate-day"));
    public de_dLiCountryMonth = element(by.name("dlicCdate-month"));
    public de_dLiCountryYear = element(by.name("dlicCdate-year"));

    public london_sub_building_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.buildingName']"));
    public london_sub_building_1 = element(by.id("primaryDetails.buildingName"));
    public special_preferred_city = element(by.id("primaryDetails.preferredCity"));
    public creditCardYear = element(by.name("payment-CC-payment-method-valid-until-year"));
    public creditCardMonth = element(by.name("payment-CC-payment-method-valid-until-month"));
    public creditCardCvv_0 = element(by.css("label[class*='no-wrap-clip'][for='paymentDetails.payment-CC-payment-method-security-code']"));
    public creditCardCvv_1 = element(by.name("payment-CC-payment-method-security-code"));




}