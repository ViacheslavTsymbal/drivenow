import {Helper} from "../Modules/helper"

const helper = new Helper();

describe("redirection functionality tests",function () {

    it("invalid urls creation", function () {
        helper.open("/de/sv/pricing").then((url) => {
            expect(url).toEqual("https://www.beta.drive-now.com/404")

        });
        helper.open("/de/fr/pricing").then((url) => {
            expect(url).toEqual("https://www.beta.drive-now.com/404")

        });
        helper.open("/de/sv/how-it-works").then((url) => {
            expect(url).toEqual("https://www.beta.drive-now.com/404")

        });
        helper.open("/de/fr/blog").then((url) => {
            expect(url).toEqual("https://www.beta.drive-now.com/404")

        });
        helper.open("/de/sv/tips").then((url) => {
            expect(url).toEqual("https://www.beta.drive-now.com/404")

        });
    })











});

