angular.module('demo.components.markdown')

.filter('demoMarkdownFltr', ['demoMarkdownSvc', function (demoMarkdownSvc) {
	return function (input) {
		if (input) return demoMarkdownSvc.Transform(input);
	};
}]);