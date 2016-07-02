var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;


var driver = new webdriver
	.Builder()
// .usingServer('http://localhost:8181/wd/hub') // leave empty ( .usingServer() or with '' ) to use regular port
	.withCapabilities({browserName: 'chrome'})
	.build();

// driver.manage().timeouts().implicitlyWait(1500);

// process.on('exit', function () {
	// driver.quit();

// });

driver.get('http://brodboksen.no/');

function waitAndClick(selector) {

	(function wait() {

		console.log('wait for', selector);

		driver.wait(
			driver
				.findElement(By.css(selector))
				.then(function (elem) {
					return elem.isDisplayed();
				})
				.then(function (isDisplayed) {
					return isDisplayed && driver.findElement(By.css(selector)).click();
				})
				.then(function () {}, wait),
			50e3
		);

	}());

}

waitAndClick('#home-button>.login');
waitAndClick('#user_email');
driver.findElement(By.css('#user_email')).sendKeys('ikupreev@stone-labs.com');
driver.findElement(By.css('#user_password')).sendKeys('testtest123');
driver.findElement(By.css('#login_form input[type="submit"]')).click();
