var argv = process.argv,
	Test = require('./../tools/test-wrapper'),
	driverInfo = require('./../tools/driver-info'),
	clearTest = require('./clear-test'),
	clearTestVk = require('./clear-test-vk'),
	test = new Test({
		driver: {
			// server: driverInfo.getServerUrl(8080),
			server: driverInfo.getServerUrl(),
			window: {
				x: 50,
				y: 50,
				width: 1800,
				height: 600
			}
		}
	});

// test.run('login');
test.runSrc(clearTestVk, 'first_step');
