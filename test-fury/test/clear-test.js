"use strict";

var Driver = require('selenium-webdriver');

function addNode() {
	alert('hhhhh');

	var node = document.createElement('div'),
		style = node.style;

	node.className = 'click-me';

	style.position = 'absolute';
	style.width = '20px';
	style.height = '20px';
	style.left = '150px';
	style.top = '180';
	style.zIndex = 100000;
	style.pointerEvents = "none";
	style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

	document.body.appendChild(node);


}

module.exports = {
	name: 'best test',
	description: 'description for best test',
	tags: ['best', 'cool', 'perfect'],
	steps: {
		'first_step': function () {


			var driver = this;

			// driver.open('http://192.168.100.2:3000/');
			driver.get('http://vapesolius.com/lady16/');

			console.log('(' + addNode.toString() + '());');

			driver.executeScript('var node = document.createElement("div"), style = node.style;node.className = "click-me";style.position = "absolute";style.pointerEvents = "none";style.width = "40px";style.height = "40px";style.left = "165px";style.top = "350px";style.zIndex = 100000;style.backgroundColor = "rgba(255, 255, 255, 0.5)";document.body.appendChild(node);');

			driver.findElement(Driver.By.css('.click-me')).click();

			// driver.actions();



			// driver.actions().click(driver.findElement(Driver.By.css('body')), 40, 40).click().build().perform();

// /*
/*			driver.actions()
				.mouseMove(
					driver.findElement(Driver.By.css('div')), {
						x: 120,
						y: 120
					}
				)
				.click().perform();
/*

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
			driver.sleep(15e3);
			driver.quit();

		}

	}

};
