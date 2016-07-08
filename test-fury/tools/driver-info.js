module.exports = {

	mobile: {
		pathName: '/wd/hub/',
		protocol: 'http',
		port: 8080,
		domain: 'localhost'
	},

	// can pass ip or port
	// if get only one parameter will get this as port
	getServerUrl: function (ipOrPort, port) {

		var mobileData = this.mobile,
			argsLen = arguments.length,
			url;

		switch (argsLen) {

			// no any arguments
			case 0:
				// url = undefined;
				break;

			// port only
			case 1:
				url = mobileData.protocol + '://' + mobileData.domain + ':' + ipOrPort + mobileData.pathName;
				break;

			case 2:
				url = mobileData.protocol + '://' + ipOrPort + ':' + port + mobileData.pathName;
				break;
		}

		return url;

	}

};
