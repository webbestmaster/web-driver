"use strict";

var WebDriver = require('selenium-webdriver');

var testUtil = {

	WebDriver: WebDriver,

	By: WebDriver.By,
	Key: WebDriver.Key,

	merge: function merge() {

		var args = Array.prototype.slice.call(arguments),
			isDeep = args[args.length - 1],
			recipient;

		// detect las argument for boolean
		if (typeof isDeep === 'boolean') {

			args.pop(); // remove last argument, it is saved to isDeep

			recipient = args.shift(); // move first arguments to recipient

			args.forEach(function (obj) {

				Object.keys(obj).forEach(function (key) {

					if (isDeep && typeof obj[key] === 'object') {
						recipient[key] = recipient[key] || {};
						return merge(recipient[key], obj[key], isDeep);
					}

					recipient[key] = obj[key];

				});

			});

			return recipient;

		}

		args.push(false);

		return merge.apply(null, args);

	}

	// toArray: function (likeArray) {
	//
	// 	return Array.prototype.slice.call(likeArray);
	//
	// }

};

module.exports = testUtil;
