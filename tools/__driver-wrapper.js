"use strict";

var WebDriver = require('selenium-webdriver'),
	driverConfig = require('./driver-config'),
	driverInfo = require('./driver-info'),
	util = require('./util');
	// By = WebDriver.By,
	// until = WebDriver.until;


/**
 * @options -> .server (optional)		- will use as parameter for WebDriver.usingServer(options.server) 				- optional
 * 			-> .capabilities (optional)	- will use as parameter for WebDriver.withCapabilities(options.capabilities)	- optional
 *			-> .window (optional)	-> size (optional) 		-> .x, .y - position of window
 *									->	position (optional)	-> .width, .height - width and height of window
 *
 *
 * */

function Driver(options) {

	var driver = this;

	driver.attr = {};

	driver.initialize(options);

}

Driver.prototype.KEYS = {
	OPTIONS: 'driver:options',
	DRIVER: 'driver:driver'
};

Driver.prototype.initialize = function (optionsArg) {

	var driver = this,
		options = optionsArg || {},
		webDriver,
		webDriverWindow,
		windowConfig;

	// extend options by driverConfig if needed
	options = util.merge({}, driverConfig, options, true);

	webDriver = new WebDriver
		.Builder()
		.usingServer(options.server)
		.withCapabilities(options.capabilities)
		.build();

	// check driver running on desktop
	if (!options.server || options.server.search(driverInfo.mobile.pathName) === -1) {
		// set window position for desktop
		windowConfig = options.window;
		webDriverWindow = webDriver.manage().window();
		webDriverWindow.setPosition(windowConfig.x, windowConfig.y);
		webDriverWindow.setSize(windowConfig.width, windowConfig.height);
	}

	driver.set(driver.KEYS.OPTIONS, options);
	driver.set(driver.KEYS.DRIVER, webDriver);

};

Driver.prototype.set = function (key, value) {
	this.attr[key] = value;
};

Driver.prototype.get = function (key) {
	return this.attr[key];
};

Driver.prototype.getWebDriver = function (key) {
	var driver = this;
	return driver.get(driver.KEYS.DRIVER);
};

/**
* @url - open url
*
* */
Driver.prototype.open = function (url) {

	var driver = this,
		webDriver = driver.getWebDriver();

	webDriver.get(url);

	return driver;

};

Driver.prototype.By = WebDriver.By;
Driver.prototype.Key = WebDriver.Key;

Driver.prototype.waitAndClick = function (selector, cb) {

	var driver = this,
		webDriver = driver.getWebDriver();

	(function wait() {

		console.log('wait for', selector);

		webDriver.wait(
			webDriver
				.findElement(driver.By.css(selector))
				.then(function (elem) {
					// TODO: detect how to work isPresented()
					// return elem.isPresented();
					return elem.isDisplayed();
				})
				.then(function (isDisplayed) {
					return isDisplayed && webDriver.findElement(driver.By.css(selector)).click();
				})
				.then(cb, wait),
			1e3
		);

	}());

};

/**
* override webDriver 'native' method 'findElement'
* */

Driver.prototype.findElement = function (selector) {

	var driver = this,
		webDriver = driver.getWebDriver();

	return webDriver.findElement(driver.By.css(selector));

};

// extend prototype by webDriver 'native' methods
['sleep', 'quit'].forEach(function (method) {

	this[method] = function () {

		var driver = this,
			webDriver = driver.getWebDriver();

		webDriver[method].apply(webDriver, arguments);

		return driver;

	}

}, Driver.prototype);

module.exports = Driver;
