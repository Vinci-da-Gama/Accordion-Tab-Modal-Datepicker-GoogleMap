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