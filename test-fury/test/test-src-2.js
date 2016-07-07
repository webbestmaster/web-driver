"use strict";

var webdriver = require('selenium-webdriver');

module.exports = {
	name: 'best test',
	description: 'description for best test',
	tags: ['best', 'cool', 'perfect'],
	steps: {
		'first step': function (driver) {

			// driver.open('http://192.168.10.17:4000/');
			driver.open('http://vapesolius.com/lady16/');

			driver.sleep(5e3);
			// driver.waitAndClick('.introButton .text');

			var webDriver = driver.get(driver.KEYS.DRIVER);

			driver.waitAndClick('canvas', function () {
				console.log('!!!!!');
			});

			driver.sleep(2e3);

			

			webDriver.actions()
				.mouseMove(
					webDriver.findElement(driver.By.css('canvas')), {
						x: 240,
						y: 180
					}
				)
				.click()
				.perform();

			// driver.open('https://www.google.by/');
			// driver.findElement('#lst-ib').sendKeys('I love webDriver and autotest');
			// driver.findElement('#lst-ib').sendKeys(driver.Key.RETURN);
			// driver.findElement('[name="btnK"]').click();

			// driver.wait()

			// driver.sleep(10e3);
			// driver.waitAndClick('.introButton .text');
			// driver.waitAndClick('.introButton');
			// driver.waitAndClick('.introButton');
			// driver.waitAndClick('.introButton');
			// driver.waitAndClick('.introButton');
			// driver.waitAndClick('.introButton');
			// driver.waitAndClick('.introButton');
			// driver.waitAndClick('.introButton');
			// driver.waitAndClick('.introButton');
			// driver.waitAndClick('.introButton');
			// driver.sleep(3e3);
			// driver.waitAndClick('#user_email');
			// driver.findElement('#user_email').sendKeys('ikupreev@stone-labs.com');
			// driver.findElement('#user_password').sendKeys('testtest123');
			// driver.findElement('#login_form input[type="submit"]').click();
			driver.sleep(5e3);
			driver.quit();

		}

	}

};
