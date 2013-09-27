angular.module('CodifyApp.controllers', []).
controller('HomeCtrl', function($scope, $http, $routeParams) {
	$http.get('data/categories.json').success(function(data) {
		$scope.items = data;
	});
	return;
})
.controller('AboutCtrl', function($scope) {
	return;
});
