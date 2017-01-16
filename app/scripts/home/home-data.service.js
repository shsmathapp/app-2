(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('homeDataService', homeDataService);

	homeDataService.$inject = [];

	/* @ngInject */
	function homeDataService() {
		return {
			phoneNumber: '+6173087943',
			email: 'creidy@k12.somerville.ma.us',
			officeLocation: '42.38698636,-71.09702367',
			facebookPage: 'http://www.somerville.k12.ma.us/schools/somerville-high-school'
		};
	}
})();
