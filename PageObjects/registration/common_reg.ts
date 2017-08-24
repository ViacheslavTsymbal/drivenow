import {landingPage} from "../landingPage";
import {Germany} from "./registration_de"
import {Milan} from "./registration_it"
import {Lisabon} from "./registratin_pt"
const de = new Germany();
const it = new Milan();
const pt = new Lisabon();


export class regPage extends landingPage {

//Page 1(person details)
    private countrySelect = element(by.id("loginDetails.tenantSelector"));
    private pin_0 = element(by.css("label[class*='no-wrap-clip'][for='loginDetails.pin']"));
    private pin_1 = element(by.name("pin"));
    private securityQuestion = element(by.name("securityQuestion"));
    private securityAnswer = element(by.name("securityAnswer"));
    private nextButton = element(by.css("button[class*='button blue']"));
    private selectGenderCheckbox = element(by.css("label[for='primaryDetails-gender-M']"));
    private firstName = element(by.name("firstName"));
    private lastName = element(by.name("lastName"));
//Page 2(contact details)
    private streetNumber_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.streetNumber']"));
    private streetNumber_1 = element(by.id("primaryDetails.streetNumber"));
    private mobileCode = element(by.id("primaryDetails.primaryDetails.mobileNumber-country-code"));
    private mobileNumber = element(by.id("primaryDetails.primaryDetails.mobileNumber-number"));
    private street = element(by.id("primaryDetails.street"));
    private optionalStreet_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.streetAddition']"));
    private optionalStreet_1 = element(by.id("primaryDetails.streetAddition"));
    private postalCode = element(by.name("areaCode"));
    private city_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.city']"));
    private city_1 = element(by.id("primaryDetails.city"));
    private day = element(by.id("age-day"));
    private month = element(by.id("age-month"));
    private year = element(by.id("age-year"));

    //Page 3(driver's licence)
    private licence_0 = element(by.css("label[class*='no-wrap-clip'][for='driversLicense.dlicNumberWithExplanation']"));
    private licence_1 = element(by.name("dlicNumberWithExplanation"));
    private lCountry = element(by.name("dlicCountry"));
    private lDay = element(by.name("dlicCdate-day"));
    private lMonth = element(by.name("dlicCdate-month"));
    private lYear = element(by.name("dlicCdate-year"));
    private expLDay = element(by.name("dlicExpDate-day"));
    private expLMonth = element(by.name("dlicExpDate-month"));
    private expLYear = element(by.name("dlicExpDate-year"));

    //page 4(credit card)
    public creditCardDropdown = element(by.name("payment-CC-payment-method-card-provider"));
    public creditCardField = element(by.name("payment-CC-payment-method-card-number"));
    public dLiCountryDay = element(by.name("dlicCdate-day"));
    public dLiCountryMonth = element(by.name("dlicCdate-month"));
    public dLiCountryYear = element(by.name("dlicCdate-year"));
    public creditCardYear = element(by.name("payment-CC-payment-method-valid-until-year"));
    public creditCardMonth = element(by.name("payment-CC-payment-method-valid-until-month"));
    public creditCardCvv_0 = element(by.css("label[class*='no-wrap-clip'][for='paymentDetails.payment-CC-payment-method-security-code']"));
    public creditCardCvv_1 = element(by.name("payment-CC-payment-method-security-code"));
    public promocode = element(by.name("promocode"));
    public regText = element(by.css("[class='registration-header hidden-md hidden-sm hidden-xs']"));
    public redeemButton = element.all(by.css("button[class*='button blue']")).get(0);
    public agreeCheckbox = element(by.id("approveTos-container"));
    public errorMessage = element.all(by.css("[class*='content-message']"));
    public message = element.all(by.css("[class*='cms-injected']")).get(0);
    public sms1 = element(by.css("[class='registration-header']"));
    public businessActivatorCheckbox = element(by.css("[class='label-wrapper'][for='primaryDetails.businessTripsActivator']"));
    public businessAdressCheckbox = element(by.css("[class='label-wrapper'][for='businessTripDetails.usingBusinessAddress']"));


    //page 1
    public getErrorText(){
        return this.errorMessage.getText()


    };
    public verifyErrorsCount(num){
        this.helper.click(this.nextButton);
        browser.sleep(500);
        this.errorMessage.count()
            .then(function (size) {
                expect(size).toEqual(num);
                return browser.sleep(1000)
            })

    };
    public selectTenant(tenant){
        //this.helper.get() //TEST request.
        this.helper.selectDropDownNumber(this.countrySelect,tenant);
		this.helper.isDisplayed(this.email_0)
	};
    public selectPreferredCity(city){
        this.helper.selectDropDownNumber(de.special_preferred_city,(city));

    };
	public enterUniqueEmail (){
        let uniqMail;
        uniqMail = this.helper.addTimeStamp("meetjoeb11ack+") + "@gmail.com";
        this.helper.click(this.email_0)
            .then(()=>this.helper.sendKeys(this.email_1,uniqMail));
        return uniqMail
	};
    public enterPassword (password){
        this.helper.click(this.password_0)
            .then(()=>this.helper.sendKeys(this.password_1,password))
    };
    public enterPin (pin){
        this.helper.click(this.pin_0)
            .then(()=>this.helper.sendKeys(this.pin_1,pin))
    };
    public selectSecurityQuestion(question){
        this.helper.selectDropDownNumber(this.securityQuestion,question)

    };
    public enterSecurityAnswer(answer){
        this.helper.sendKeys(this.securityAnswer,answer)
    };

    //page 2
    public clickNext(){
       return this.helper.click(this.nextButton);
    };
    public selectGender(){
        this.helper.scrollIntoScreenCenter(this.selectGenderCheckbox);
        this.helper.nonButtonClick(this.selectGenderCheckbox)
    };
    public enterName(firstName,lastName){
        this.helper.sendKeys(this.firstName,firstName)
        this.helper.sendKeys(this.lastName,lastName)

    };
    public enterStreetDetails(street,streetNumber,additionalStreet) {
        this.helper.sendKeys(this.street,street);
        this.helper.sendKeys(this.streetNumber_1,streetNumber)
        this.helper.sendKeys(this.optionalStreet_1,additionalStreet)
    };
    public enterPostalCode(postalCode){
        this.helper.sendKeys(this.postalCode,postalCode);

    };
    public enterPhone(mobileCode,mobileNumber){
        browser.sleep(500);
        this.helper.sendKeys(this.mobileCode,mobileCode);
        this.helper.sendKeys(this.mobileNumber,mobileNumber)
    };
    public enterCity(city){
        this.helper.click(this.city_0)
            .then(()=>{
            this.helper.sendKeys(this.city_1,city)
            })

    };
    public selectDateOfBirth(date){
         this.helper.selectDropDownNumber(this.day,date)
    };
    public selectMonthOfBirth(month){
         this.helper.selectDropDownNumber(this.month,month)
    };
    public selectYearOfBirth(year){
         this.helper.selectDropDownNumber(this.year,year)
    };
    public enterDrivingLicence(licence){
        this.helper.click(this.licence_0);
        this.helper.sendKeys(this.licence_1,licence)
    };
    public selectLicenceCountry(lcountry){
        this.helper.selectDropDownNumber(this.lCountry,lcountry)
    };
    public licenceValidFrom(day,month,year){
        this.helper.selectDropDownNumber(this.lDay,day);
        this.helper.selectDropDownNumber(this.lMonth,month);
        this.helper.selectDropDownNumber(this.lYear,year);

    };
    public licenceValidTO(day,month,year){
        this.helper.selectDropDownNumber(this.expLDay,day);
        this.helper.selectDropDownNumber(this.expLMonth,month);
        this.helper.selectDropDownNumber(this.expLYear,year);

    };
    public selectCheckBoxes(){
        this.helper.scrollIntoScreenCenter(this.agreeCheckbox);
        this.helper.click(this.agreeCheckbox)



    };
    public displayConfirmationText(){
        this.helper.isDisplayed(this.sms1);
        this.message.getText().then(function (text) {
            console.log("confirmation: " + text)

        })

    };
    public selectDliCountry(day,month,year){
        this.helper.scrollIntoScreenCenter(this.dLiCountryDay)
        this.helper.selectDropDownNumber(this.dLiCountryDay,day);
        this.helper.selectDropDownNumber(this.dLiCountryMonth,month);
        this.helper.selectDropDownNumber(this.dLiCountryYear,year);


    };
    public chooseCreditCard(card){
        this.helper.selectDropDownNumber(this.creditCardDropdown,card)
    };
    public enterCardNumber(number){
        this.helper.sendKeys(this.creditCardField,number)

    };
    public enterCreditCardDates(year,month){
        this.helper.selectDropDownNumber(this.creditCardYear,year);
        this.helper.selectDropDownNumber(this.creditCardMonth,month);

    };
    public enterCardCvv(cvv){
        this.helper.click(this.creditCardCvv_0)
            .then(() => {
            this.helper.sendKeys(this.creditCardCvv_1,cvv)
            })
    };
    public validatePromoCodeLogic(code, message){
        //this.helper.click(this.promocode_0);
        this.helper.sendKeys(this.promocode,code);
        this.helper.click(this.redeemButton);
        browser.sleep(1000);
        this.regText.getText().then((text)=>{
            expect(text).toEqual(message)
        });

    }
    public clickaAtivateDNforBusinessCheckbox(){
        this.helper.click(this.businessActivatorCheckbox);
    }
    public clickAddBusinessAddressCheckbox(){
        this.helper.click(this.businessAdressCheckbox)
    }









}

