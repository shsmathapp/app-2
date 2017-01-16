(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Algebra 2',
			path: 'algebra-two',
			icon: 'ion-arrow-graph-up-right'
		}, {
			title: 'Calculus',
			path: 'calculus',
			icon: 'ion-speedometer'
		}, {
			title: 'Discrete Mathematics',
			path: 'discrete-math',
			icon: 'ion-cash'
		}, {
			title: 'Calculator',
			path: 'calculator',
			icon: 'ion-calculator'
		}];

		return data;
	}
})();
