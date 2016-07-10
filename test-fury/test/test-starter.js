var argv = process.argv,
	Test = require('./../tools/test-wrapper'),
	driverInfo = require('./../tools/driver-info'),
	testSrc = require('./clear-test-vk'),
	testGoogle = require('./google'),
	test = new Test({
		// src: testGoogle,
		driver: {
			// server: driverInfo.getServerUrl(8080),
			server: driverInfo.getServerUrl(),
			window: {
				x: 50,
				y: 50,
				width: 800,
				height: 600
			}
		}
	});

// test.run('login');
test.runSrc(testGoogle, 'login');


