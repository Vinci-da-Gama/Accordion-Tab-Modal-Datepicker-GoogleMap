(function () {
	var cdM = angular.module('tma.cust.dir');

	cdM.directive('accordionRightDirective', [function(){
		return {
			scope: {
				accordionRightContent: '='
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				console.log('$scope.accordionRightContent is: ', $scope.accordionRightContent);
				$scope.$watch('accordionRightContent', function (nv, ov) {
					if (nv !== ov) {
						$scope.currentRightContent = $scope.accordionRightContent;
						console.log('14-- accordionRightDirective -- $scope.currentRightContent is: ', $scope.currentRightContent);
					} else{
						console.log('the accordionRightContent is not passed.');
					}
				});
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './_partials/templates/accordion-right-directive.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

})();