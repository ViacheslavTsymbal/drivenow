let Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
let failFast = require("protractor-fail-fast");
let userDataFile = require('../Modules/user.json');




export const config = {
    directConnect: true,
    seleniumServerJar: require("selenium-standalone-jar").path,
    chromeDriver: require("chromedriver").path,
    baseUrl: "https://www.beta.drive-now.com/",
    params: {
        user: {
            email: userDataFile.email,
            password: userDataFile.password,
            runOnJenkins: false,

        },
    },
    framework: "jasmine",
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 500000,
    },
    capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            // Get rid of --ignore-certificate yellow warning
            args: ["--no-sandbox", "--test-type=browser", "disable-infobars"],
            // Set download path and avoid prompting for download even though
            // this is already the default on Chrome but for completeness
            prefs: {
                'credentials_enable_service': false,
                "download": {
                    "prompt_for_download": false,
                    // "default_directory": "/e2e/downloads/",
                },
                "profile":{
                    'password_manager_enabled': false
                },
            },
        },
    },
    specs: [

         //"../Specs/spec_Registration.js",
         //"../Specs/spec_Redirects.js",
        // "../Specs/spec_Home.js",
        "../Specs/spec_CustomerArea.js"
    ],

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        // browser.get("https://drvnw:drivenow13@www.beta.drive-now.com/").then(function(){
        //     console.log("Proxy login, basic authorizaiton:\nusername:drvnw\npassword:drivenow13");
        // });
        // browser.driver.manage().window().setSize(1440, 1080);
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: "../Reports/",
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
        }));
    },
};
