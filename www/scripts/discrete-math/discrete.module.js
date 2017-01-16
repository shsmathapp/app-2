(function() {
	'use strict';

	angular
		.module('supermodular.discrete', [
			'ionic',
			'ngCordova',
			'ionic-pullup'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.discrete', {
					url: '/discrete-math',
					views: {
						'menuContent': {
							templateUrl: 'scripts/discrete-math/discrete-math.html',
							controller: 'DiscreteController as vm'
						}
					}
				})
				.state('app.tables', {
					url: '/tables',
					views: {
						'menuContent': {
							templateUrl: 'scripts/discrete-math/tables.html',
							controller: 'TablesController as vm'
						}
					}
				});
		});
})();
