angular.module('demo.components.markdown')

.directive('demoMarkdown', ['$filter', 'demoMarkdownSvc', function ($filter, demoMarkdownSvc) {
	return {
		restrict: 'E',
		scope: {
			'content': '='
		},
		replace: true,
		template: '<div class="markdown-output"></div>',
		link: function (scope, elem, attrs) {
			console.log('demoMarkdownDir');
			scope.$watch('content', function () {
				elem.html(demoMarkdownSvc.Transform(scope.content));
			});
		}
	};
}]);