import {landingPage} from "./landingPage";
export class Lisabon extends landingPage{

    public licenceNumberField = element(by.id("drivingLicence.number"));
    public lCountry = element(by.id("drivingLicence.country"));
    public lDay = element(by.name("validFrom-day"));
    public lMonth = element(by.name("validFrom-month"));
    public lYear = element(by.name("validFrom-year"));
    public expLDay = element(by.name("validTo-day"));
    public expLMonth = element(by.name("validTo-month"));
    public expLYear = element(by.name("validTo-year"));
    public pin_0 = element(by.css("label[class*='no-wrap-clip'][for='drivingLicence.pin']"));
    public pin_1 = element(by.id("drivingLicence.pin"));


    public licenceValidFromLisbon(day,month,year){
        this.helper.selectDropDownNumber(this.lDay,day);
        this.helper.selectDropDownNumber(this.lMonth,month);
        this.helper.selectDropDownNumber(this.lYear,year);
    };
    public licenceValidToLisbon(day,month,year){
        this.helper.selectDropDownNumber(this.expLDay,day);
        this.helper.selectDropDownNumber(this.expLMonth,month);
        this.helper.selectDropDownNumber(this.expLYear,year);

    };
    public enterDrivingLicenceLisabon(licence){
        this.helper.sendKeys(this.licenceNumberField,licence)
    };
    public enterDrivingLicenceCountry(country){
        this.helper.selectDropDownNumber(this.lCountry,country)
    };

    public enterPin (pin){
        this.helper.click(this.pin_0)
            .then(()=>this.helper.sendKeys(this.pin_1,pin))
    };






}

