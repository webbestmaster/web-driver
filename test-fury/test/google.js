"use strict";

module.exports = {
	name: 'google',
	description: 'set google\'s services',
	tags: ['google', 'youtube', 'gmail', 'login'],
	steps: {
		'login': function (WebDriver) {

			var driver = this;

			driver.get('http://google.com/');

			// .gb_hf.gb_R // wrapper for login button
			driver.findElement(WebDriver.By.css('.gb_hf.gb_R')).click();

			driver.wait(
				function () { return driver.isElementPresent(WebDriver.By.id('Email')); },
				5e3
			);
			driver.findElement(WebDriver.By.id('Email')).sendKeys('bill.fewel@gmail.com');
			driver.findElement(WebDriver.By.id('next')).click();

			driver.wait(
				function () { return driver.isElementPresent(WebDriver.By.id('Passwd')); },
				5e3
			);
			driver.findElement(WebDriver.By.id('Passwd')).sendKeys('qwertybill');
			driver.findElement(WebDriver.By.id('signIn')).click();

			driver.get('http://youtube.com/');


/*
			driver.wait(
				function () { return driver.isElementPresent(WebDriver.By.css('.introButton.centered')); },
				150e3
			);

			driver.findElement(WebDriver.By.css('.introButton.centered')).click();

			driver.sleep(10e3);

			driver.quit();
*/

		}

	}

};
