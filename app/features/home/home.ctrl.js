angular.module('demo.features.home')

.controller('HomeCtrl', ['$scope', 'wizMarkdownSvc', function ($scope, wizMarkdownSvc) {

	$scope.mdText = 'Loading text...';

	$http.get('http://grumpywizards.com/ngMarkdown/app/features/home/home.md').then(function (data) {
		$scope.mdText = data;
	});
}]);