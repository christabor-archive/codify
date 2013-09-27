angular.module('CodifyApp.filters', [])
.filter('interpolate', ['version', function(version) {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, version);
	};
}])
.filter('trim_spaces', function(){
	return function(string){
		return string.replace(/\s/g, '-');
	};
});
