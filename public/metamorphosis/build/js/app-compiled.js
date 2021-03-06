(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['tma.router', 'tma.ctrl'];
	var cons = ['tma.constant'];
	var serv = ['tma.sig.service', 'tma.service'];
	var dir = ['tma.dir', 'tma.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* tma Module
	*
	* The main module of this application...
	*/
	angular.module('tma', depedencyArr);

	angular.module('tma.router', ['ui.router']);
	angular.module('tma.constant', []);
	angular.module('tma.sig.service', []);
	angular.module('tma.service', []);
	angular.module('tma.ctrl', []);
	angular.module('tma.dir', ['tma.service', 'tma.sig.service']);
	angular.module('tma.cust.dir', ['tma.service', 'tma.sig.service']);

})();
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
(function () {
	var cosM = angular.module('tma.constant');

})();
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

	ctrlM.controller('accordionCtrl', ['$scope', 'gainAccordionHeadersAndNgIncludes', function($scope, gainAccordionHeadersAndNgIncludes){
		console.log('accordionCtrl');
		$scope.oneAtATime = true;
		// https://api.myjson.com/bins/3zvab
		$scope.headingsAndNgIncludeTmpls = [
			{"header": "submergence_0", "tmplUrl": "./_partials/templates/accordion-ngInclude/include-tmpl0.html"},
			{"header": "submergence_1", "tmplUrl": "./_partials/templates/accordion-ngInclude/include-tmpl1.html"},
			{"header": "submergence_2", "tmplUrl": "./_partials/templates/accordion-ngInclude/include-tmpl2.html"}
		];

		gainAccordionHeadersAndNgIncludes.claspAccordionHeadersAndImages(graspAccordionDossier);

		function graspAccordionDossier (dossier) {
			$scope.rightDirectiveAccordionContent = dossier.data;
			console.log('accordionCtrl >> $scope.rightDirectiveAccordionContent: ', $scope.rightDirectiveAccordionContent);
		}

	}]);

	ctrlM.controller('tabCtrl', ['$scope', function($scope){
		console.log('tabCtrl');
		// 2nd tab would be actived at beginning.
		$scope.horizontalTabContent = [
			{heading: "tab1", description: "desc_1", imgUrl: "./images/magic-symbol.png", disabled: false},
			{heading: "tab2", description: "desc_2", imgUrl: "./images/matic-symbol.png", disabled: false, active: true},
			{heading: "tab3", description: "desc_3", imgUrl: "./images/panda1.png", disabled: false}
		];
		$scope.verticalTabContent = [
			{heading: "tab1", description: "desc_1", imgUrl: "./images/magic-symbol.png", tmplUrl: "./_partials/templates/vertical-righttab-ngInclude/righttab-tmpl0.html"},
			{heading: "tab2", description: "desc_2", imgUrl: "./images/matic-symbol.png", tmplUrl: "./_partials/templates/vertical-righttab-ngInclude/righttab-tmpl1.html"},
			{heading: "tab3", description: "desc_3", imgUrl: "./images/panda1.png", tmplUrl: "./_partials/templates/vertical-righttab-ngInclude/righttab-tmpl2.html"}
		];
	}]);

	ctrlM.controller('modalCtrl', ['$scope', '$timeout', function($scope, $timeout){
		console.log('modalCtrl');

		$scope.modalSizeCollection = ['lg', 'md', 'sm'];
		$scope.modalItems = ['itemArr1', 'itemArr2', 'itemArr3'];

		$scope.$on('midModalEmit', function (event, midItem) {
			console.log('71 args: -- ', midItem);
			$scope.midModalItem = midItem;
		});

		// middle-Modal-Callback-function
		$scope.middleModalSay = function () {
			$timeout(function () {
				haha($scope.midModalItem);
			}, 1000);
			console.log('modalCtrl line 72 -- middle-Modal-Callback-function');
		};

		function haha(theMidModalItem) {
			alert("hahaha"+theMidModalItem);
		}

	}]);

	ctrlM.controller('smallModalCtrl', ['$scope', '$uibModal', '$timeout', function($scope, $uibModal, $timeout){
		console.log('smallModalCtrl');
		// there are three sizes for modal 'lg' for large, middle is default and 'sm' for small.
		var modalSizeCollection = ['lg', 'sm'];
		$scope.animationsEnabled = true;
		$scope.items = ['itemArr1', 'itemArr2', 'itemArr3'];

		var uibSmallModalObj = {
			animation: $scope.animationsEnabled,
		    templateUrl: './_partials/templates/modal-tmpl.html',
		    controller: 'uibSmallModalInstanceCtrl',
		    size: modalSizeCollection[1],
		    resolve: {
		        itemsSrc: function () {
		          	return $scope.items;
		        }
		    }
		};

		$scope.openSmallModal = function () {
			console.log('openSmallModal');
			var uibSmallModalInstance = $uibModal.open(uibSmallModalObj);
			uibSmallModalInstance.result.then(function (selectedItemFromUibSmallModalInstanceCtrl) {
				$scope.selected = selectedItemFromUibSmallModalInstanceCtrl;
				console.log('when go here? ');
				// call the callbackfunction as function inside success function.
				// this looks like callback, but actually not.
				$timeout(function () {
					ctrlCallbackFunction($scope.selected);
				}, 1000);
			}, function () {
				console.log('Doesn\'t receive any selected item.');
			});
		};

		function ctrlCallbackFunction(passedValue) {
			alert("say Hello. the item you choosed is: -- "+passedValue);
		}

	}]);

	ctrlM.controller('uibSmallModalInstanceCtrl', ['$uibModalInstance', '$scope', 'itemsSrc', function($uibModalInstance, $scope, itemsSrc){
		console.log('uibSmallModalInstanceCtrl');
		$scope.items = itemsSrc;

		$scope.pickUpTheOneYouLike = function (e, theChosenItem) {
			// console.log('104 uibSmallModalInstanceCtrl pickUpTheOneYouLike function -- current event: ', e);
			e.preventDefault();
			$scope.selectedItem = theChosenItem;
		};

		$scope.saveChange = function () {
			if ($scope.selectedItem !== '' && $scope.selectedItem !== null && $scope.selectedItem !== undefined && typeof($scope.selectedItem) !== undefined) {
				console.log('121 $scope.selectedItem is: '+$scope.selectedItem+" -- "+typeof($scope.selectedItem));
		    	$uibModalInstance.close($scope.selectedItem);
			} else {
				console.log('124 $scope.selectedItem is: '+$scope.selectedItem+" -- "+typeof($scope.selectedItem));
				return;
			}
		};

		$scope.cancel = function () {
		    $uibModalInstance.dismiss('cancel');
		};
	}]);

	ctrlM.controller('goomapCtrl', ['$scope', function($scope){
		console.log('goomapCtrl');
	}]);

})();






















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
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('tma.service');

	// sM

})();
// service js Document
(function () {
	var ssM = angular.module('tma.sig.service');

	ssM.service('gainAccordionHeadersAndNgIncludes', ['$http', function($http){
		var lane = 'https://api.myjson.com/bins/4s297';

		this.claspAccordionHeadersAndImages = function (func) {
			$http.get(lane)
			.then(function (testimony) {
				func(testimony);
				// console.log('the testimony is: -- ', testimony);
			})
			.catch(function (data, config, status) {
				console.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
			})
			.finally(function () {
				console.log('line 36 accordion headers and images: final function');
			});
		};

	}]);

})();
// jQuery Js Document
$(document).ready(function() {
	// notice ();
	initWow ();
});

/*function notice () {
	alert('pls, disable this function.');
}*/

function initWow () {
	new WOW().init();
}