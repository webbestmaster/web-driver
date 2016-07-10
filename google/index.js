var Test = require('./../test-fury/tools/test-wrapper'),
	driverInfo = require('./../test-fury/tools/driver-info'),
	steps = require('./steps'),
	util = require('./util'),
	test = new Test({
		driver: {
			server: driverInfo.getServerUrl(),
			window: {
				x: 50,
				y: 50,
				width: 1024,
				height: 768
			}
		}
	});

test.runSrc(steps.register, 'register', [util]);
