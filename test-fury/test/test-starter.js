var argv = process.argv,
	Test = require('./../tools/test-wrapper'),
	driverInfo = require('./../tools/driver-info'),
	testSrc_1 = require('./test-src-2'),
	test = new Test({
		src: testSrc_1,
		driver: {
			server: driverInfo.mobile.server.replace('8080', argv[2]),
			window: {
				x: 50,
				y: 50,
				width: 300,
				height: 1000
			}
		}
	});

console.log(driverInfo.mobile.server.replace('8080', argv[2]));

test.run('first step');
