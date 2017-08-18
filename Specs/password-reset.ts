import {regPage} from "../PageObjects/registration/common_reg"
import {errors} from "../Helpers/errors"
import {Helper} from "../Helpers/helper"

const reg = new regPage();
const tenant = new errors();
const helpers = new Helper();
let flow = browser.controlFlow();

describe("password-reset",function () {
    
    it("getEmailLink", function () {
      browser.get("https://www.beta.drive-now.com/it/milan/registration/4");
        let x = element(by.css((".checkbox-input#${'.registrationDetails.approveTos'}-container input")));
        helpers.click(x)
    });




});

