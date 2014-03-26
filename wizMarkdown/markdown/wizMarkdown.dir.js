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
}])

.directive('wizMarkdownEditor', ['$filter', 'wizMarkdownSvc', function ($filter, wizMarkdownSvc) {
    return {
        restrict: 'E',
        scope: {
            'content': '='
        },
        replace: true,
        template: '<div class="markdown-editor">'+
                    '<textarea class="markdown-input" ng-model="content"></textarea>'+
                  '</div>',
        link: function (scope, elem, attrs) {
            var editor = new MarkdownDeepEditor.Editor(elem.find('textarea')[0], null);
            editor.onPostUpdateDom = function(editor) {
                scope.$apply(function(){
                    scope.content = elem.find('textarea').val();
                });
            };
        }
    };
}]);