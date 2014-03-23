angular.module('demo.components.markdown')

.factory('demoMarkdownSvc', [function () {
	var markdownSvc = new MarkdownDeep.Markdown();
	markdownSvc.ExtraMode = true;
	markdownSvc.SafeMode = false;
	markdownSvc.NewWindowForExternalLinks = true;
	markdownSvc.AutoHeadingIDs = true;

	return markdownSvc;
}]);