(function() {
	'use strict';

	angular
		.module('supermodular.calculator')
		.controller('CalcController', CalcController);

	CalcController.$inject = ['$scope'];

	/* @ngInject */
function CalcController($scope) {
var elt = document.getElementById('calculator');
var calculator = Desmos.Calculator(elt);
$scope.addCalculator = function () {
$scope.calculators.push(calculator);

	}
}
}) ();
