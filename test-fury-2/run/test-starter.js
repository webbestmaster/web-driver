var argv = process.argv,
	Test = require('./../../tools/test'),
	driverInfo = require('./../../tools/driver-info'),
	runAppSrc = require('./../src/run-app'),
	test = new Test({
		driver: {
			server: driverInfo.getServerUrl(8080),
			// server: driverInfo.getServerUrl(),
			window: {
				x: 50,
				y: 50,
				width: 1800,
				height: 600
			}
		}
	});

// test.run('login');
test.run(runAppSrc, 'run', 'http://192.168.10.17:4000/');




