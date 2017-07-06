import {Helper} from "../Modules/helper"
import {Germany} from "./registration_de"
import {Milan} from "./registration_it"


const de = new Germany();
const it = new Milan();
export class regPage  {

    public helper = new Helper();
//Page 1
    private countrySelect = element(by.name("tenantSelector"));
    private email_1 = element(by.name("email"));
    private email_0 = element(by.css("label[class*='no-wrap-clip'][for='email']"));
    private password_0 = element(by.css("label[class*='no-wrap-clip'][for='password']"));
    private password_1 = element(by.name("password"));
    private pin_0 = element(by.css("label[class*='no-wrap-clip'][for='pin']"));
    private pin_1 = element(by.name("pin"));
    private securityQuestion = element(by.name("securityQuestion"));
    private securityAnswer = element(by.name("securityAnswer"));
    private nextButton = element(by.css("button[class*='button blue']"));
    private selectGenderCheckbox = element(by.css("label[for='primaryDetails-gender-M']"));
    private firstName = element(by.name("firstName"));
    private lastName = element(by.name("lastName"));
//Page 2
    private streetNumber_0 = element(by.css("label[class*='no-wrap-clip'][for='streetNumber']"));
    private streetNumber_1 = element(by.name("streetNumber"));
    private mobileCode = element(by.name("mobileNumber-country-code"));
    private mobileNumber = element(by.name("mobileNumber-number"));
    private street = element(by.name("street"));
    private optionalStreet_0 = element(by.css("label[class*='no-wrap-clip'][for='streetAddition']"));
    private optionalStreet_1 = element(by.name("streetAddition"));
    private postalCode = element(by.name("areaCode"));
    private city_0 = element(by.css("label[class*='no-wrap-clip'][for='city']"));
    private city_1 = element(by.name("city"));
    private age = element(by.name("age-day"));
    private month = element(by.name("age-month"));
    private year = element(by.name("age-year"));
//Page 3
    private licence_0 = element(by.css("label[class*='no-wrap-clip'][for='dlicNumberWithExplanation']"));
    private licence_1 = element(by.name("dlicNumberWithExplanation"));
    private lCountry = element(by.name("dlicCountry"));
    private lDay = element(by.name("dlicCdate-day"));
    private lMonth = element(by.name("dlicCdate-month"));
    private lYear = element(by.name("dlicCdate-year"));
    private expLDay = element(by.name("dlicExpDate-day"));
    private expLMonth = element(by.name("dlicExpDate-month"));
    private expLYear = element(by.name("dlicExpDate-year"));
    private cardNumber = element(by.id("cardNumber"));
    private cardValidTo = element(by.name("expiry"));
    private cvv = element(by.name("cvv"));
    private okButton = element(by.css(".submit-button-text"));
    private agreeCheckbox = element(by.id("approveTos-container"));
    private errorMessage = element.all(by.css("[class*='content-message']"));
    private message = element.all(by.css("[class*='cms-injected']")).get(0);
    private sms1 = element(by.css("[class='registration-header']"));









    public getErrorText(){
        return this.errorMessage.getText()


    }
    public verifyErrors(errors,object){
        expect(errors[0]).toEqual(object.email);
        expect(errors[1]).toEqual(object.password);
        expect(errors[2]).toEqual(object.pin);
        expect(errors[3]).toEqual(object.sQuestion);
        expect(errors[4]).toEqual(object.sAnswer);

    }
    public verifyErrorsCount(num){
        this.helper.click(this.nextButton)
        this.errorMessage.count()
            .then(function (size) {
                expect(size).toEqual(num)
                return browser.sleep(1000)
            })

    }
    public selectTenant(tenant){

        this.helper.selectDropDownNumber(this.countrySelect,tenant);
		this.helper.isDisplayed(this.email_0)
	};
    public selectPreferredCity(city){
        this.helper.selectDropDownNumber(de.special_preferred_city,(city));

    }
	public enterUniqueEmail (){
        let uniqMail;
        uniqMail = this.helper.addTimeStamp("meetjoeb11ack+") + "@gmail.com";
        this.helper.click(this.email_0)
            .then(()=>this.helper.sendKeys(this.email_1,uniqMail));
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
    }
    public clickNext(){
       return this.helper.click(this.nextButton)
    }
    public selectGender(){
        this.helper.nonButtonClick(this.selectGenderCheckbox)
    }
    public enterName(firstName,lastName){
        this.helper.sendKeys(this.firstName,firstName)
        this.helper.sendKeys(this.lastName,lastName)

    }
    public enterStreetDetails(street,streetNumber,additionalStreet) {
        this.helper.sendKeys(this.street,street);

        this.helper.click(this.streetNumber_0)
            .then(()=>{
                this.helper.sendKeys(this.streetNumber_1,streetNumber);
            });
        this.helper.click(this.optionalStreet_0)
            .then(()=>{
            this.helper.sendKeys(this.optionalStreet_1,additionalStreet)
            })



    }
    public enterPostalCode(postalCode){
        this.helper.sendKeys(this.postalCode,postalCode);

    }
    public enterPhone(mobileCode,mobileNumber){
        browser.sleep(500);
        this.helper.sendKeys(this.mobileCode,mobileCode);
        this.helper.sendKeys(this.mobileNumber,mobileNumber)
    }
    public enterCity(city){
        this.helper.click(this.city_0)
            .then(()=>{
            this.helper.sendKeys(this.city_1,city)
            })

    };
    public selectDateOfBirth(date){
         this.helper.selectDropDownNumber(this.age,date)
    };
    public selectMonthOfBirth(month){
         this.helper.selectDropDownNumber(this.month,month)
    };
    public selectYearOfBirth(year){
         this.helper.selectDropDownNumber(this.year,year)
    };
    public enterDrivingLicence(licence){
        this.helper.click(this.licence_0)
        this.helper.sendKeys(this.licence_1,licence)
    }
    public selectLicenceCountry(lcountry){
        this.helper.selectDropDownNumber(this.lCountry,lcountry)
    }
    public licenceValidFrom(day,month,year){
        this.helper.selectDropDownNumber(this.lDay,day);
        this.helper.selectDropDownNumber(this.lMonth,month);
        this.helper.selectDropDownNumber(this.lYear,year);

    }
    public licenceValidTO(day,month,year){
        this.helper.selectDropDownNumber(this.expLDay,day);
        this.helper.selectDropDownNumber(this.expLMonth,month);
        this.helper.selectDropDownNumber(this.expLYear,year);

    }
    public addCreditCardIframe(number, expDate, cvv){

        browser.sleep(3000);
        browser.switchTo().frame(0);

        this.helper.sendKeys(this.cardNumber,number);
        this.helper.sendKeys(this.cardValidTo,expDate);
        this.helper.sendKeys(this.cvv,cvv);
        this.helper.click(this.okButton);
        browser.switchTo().defaultContent()


    }
    public finishReg(){
        this.helper.scrollIntoScreenCenter(this.agreeCheckbox);
        this.helper.click(this.agreeCheckbox)
        this.helper.click(this.nextButton)



    }
    public displayText(){
        this.helper.isDisplayed(this.sms1);
        this.message.getText()
            .then((text)=>{
            console.log(text);
            // expect(text).toEqual("We've sent an email to " +this.uniqMail+" and a text message to 00380939177068.")
            })


    }
    public selectDliCountry(day,month,year){
        this.helper.scrollIntoScreenCenter(de.de_dLiCountryDay)
        this.helper.selectDropDownNumber(de.de_dLiCountryDay,day);
        this.helper.selectDropDownNumber(de.de_dLiCountryMonth,month);
        this.helper.selectDropDownNumber(de.de_dLiCountryYear,year);


    }
    public chooseCreditCard(card){
        this.helper.selectDropDownNumber(de.de_creditCardDropdown,card)
    }
    public enterCardNumber(number){
        this.helper.sendKeys(de.de_creditCardField,number)

    }
    public enterCreditCardDates(year,month){
        this.helper.selectDropDownNumber(de.creditCardYear,year)
        this.helper.selectDropDownNumber(de.creditCardMonth,month)

    }
    public enterCardCvv(cvv){
        this.helper.click(de.creditCardCvv_0)
            .then(() => {
            this.helper.sendKeys(de.creditCardCvv_1,cvv)
            })
    }
    public enterFiscalCodeCard(code){
        this.helper.click(it.codiceFiscale_0)
        this.helper.sendKeys(it.codiceFiscale_1,code)
    }
    public enterItDrivingLicence(license){
        this.helper.click(it.licence_0)
        this.helper.sendKeys(it.licence_1,license)
    }
    public enterITGTCapprove(){
        this.helper.scrollIntoScreenCenter(it.agreeCheckbox);
        this.helper.click(it.agreeCheckbox);
        this.helper.click(it.approvePrivacyPolicy)

    }


}
