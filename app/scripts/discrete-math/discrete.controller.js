(function() {
	'use strict';

	angular
		.module('supermodular.discrete')
		.controller('DiscreteController', DiscreteController);

		DiscreteController.$inject = ['menuItems'];

	/* @ngInject */
	function DiscreteController(menuItems) {
		var vm = angular.extend(this, {
			//TODO: add methods and properties to this controller
		});

	}
})();
