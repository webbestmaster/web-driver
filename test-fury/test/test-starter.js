var argv = process.argv,
	Test = require('./../tools/test-wrapper'),
	driverInfo = require('./../tools/driver-info'),
	testSrc_1 = require('./clear-test-vk'),
	test = new Test({
		src: testSrc_1,
		driver: {
			server: driverInfo.getServerUrl(8080),
			window: {
				x: 50,
				y: 50,
				width: 800,
				height: 600
			}
		}
	});

test.run('first_step');
