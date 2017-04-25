"use strict";
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    //a location to store screenshot
    dest: 'screenshots',
    filename: 'wrapper.html'
});
//e2e.conf.ts
exports.config = {
    framework: 'jasmine',
    //The address of a running selenium server.
    seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    //Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        //If true,print colors to the terminal 
        showColors: true,
        //How long to wait for a page to load
        getPageTimeout: 70000,
        //Default time to wait in ms before a test fails
        defaultTimeoutInterval: 320000,
        jasmineNodeOpts: { defaultTimeoutInterval: 320000 },
    },
    // Assign the test reporter to each running instance
    onPrepare: function () {
        //function to maximize browser and synchronize the page once url is loaded  
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        //Option to be stored screenshot report of each specs   
        jasmine.getEnv().addReporter(reporter);
    },
    //Support 'Angular2' test application in protractor 
    useAllAngular2AppRoots: true,
    //Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
    },
    suites: {
	
	'.app/sampleE2E.ts'
    },
};