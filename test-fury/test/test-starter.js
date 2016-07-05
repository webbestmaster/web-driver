var Test = require('./../tools/test-wrapper'),
	testSrc_1 = require('./test-src-1'),
	test = new Test({
		src: testSrc_1,
		driver: {
			// server: 'http://localhost:8080/wd/hub'
			// window: {
			// 	x: 50,
			// 	y: 50
				// width: 300,
				// height: 1000
			// }
		}
	});

test.run('first step');
