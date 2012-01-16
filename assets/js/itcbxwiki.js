var head = document.getElementsByTagName("head")[0];

// Load the mathjax script
var mathjax = document.createElement("script");
mathjax.type = "text/javascript";
mathjax.src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
head.appendChild(mathjax);

var itcbxwiki = {
    getCSS: function(url) {
        var css = '<link rel="stylesheet" href="' + url + '" />';
        $('head').append(css);
    }
};
$(document).ready(function() {
var syntaxHighlight = function() {
        itcbxwiki.getCSS('http://alexgorbatchev.com/pub/sh/current/styles/shThemeMidnight.css');
        $.getScript('http://alexgorbatchev.com/pub/sh/current/scripts/shCore.js', function() {
            $.getScript('http://alexgorbatchev.com/pub/sh/current/scripts/shAutoloader.js', function(){
                SyntaxHighlighter.config.strings.expandSource = '+ 展开源码';
                SyntaxHighlighter.config.strings.viewSource = '新窗口查看源码';
                SyntaxHighlighter.config.strings.copyToClipboard = '复制到剪贴板';
                SyntaxHighlighter.config.strings.copyToClipboardConfirmation = '已经复制源码到剪切板';
                SyntaxHighlighter.config.strings.print = '打印';
                SyntaxHighlighter.config.strings.help = '';
                SyntaxHighlighter.config.strings.alert = '语法高亮器&lt;br /&gt;';
                SyntaxHighlighter.config.strings.noBrush = '找不到下列语言的渲染器: ';
                SyntaxHighlighter.autoloader(
                  'js jscript javascript  http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJScript.js',
                  'php http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPhp.js',
                  'css CSS Css http://alexgorbatchev.com/pub/sh/current/scripts/shBrushCss.js',
                  'c cpp http://alexgorbatchev.com/pub/sh/current/scripts/shBrushCpp.js',
                  'Bash bash http://alexgorbatchev.com/pub/sh/current/scripts/shBrushBash.js'
                );
                 
                SyntaxHighlighter.all();
            });
        });
    };
    syntaxHighlight();
});
