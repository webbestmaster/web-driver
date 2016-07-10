"use strict";

var fs = require('fs');
var sha1 = require('sha1');

var util = {

	getBotName: function () {

		var file = fs.readFileSync('./bot-names-all.txt', 'utf-8');

		file = file.split('\n');

		file = file.map(function (FIO) {
			// console.log(FIO);
			FIO = FIO.split(/\s+/gi);
			// console.log(FIO);
			return {
				firstName: 	FIO[1].trim(),
				lastName:	FIO[0].trim(),
				fatherName:	FIO[2].trim()
			};
		});

		return file;

	},

	translit: function (str) {

		var space = '-',
			translMap = {
			'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
			'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
			'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
			'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': 'y', 'ы': 'y', 'ь': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',
			' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
			'#': space, '$': space, '%': space, '^': space, '&': space, '*': space,
			'(': space, ')': space,'-': space, '\=': space, '+': space, '[': space,
			']': space, '\\': space, '|': space, '/': space,'.': space, ',': space,
			'{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
			'?': space, '<': space, '>': space, '№':space
		},
		latString = '';

		str.split('').forEach(function (char) {

			var isUpperCase = char.toUpperCase() === char,
				latChar = translMap[char.toLowerCase()];

			if (isUpperCase) {
				latChar = latChar.split('');
				latChar[0] = latChar[0].toUpperCase();
				latChar = latChar.join('');
			}

			latString += latChar;

		});

		return latString;

	},

	nameToDOB: function (str) {

		var arr = [str.charCodeAt(0), str.charCodeAt(1), str.charCodeAt(1)];

		arr = arr.map(function (number) {

			number = number % 10;

			if (number === 0) {
				number = 1;
			}

			return number;

		});

		return {
			day: arr[0],
			month: arr[1],
			year: arr[2]
		};

	},

	createJson: function () {

		var util = this;

		return util.getBotName().map(function (data) {

			var dob = util.nameToDOB(data.firstName);

			return {

				name: {
					en: {
						first: util.translit(data.firstName),
						last: util.translit(data.lastName),
						father: util.translit(data.fatherName)
					},
					ru: {
						first: data.firstName,
						last: data.lastName,
						father: data.fatherName
					}
				},
				day: dob.day,
				month: dob.month,
				year: 1980 + dob.year,
				pass: util.passFromData(dob, data)
			};

		});

	},

	passFromData: function (dob, name) {

		var pass = sha1(name.firstName + name.lastName + name.fatherName + dob.day + dob.month + dob.year).split('');

		pass = pass.map(function (char, index) {

			if (index % 2) {
				char = char.toUpperCase();
			}

			return char;

		});

		pass = pass.slice(0, 5).join('') + this.translit(name.fatherName) + pass.slice(5, 10).join('');

		return pass;

	}

};

/*
var json = JSON.stringify(util.createJson());

console.log(json);

fs.writeFileSync('./raw-users.json', json, 'utf-8');
*/


module.exports = util;
