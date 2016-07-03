
"use strict";

var webdriver = require('selenium-webdriver'),
	driverDefaultSetting = require('./driver-default-setting');

function Util() {

	this.attr = {};
}

Util.prototype.setDriver = function (driver) {
	this.attr.driver = driver;
};

Util.prototype.getDriver = function () {
	return this.attr.driver;
};

Util.prototype.createDriver = function (options) {

	options = options || {};

	var driver = new webdriver
		.Builder();

	if ( options.hasOwnProperty('usingServer') ) {
		driver = driver.usingServer(options.usingServer); // 'http://localhost:8181/wd/hub'
	}

	if ( options.hasOwnProperty('withCapabilities') ) {
		driver = driver.withCapabilities(options.withCapabilities); //
	} else {
		driver = driver.withCapabilities(driverDefaultSetting.withCapabilities); //
	}

	return driver.build();

};

Util.prototype.waitAndClick = function (selector) {

	var util = this,
		driver = util.getDriver();

	(function wait() {

		console.log('wait for', selector);

		driver.wait(
			driver
				.findElement(util.By.css(selector))
				.then(function (elem) {
					return elem.isDisplayed();
				})
				.then(function (isDisplayed) {
					return isDisplayed && driver.findElement(util.By.css(selector)).click();
				})
				.then(function () {
				}, wait),
			1e3
		);

	}());

};

Util.prototype.By = webdriver.By;

module.exports = function (driver) {
	return new Util(driver);
};
