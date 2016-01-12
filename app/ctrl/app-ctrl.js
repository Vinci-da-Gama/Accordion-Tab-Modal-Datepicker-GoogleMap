(function () {
	var ctrlM = angular.module('tma.ctrl');

	ctrlM.controller('dpCtrl', ['$scope', function($scope){
		console.log('dpCtrl');
		$scope.dateFormat = 'dd/MM/yyyy';

		$scope.leftdp = { opened: false };

		$scope.rightdp = { opened: false };

		// This is how to open the calendar. uib-datepicker has default opened must be assigned some value.
		$scope.leftOpen = function($event) {
			/*$event.preventDefault();
			$event.stopPropagation();*/
		    $scope.leftdp.opened = true;
		    console.log('leftOpen_Function.');
		};

		$scope.rightOpen = function ($event) {
			$scope.rightdp.opened = true;
		    console.log('rightOpen_Function.');
		};

		$scope.maxDate = new Date();
		$scope.minDate = new Date();

	}]);

	ctrlM.controller('accordionCtrl', ['$scope', function($scope){
		console.log('accordionCtrl');
	}]);

	ctrlM.controller('tabCtrl', ['$scope', function($scope){
		console.log('tabCtrl');
	}]);

	ctrlM.controller('modalCtrl', ['$scope', function($scope){
		console.log('modalCtrl');
	}]);

	ctrlM.controller('goomapCtrl', ['$scope', function($scope){
		console.log('goomapCtrl');
	}]);

})();