import {landingPage} from "../PageObject/landingPage"
import {customerArea} from "../PageObject/customerArea"

const lp = new landingPage();
const ca = new customerArea();

describe("international home",function () {

    it('login to new customer area', function () {
        lp.Login(browser.params.user.email, browser.params.user.password);
            expect<any>(ca.isLoaded()).toEqual(true);
            browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual('https://www.beta.drive-now.com/fi/en/customer/data/private')
            });


    });





















});



