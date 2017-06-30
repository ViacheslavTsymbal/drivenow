"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
var failFast = require("protractor-fail-fast");
exports.config = {
    seleniumServerJar: require("selenium-standalone-jar").path,
    chromeDriver: require("chromedriver").path,
    // seleniumPort: 4444,
    // selenium: "http://127.0.0.1:4444/wd/hub",
    baseUrl: "https://drvnw:drivenow13@www.beta.drive-now.com/",
    params: {
        runOnJenkins: false,
    },
    plugins: [
        failFast.init(),
    ],
    afterLaunch: function () {
        failFast.clean(); // Removes the fail file once all test runners have completed.
    },
    capabilities: {
        "browserName": "chrome",
        // proxy: {
        //     proxyType: 'manual',
        //     httpProxy: 'wp.sixt.de:8080',
        //     sslProxy: 'wp.sixt.de:8080'
        // },
        "chromeOptions": {
            // Get rid of --ignore-certificate yellow warning
            args: ["--no-sandbox", "--test-type=browser", "disable-infobars"],
            // Set download path and avoid prompting for download even though
            // this is already the default on Chrome but for completeness
            prefs: {
                'credentials_enable_service': false,
                "download": {
                    "prompt_for_download": false,
                },
                "profile": {
                    'password_manager_enabled': false
                },
            },
        },
    },
    specs: [
        // "../specs/spec.demo.js",
        "../specs/reg1.js",
    ],
    directConnect: true,
    framework: "jasmine",
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 3000000,
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        // browser.driver.manage().window().setSize(1440, 1080);
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: "./reports/",
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
        }));
    },
};
