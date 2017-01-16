(function() {
	'use strict';

	angular
		.module('supermodular.calculus', [
			'ionic',
			'supermodular.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.calculus', {
					url: '/calculus',
					views: {
						'menuContent': {
							templateUrl: 'scripts/calculus/calculus.html',
							controller: 'CalculusController as vm'
						}
					}
				})
				.state('app.calculus-second', {
					url: '/calculus-second/:articleId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/calculus/calculus-second.html',
							controller: 'CalculusSecondController as vm'
						}
					}
				});
		});
})();
