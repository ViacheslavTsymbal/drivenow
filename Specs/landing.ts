import {landingPage} from "../PageObject/landingPage"
import {customerArea} from "../PageObject/customerArea"

var data = require('../Modules/user.json')

const lp = new landingPage();
const ca = new customerArea();


describe("international home",function () {

    it('login to new customer area', function () {
        lp.Login(data.email, data.password);
            expect<any>(ca.isLoaded()).toEqual(true);
            browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual('https://www.beta.drive-now.com/fi/en/customer/data/private')

            });


    });
    it('switch profiles',function () {
        // // ca.switchProfile();
        // browser.getCurrentUrl().then((url) =>{
        //     expect(url).toEqual('https://www.beta.drive-now.com/fi/en/customer/data/business')
        // });
        // expect<any>(ca.switchProfile()).toEqual(true)
        ca.updateAndStoreCustomerData();

    })




















});



