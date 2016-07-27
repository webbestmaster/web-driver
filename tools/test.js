"use strict";

var WebDriver = require('selenium-webdriver'),
	chrome = require('selenium-webdriver/chrome'),
	driverConfig = require('./driver-config'),
	driverInfo = require('./driver-info'),
	testUtil = require('./test-util'),
	chromeOptions = new chrome.Options();

chromeOptions.addArguments(['test-type']);

// chromeOptions.addArguments(['user-agent="YOUR_USER_AGENT"']);


/**
* @options 	-> .src 	- test src
* 			-> .driver	- driver options	- optional
*
* */

function Test(options) {

	var test = this;

	test.attr = {};

	test.initialize(options);

}

Test.prototype.KEYS = {
	// SRC: 'test:src',
	DRIVER: 'test:driver',
	DRIVER_OPTIONS: 'test:driver-options'
	// DRIVER_OPTIONS: 'test:driver-options'
};

Test.prototype.initialize = function (options) {

	var test = this;

	test.initializeDriver(options.driver);

};

/**
* .server - url of server
* .window -> window size and position - string - optional
* 			-> x - number
* 			-> y - number
* 			-> width - number
* 			-> height - number
* */

Test.prototype.initializeDriver = function (optionsArg) {

	var test = this,
		options = optionsArg || {},
		webDriver,
		webDriverWindow,
		windowConfig;

	// extend options by driverConfig if needed
	options = testUtil.merge({}, driverConfig, options, true);

	webDriver = new WebDriver
		.Builder()
		.usingServer(options.server)
		.withCapabilities(chromeOptions.toCapabilities())
		.build();

	// check driver running on desktop
	if (!options.server || options.server.search(driverInfo.mobile.pathName) === -1) {
		// set window position for desktop
		windowConfig = options.window;
		webDriverWindow = webDriver.manage().window();
		webDriverWindow.setPosition(windowConfig.x, windowConfig.y);
		webDriverWindow.setSize(windowConfig.width, windowConfig.height);
	}

	test.set(test.KEYS.DRIVER, webDriver);
	test.set(test.KEYS.DRIVER_OPTIONS, options);

};

Test.prototype.run = function (testSrc, step, fnArgs) {
	fnArgs = fnArgs ? [fnArgs] : [];
	testSrc.steps[step].apply(this, fnArgs);
};

Test.prototype.getDriver = function () {
	var test = this;
	return test.get(test.KEYS.DRIVER);
};

Test.prototype.set = function (key, value) {
	this.attr[key] = value;
};

Test.prototype.get = function (key) {
	return this.attr[key];
};

module.exports = Test;
