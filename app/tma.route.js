(function () {
	var rM = angular.module('tma.router');

	rM.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './_partials/views/accordion-view.html',
			controller: 'homeCtrl'
		});

	}]);

})();