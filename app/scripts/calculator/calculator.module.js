(function() {
	'use strict';

	angular
		.module('supermodular.calculator', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.calculator', {
				url: '/calculator',
				views: {
					'menuContent': {
						templateUrl: 'scripts/calculator/calculator.html',
						controller: 'CalcController as vm'
					}
				}
			});
		});
})();
