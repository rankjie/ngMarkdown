angular.module('demo.features.home')

.controller('HomeCtrl', ['$scope', 'demoMarkdownSvc', function ($scope, demoMarkdownSvc) {

	// This will be transformed by a directive in the markup
	$scope.mdDirective = '#Directive';

	// This will be transformed by a filter in the markup,
	// but it could be done in the controller
	$scope.mdFilter = '#Filter';

	// This is transformed now and then binded to the template
	$scope.mdService = demoMarkdownSvc.Transform('#Service');
}]);