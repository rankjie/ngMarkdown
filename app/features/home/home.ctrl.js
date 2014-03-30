angular.module('demo.features.home')

.controller('HomeCtrl', ['$scope', '$http', 'wizMarkdownSvc', function ($scope, $http, wizMarkdownSvc) {

	$scope.mdtext = 'Loading text...';

	$http.get('http://grumpywizards.com/ngMarkdown/app/features/home/home.md').then(function (response) {
		$scope.mdtext = response.data;
	});
}]);