"use strict";

module.exports = {
	name: 'best test',
	description: 'description for best test',
	tags: ['best', 'cool', 'perfect'],
	steps: {
		'first_step': function (testUtil) {

			var driver = this;

				driver.get('http://192.168.10.17:4000/');

				driver.wait(
					function () { return driver.isElementPresent(testUtil.By.css('.introButton.centered')); },
					5e3
				).catch(function () {
					// driver.quit();
				});

/*
			driver.findElement(WebDriver.By.css('.introButton.centered')).click();
 
			driver.sleep(10e3);

			driver.quit();
*/

		}

	}

};
