angular.module('wiz.markdown')

.directive('wizMarkdown', ['$filter', 'wizMarkdownSvc', function ($filter, wizMarkdownSvc) {
	return {
		restrict: 'E',
		scope: {
			'content': '='
		},
		replace: true,
		template: '<div class="markdown-output"></div>',
		link: function (scope, elem, attrs) {
			scope.$watch('content', function () {
				elem.html(wizMarkdownSvc.Transform(scope.content));
			});
		}
	};
}]);