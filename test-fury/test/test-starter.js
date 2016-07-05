var Test = require('./../tools/test-wrapper'),
	driverInfo = require('./../tools/driver-info'),
	testSrc_1 = require('./test-src-1'),
	test = new Test({
		src: testSrc_1,
		driver: {
			server: driverInfo.mobile.server,
			window: {
				x: 50,
				y: 50,
				width: 300,
				height: 1000
			}
		}
	});

test.run('first step');
