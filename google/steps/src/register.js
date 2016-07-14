"use strict";

var selectors = {
	loginButtom: '#gb_70',
	linkSignup: '#link-signup',
	firstName: '#FirstName',
	lastName: '#LastName',
	gmailAddress: '#GmailAddress',
	passwd: '#Passwd',
	passwdAgain: '#PasswdAgain',
	birthDay: '#BirthDay',
	monthLabel: '#month-label', // :1..:9, :a, :b, :c - month
	birthYear: '#BirthYear',
	gender: '#Gender', // :e, :f, :g - woman, man, not specified
	option: '.goog-menuitem',
	submitbutton: '#submitbutton'
};

module.exports = {
	name: 'best test',
	description: 'description for best test',
	tags: ['best', 'cool', 'perfect'],
	steps: {
		'register': function (googleUtil, testUtil) {

			var driver = this;

/*
			// override driver.findElement
			// to add human's behavior
			(function () {

				var nativeFindElement = driver.findElement;
				driver.findElement = function () {

					var driver  = this,
						min = 5,
						max = 15,
						sleepTime = Math.random() * (max - min) + min;

					driver.sleep(sleepTime * 1e3);

					return nativeFindElement.apply(driver, arguments);

				};

			}());

*/
			var regData = googleUtil.getRawBotData();

			driver.get('https://www.google.com');

			driver.findElement(testUtil.By.css(selectors.loginButtom)).click();

			driver.wait(
				function () { return driver.isElementPresent(testUtil.By.css(selectors.linkSignup)); },
				10e3
			);
			driver.findElement(testUtil.By.css(selectors.linkSignup)).click();

			// driver.get('https://accounts.google.com/SignUp');

			driver.wait(
				function () { return driver.isElementPresent(testUtil.By.css(selectors.firstName)); },
				10e3
			);
			driver.findElement(testUtil.By.css(selectors.firstName)).sendKeys(regData.name.en.first);

			driver.findElement(testUtil.By.css(selectors.lastName)).sendKeys(regData.name.en.last);
			driver.findElement(testUtil.By.css(selectors.gmailAddress)).sendKeys(
				regData.name.en.first + '.' + regData.name.en.last + regData.year
			);

			driver.findElement(testUtil.By.css(selectors.passwd)).sendKeys(regData.pass);
			driver.findElement(testUtil.By.css(selectors.passwdAgain)).sendKeys(regData.pass);

			driver.findElement(testUtil.By.css(selectors.birthDay)).sendKeys(regData.day);
			driver.findElement(testUtil.By.css(selectors.birthYear)).sendKeys(regData.year);

			driver.findElement(testUtil.By.css(selectors.monthLabel)).click();
			driver.findElements(testUtil.By.css(selectors.monthLabel + ' ' + selectors.option)).then(function (elems) {
				elems[regData.month - 1].click();
			});

			driver.findElement(testUtil.By.css(selectors.gender)).click();
			driver.findElements(testUtil.By.css(selectors.gender + ' ' + selectors.option)).then(function (elems) {
				elems[1].click();
			});

			driver.findElement(testUtil.By.css(selectors.submitbutton)).click();

			// submit terms, google's hack
			driver.executeScript('submitForm()');

			console.log(regData);

			// testUtil.addToUsers(regData);

			// driver.sleep(5000);
			// driver.quit();

		}

	}

};
