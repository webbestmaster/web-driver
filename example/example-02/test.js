var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver
	.Builder()
	.usingServer('http://localhost:8080/wd/hub') // leave empty ( .usingServer() or with '' ) to use regular port
	.withCapabilities({ browserName: '' })
	.build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
