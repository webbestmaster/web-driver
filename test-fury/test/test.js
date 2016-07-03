"use strict";

var webdriver = require('selenium-webdriver');

function Test(options) {

	var test = this;

	test.attr = {};

	test.initialize(options);

}

Test.prototype.KEYS = {
	SRC: 'test:src'
};

Test.prototype.initialize = function (options) {

	var test = this;

	test.set(test.KEYS.SRC, options.src);

};

Test.prototype.set = function (key, value) {
	this.attr[key] = value;
};

Test.prototype.get = function (key) {
	return this.attr[key];
};


