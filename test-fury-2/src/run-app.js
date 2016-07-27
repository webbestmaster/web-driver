"use strict";

module.exports = {
	name: 'best test',
	description: 'description for best test',
	tags: ['best', 'cool', 'perfect'],
	steps: {
		'run': function (url) {

			var test = this,
				driver = test.getDriver();

				driver.get(url);

/*
				driver.wait(
					function () { return driver.isElementPresent(testUtil.By.css('.introButton.centered')); },
					5e3
				).catch(function () {
					// driver.quit();
				});
*/

/*
			driver.findElement(WebDriver.By.css('.introButton.centered')).click();
 
			driver.sleep(10e3);

			driver.quit();
*/

		}

	}

};
