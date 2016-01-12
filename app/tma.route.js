(function () {
	var rM = angular.module('tma.router');

	rM.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/dp');

		$stateProvider
		.state('dp', {
			url: '/dp',
			templateUrl: './_partials/views/datepicker-view.html',
			controller: 'dpCtrl'
		})
		.state('accordion', {
			url: '/accordion',
			templateUrl: './_partials/views/accordion-view.html',
			controller: 'accordionCtrl'
		})
		.state('tab', {
			url: '/tab',
			templateUrl: './_partials/views/tab-view.html',
			controller: 'tabCtrl'
		})
		.state('modal', {
			url: '/modal',
			templateUrl: './_partials/views/modal-view.html',
			controller: 'modalCtrl'
		})
		.state('googlemap', {
			url: '/googlemap',
			templateUrl: './_partials/views/googlemap-view.html',
			controller: 'goomapCtrl'
		});

	}]);

})();