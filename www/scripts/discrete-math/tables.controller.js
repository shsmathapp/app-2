(function() {
	'use strict';

	angular
		.module('supermodular.discrete')
		.controller('TablesController', function($scope, $timeout, ionPullUpFooterState) {
		      $scope.onFooterExpand = function() {
		        console.log('Footer expanded');
		      };
		      $scope.onFooterCollapse = function() {
		          console.log('Footer collapsed');
		      };

		      $scope.expand = function() {
		        $scope.footerState = ionPullUpFooterState.EXPANDED;
		      };

    TablesController.$inject = ['menuItems'];

    function TablesController(menuItems) {
      var vm = angular.extend(this, {
        //TODO: add methods and properties to this controller

    })
	}
});
})();
