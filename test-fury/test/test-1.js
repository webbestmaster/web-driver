module.exports = function (driver, util) {

	"use strict";

	driver.get('http://brodboksen.no/');
	driver.sleep(2e3);
	util.waitAndClick('#home-button>.login');
	util.waitAndClick('#user_email');
	driver.sleep(2e3);
	driver.findElement(util.By.css('#user_email')).sendKeys('ikupreev@stone-labs.com');
	driver.findElement(util.By.css('#user_password')).sendKeys('testtest123');
	driver.findElement(util.By.css('#login_form input[type="submit"]')).click();
	driver.quit();

};
