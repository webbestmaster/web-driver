"use strict";

module.exports = {
	name: 'best test',
	description: 'description for best test',
	tags: ['best', 'cool', 'perfect'],
	steps: {
		'first_step': function (WebDriver) {

			var driver = this;

			driver.get('http://new.vk.com/');
			// driver.get('https://accounts.google.com/SignUp?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hl=ru');

			// driver.wait(
			// 	function () { return driver.isElementPresent(WebDriver.By.css('.introButton.centered')); },
			// 	150e3
			// );

			driver.findElement(WebDriver.By.name('email')).sendKeys('turovtsov@mail.ru');

			driver.findElement(WebDriver.By.name('pass')).sendKeys('qwerty123');

			driver.sleep(2e3);
			driver.findElement(WebDriver.By.name('pass')).sendKeys(WebDriver.Key.ENTER);


			driver.wait(
				function () { return driver.isElementPresent(WebDriver.By.css('.new_item_link')); },
				10e3
			);


			driver.executeScript('document.querySelector(".new_item_link").click()');

			// driver.findElement(WebDriver.By.css('.new_item_link')).getAttribute('href').then(function (href) {
			// 	console.log(href);
			// 	return driver.get(href);
			// });
			driver.sleep(2e3);

			driver.findElement(WebDriver.By.name('message')).sendKeys(' I was born ! ');

			driver.sleep(2e3);
			// driver.executeScript('document.querySelector("#feed_add_form .button").click()');
			driver.findElement(WebDriver.By.css('#feed_add_form .button')).click();

			driver.sleep(2e3);
			// driver.findElement(WebDriver.By.css('input.button')).focus();

			driver.sleep(10e3);

			driver.quit();

		}

	}

};
