(function() {
	'use strict';

	angular
		.module('supermodular.calculus')
		.controller('CalculusController', CalculusController);

	CalculusController.$inject = ['$state', 'calculusService'];

	/* @ngInject */
	function CalculusController($state, calculusService) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate
		});

		function activate() {
			getArticles();
		}
		activate();

		// ********************************************************************

		function getArticles() {
			calculusService.getArticles()
				.then(function(articles) {
					vm.articles = articles;
				});
		}

		function navigate(articleId) {
			$state.go('app.calculus-second', { articleId: articleId });
		}
	}
})();
