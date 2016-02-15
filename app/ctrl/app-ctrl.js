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

	ctrlM.controller('modalCtrl', ['$scope', function($scope){
		console.log('modalCtrl');
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
		    $uibModalInstance.close($scope.selectedItem);
		};

		$scope.cancel = function () {
		    $uibModalInstance.dismiss('cancel');
		};
	}]);

	ctrlM.controller('goomapCtrl', ['$scope', function($scope){
		console.log('goomapCtrl');
	}]);

})();





















