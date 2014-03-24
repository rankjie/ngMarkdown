#ngMarkdown

##Install

1. Grab the `wizMarkdown.js` or `wizMarkdown.min.js` file and drop it into your application
2. Add `'wiz.markdown'` as a required module

Example:

    angular.module('myApp', [
      'ngSanitize', // Required for markdown filter and service options
      'wiz.markdown'
    ]);

##Use

There are 3 options available to you with this plugin. In each example `mdText` is a `scope` variable that contains a markdown string.

###Directive

    <wiz-markdown content="mdText"></wiz-markdown>
    
###Filter

    <div ng-bind-html="mdText | wizMarkdownFltr"></div>
    
###Service

    <div ng-bind-html="mdText"></div>
    
    $scope.mdText = wizMarkdownSvc.Transform('#H1 heading');

**Note:** to use the filter or service options you must include `ngSanitize` in your module.
