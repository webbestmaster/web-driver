"use strict";

var rawUsers = require('./raw-users.json');
var users = require('./users.json');
var fs = require('fs');

module.exports = {
	
	getRawBotData: function () {

		// find not registered user
		var rawUserData;

		rawUsers.forEach(function (rawUser) {

			if (rawUserData) {
				return;
			}

			var isInUsers = false;

			users.forEach(function (user) {

				if (isInUsers) {
					return;
				}

				if (
					user.name.en.first === rawUser.name.en.first &&
					user.name.en.last === rawUser.name.en.last
				) {
					isInUsers = true;
				}

			});

			if (isInUsers) {
				return;
			}

			rawUserData = rawUser;

		});
		
		return rawUserData;

	},

	addToUsers: function (rawData) {

		var newUsers = JSON.parse(JSON.stringify(users));

		newUsers.push(rawData);

		fs.writeFileSync('./users.json', JSON.stringify(newUsers), 'utf-8');


	}

};
