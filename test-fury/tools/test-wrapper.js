"use strict";

var Driver = require('./driver-wrapper');

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
	SRC: 'test:src',
	DRIVER: 'test:driver'
	// DRIVER_OPTIONS: 'test:driver-options'
};

Test.prototype.initialize = function (options) {

	var test = this;

	test.set(test.KEYS.SRC, options.src);
	test.set(test.KEYS.DRIVER, new Driver(options.driver));

};

Test.prototype.run = function (step) {

	var test = this,
		testSrc = test.get(test.KEYS.SRC),
		driver = test.get(test.KEYS.DRIVER);

	testSrc.steps[step](driver);

};

Test.prototype.set = function (key, value) {
	this.attr[key] = value;
};

Test.prototype.get = function (key) {
	return this.attr[key];
};

module.exports = Test;
