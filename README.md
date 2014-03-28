#ngMarkdown

##Install

1. Grab the `wizMarkdown.min.js` file and drop it into your application
2. ngMarkdown required `ngSanitize` so go ahead and add a script reference to `angular-sanitize.js`
3. Add `'wiz.markdown'` as a required module

Example:

    angular.module('myApp', [
      'wiz.markdown'
    ]);

##Use

There are 4 options available to you with this plugin. In each example `mdText` is a `scope` variable that contains a markdown string.

###Directive

    <wiz-markdown content="mdText"></wiz-markdown>
    
###Filter

    <div ng-bind-html="mdText | wizMarkdownFltr"></div>
    
###Service

    <div ng-bind-html="mdText"></div>
    
    $scope.mdText = wizMarkdownSvc.Transform('#H1 heading');

###Editor

    <wiz-markdown-editor content="mdText"></wiz-markdown-editor>
    
The editor is essentially a textbox but it now has the ability to automatically format the markdown text via toolbar buttons.

###Toolbar

    <wiz-markdown-editor content="mdText">
        <wiz-toolbar-button command="bold">Bold</wiz-toolbar-button>
        <wiz-toolbar-button command="italic">Italic</wiz-toolbar-button>
    </wiz-markdown-editor>

The editor has a toolbar that you place buttons on by adding them inside the editor.

You can specify your own styling and content for each button.

The toolbar is positioned above the editor by default but if you specify `toolbar="bottom"` to the editor e.g. `<wiz-markdown-editor content="mdText" toolbar="bottom">` it will appear below.

####Available button commands

undo,
redo,
bold,
italic,
heading,
code,
ullist,
ollist,
indent,
outdent,
link,
img,
hr,
h0,
h1,
h2,
h3,
h4,
h5,
h6,
tab,
untab
