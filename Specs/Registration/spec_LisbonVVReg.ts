import {regPage} from "../../PageObjects/registration/common_reg"
import {Lisabon} from "../../PageObjects/registration/registratin_pt"
import {errors} from "../../Helpers/errors"

const reg = new regPage();
const tenant = new errors();
const pt = new Lisabon();

describe("Registration",function () {
    beforeEach(function () {
        //browser.get("/de/berlin/registration/1");
    });



    it("Lisbon registration", function () {
        browser.get("https://www.beta.drive-now.com/en/lisbon/registration/1");
        //reg.selectTenant(8);
        pt.vvButtonLogin();
        pt.enterCredentialsForVV("viacheslav.tsymbal+viaverde1@sixt.com","teste123");
        //page 2

        reg.clickNext();
        reg.verifyErrorsCount(3);
        reg.getErrorText().then((value => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.en.gender);
            expect(erText[1]).toEqual(tenant.en.mobilePhone);
            expect(erText[2]).toEqual(tenant.en.dateOfBirth);

        }));
        reg.selectGender();
        reg.enterPhone("00380","939177068");
        pt.selectDateOfBirth(9);
        pt.selectMonthOfBirth(12);
        pt.selectYearOfBirth(28);
        reg.clickNext();
        //page 3
        reg.clickNext();
        reg.verifyErrorsCount(11);
        reg.getErrorText().then((value) => {
            let erText = value.filter(el => el !== "");
            expect(erText[0]).toEqual(tenant.en.licence);
            expect(erText[1]).toEqual(tenant.en.licenceDate);
            expect(erText[2]).toEqual(tenant.en.pin);

        });
        pt.enterDrivingLicenceLisabon(123456789);
        pt.enterDrivingLicenceCountry(0);
        pt.licenceValidFromLisbon(5,5,5);
        pt.licenceValidToLisbon(12,11,1);
        pt.enterPin(7777);
        reg.clickNext();
        //page 4
        browser.pause();
        reg.clickNext();
        reg.verifyErrorsCount(7);
        reg.getErrorText().then((value) => {
            let erText = value.filter(el => el !== "");
            console.log(erText)
        });
        reg.selectCheckBoxes();
        reg.displayConfirmationText();





    });

});
