var Test = require('./../tools/test-wrapper'),
	testSrc_1 = require('./test-src-1'),
	test = new Test({
		src: testSrc_1,
		driver: {
			// server: 'http://localhost:8080/wd/hub'
		}
	});


test.run('first step');