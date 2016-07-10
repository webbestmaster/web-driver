"use strict";

var selectors = {
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
		'register': function (util, WebDriver) {

			var driver = this;

			var regData = util.getRawBotData();

			driver.get('https://accounts.google.com/SignUp');

			driver.findElement(WebDriver.By.css(selectors.firstName)).sendKeys(regData.name.en.first);
			driver.findElement(WebDriver.By.css(selectors.lastName)).sendKeys(regData.name.en.last);
			driver.findElement(WebDriver.By.css(selectors.gmailAddress)).sendKeys(
				regData.name.en.first + '.' + regData.name.en.last + regData.year
			);

			driver.findElement(WebDriver.By.css(selectors.passwd)).sendKeys(regData.pass);
			driver.findElement(WebDriver.By.css(selectors.passwdAgain)).sendKeys(regData.pass);

			driver.findElement(WebDriver.By.css(selectors.birthDay)).sendKeys(regData.day);
			driver.findElement(WebDriver.By.css(selectors.birthYear)).sendKeys(regData.year);

			driver.findElement(WebDriver.By.css(selectors.monthLabel)).click();
			driver.findElements(WebDriver.By.css(selectors.monthLabel + ' ' + selectors.option)).then(function (elems) {
				elems[regData.month - 1].click();
			});

			driver.findElement(WebDriver.By.css(selectors.gender)).click();
			driver.findElements(WebDriver.By.css(selectors.gender + ' ' + selectors.option)).then(function (elems) {
				elems[1].click();
			});

			driver.findElement(WebDriver.By.css(selectors.submitbutton)).click();

			// submit terms, google's hack
			driver.executeScript('submitForm()');

			console.log(regData);

			// util.addToUsers(regData);

			// driver.sleep(5000);
			// driver.quit();

		}

	}

};