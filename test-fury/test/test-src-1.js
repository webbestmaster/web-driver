"use strict";

module.exports = {
	name: 'best test',
	description: 'description for best test',
	tags: ['best', 'cool', 'perfect'],
	steps: {
		'first step': function (driver) {

			driver.open('http://brodboksen.no/');
			driver.sleep(2e3);
			driver.waitAndClick('#home-button>.login');
			driver.waitAndClick('#user_email');
			driver.sleep(2e3);
			driver.findElement('#user_email').sendKeys('ikupreev@stone-labs.com');
			driver.findElement('#user_password').sendKeys('testtest123');
			driver.findElement('#login_form input[type="submit"]').click();
			driver.quit();

		}

	}

};
