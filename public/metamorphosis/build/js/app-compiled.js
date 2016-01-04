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
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './_partials/views/accordion-view.html',
			controller: 'homeCtrl'
		});

	}]);

})();
(function () {
	var cosM = angular.module('tma.constant');

})();
(function () {
	var ctrlM = angular.module('tma.ctrl');

	ctrlM.controller('homeCtrl', ['$scope', function($scope){
		console.log('homeCtrl');
	}]);

})();
(function () {
	var dM = angular.module('tma.dir');

	// dM

})();
(function () {
	var cdM = angular.module('tma.cust.dir');

	// cdM

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
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('tma.sig.service');

	// ssM

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