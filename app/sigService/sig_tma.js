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