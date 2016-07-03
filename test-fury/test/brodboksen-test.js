var TestUtil = require('./test-util'),
	testUtil = new TestUtil(),
	driver = testUtil.createDriver({usingServer: 'http://localhost:8080/wd/hub'}),
	test1 = require('./test-1');

testUtil.setDriver(driver);

test1(driver, testUtil);





return;

testUtil = new TestUtil();
driver = testUtil.createDriver({usingServer: 'http://localhost:8080/wd/hub'});

testUtil.setDriver(driver);

test1(driver, testUtil);
