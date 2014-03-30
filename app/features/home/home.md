> **Psst**. This page is written in markdown and the contents is loaded into the editor. Scroll to the bottom and change this page's content using the editor.

---

#Install it

1. Grab the `wizMarkdown.min.js` file and drop it into your application
2. ngMarkdown requires `ngSanitize` so go ahead and add a script reference to `angular-sanitize.js`
3. Add `'wiz.markdown'` as a required module

Example:

    angular.module('myApp', [
      'wiz.markdown'
    ]);

#Use it

There are 4 options available to you with this plugin. In each example `mdText` is a `scope` variable that contains a markdown string.

##Display output using a directive

    <wiz-markdown content="mdText"></wiz-markdown>
    
##..or a filter

    <div ng-bind-html="mdText | wizMarkdownFltr"></div>
    
##..or a service

    <div ng-bind-html="mdText"></div>
    
    $scope.mdText = wizMarkdownSvc.Transform('#H1 heading');

#Editor

    <wiz-markdown-editor content="mdText"></wiz-markdown-editor>
    
The editor is essentially a textbox but it now has the ability to automatically format the markdown text via toolbar buttons.

##Toolbar

    <wiz-markdown-editor content="mdText">
        <wiz-toolbar-button command="bold">Bold</wiz-toolbar-button>
        <wiz-toolbar-button command="italic">Italic</wiz-toolbar-button>
    </wiz-markdown-editor>

The editor has a toolbar that you place buttons on by adding them inside the editor.

You can specify your own styling and content for each button.

The toolbar is positioned above the editor by default but if you specify `toolbar="bottom"` to the editor e.g. `<wiz-markdown-editor content="mdText" toolbar="bottom">` it will appear below.

###Available button commands

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

#Syntax highlighting

[highlight.js](http://highlightjs.org/) is built in so all you need to do is pick a theme and drop the css link in the head of your webpage e.g.

    <link href="http://yandex.st/highlightjs/8.0/styles/github.min.css" rel="stylesheet" type="text/css">

Highlight.js website has a good [theme test page](http://highlightjs.org/static/test.html) that you should find useful.

#Play

Now have a play with an example implementation of the editor below :-)