angular.module('CodifyApp', [
	'ngResource',
	'CodifyApp.filters',
	'CodifyApp.services',
	'CodifyApp.directives',
	'CodifyApp.controllers',
	'CodifyApp.components'
	]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/contact', {
		templateUrl: 'templates/contact.html'
	});
	$routeProvider.when('/about', {
		templateUrl: 'templates/about.html'
	});
	$routeProvider.otherwise({
		redirectTo: '/',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	});
}]);
