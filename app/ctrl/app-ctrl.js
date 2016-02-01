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
		$scope.horizontalTabContent = [
			{heading: "tab1", description: "desc_1", imgUrl: "./images/magic-symbol.png", disabled: false},
			{heading: "tab2", description: "desc_2", imgUrl: "./images/matic-symbol.png", disabled: false},
			{heading: "tab3", description: "desc_3", imgUrl: "./images/panda1.png", disabled: false}
		];
	}]);

	ctrlM.controller('modalCtrl', ['$scope', function($scope){
		console.log('modalCtrl');
	}]);

	ctrlM.controller('goomapCtrl', ['$scope', function($scope){
		console.log('goomapCtrl');
	}]);

})();