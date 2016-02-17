(function () {
	var dM = angular.module('tma.dir');

	dM.directive('modalMiddle', ['$uibModal', function($uibModal){
		return {
			scope: {
				'modalSize': '@',
				'itemList': '=',
				'callback': '&'
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				$scope.items = $scope.itemList;
				/*$scope.$watch('itemList', function (nv, ov) {
					if (nv !== ov) {
						$scope.items = $scope.itemList;
					} else {
						console.log('itemList is not changed.');
					}
				});*/
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			replace: false,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				var uibModalObj = {
					templateUrl: './_partials/templates/modal-tmpl.html',
					size: $scope.modalSize[1],
					scope: $scope
				};

				iElm.bind('click', function() {
					$scope.modalMiddleInstance = $uibModal.open(uibModalObj);

					$scope.modalMiddleInstance.result.then($scope.callback, function () {
						console.log('No callback function is triggerd.');
					});

				});

				$scope.pickUpTheOneYouLike = function (e, thePreparedItem) {
					e.preventDefault();
					$scope.selectedItem = thePreparedItem;
				};

				$scope.saveChange = function () {
					if ($scope.selectedItem !== '' && $scope.selectedItem !== null && $scope.selectedItem !== undefined && typeof($scope.selectedItem) !== undefined) {
						/*var emitObj = {
							msg: $scope.selectedItem
						};*/
						$scope.$emit('midModalEmit', $scope.selectedItem);
				    	// $scope.selectedItem = "";
				    	$scope.modalMiddleInstance.close();
					} else {
						console.log('58 $scope.selectedItem is: '+$scope.selectedItem+" -- "+typeof($scope.selectedItem));
						return;
					}
				};

				$scope.cancel = function () {
				    $scope.selectedItem = "";
				    $scope.modalMiddleInstance.dismiss('cancel');
				};

			}
		};
	}]);

})();