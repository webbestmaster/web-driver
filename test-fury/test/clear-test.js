"use strict";

var Driver = require('selenium-webdriver');

module.exports = {
	name: 'best test',
	description: 'description for best test',
	tags: ['best', 'cool', 'perfect'],
	steps: {
		'first_step': function () {


			var driver = this;

			// driver.open('http://192.168.100.2:3000/');
			driver.get('http://192.168.10.17:8000/');

			// driver.findElement(Driver.By.css('body')).tap(
			// 	50,
			// 	50
			// );


			// driver.actions();

			driver.findElement(Driver.By.css('body')).then(function (elem) {
				// elem.click();
			});

			// driver.actions().click(driver.findElement(Driver.By.css('body')), 40, 40).click().build().perform();

// /*
			driver.actions()
				.mouseMove(
					driver.findElement(Driver.By.css('body')), {
						x: 120,
						y: 120
					}
				)
				.click().perform();
// */

/*
			driver.actions()
				.mouseMove(
					driver.findElement(Driver.By.css('body')), {
						x: 140,
						y: 180
					}
				)
				.click()
*/
				// .perform();


			// driver.sleep(10e3);
			// driver.waitAndClick('#home-button>.login');
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
