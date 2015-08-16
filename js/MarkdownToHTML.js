'use strict';

var markdown = require('markdown').markdown;
var fs = require('fs');

var MD_FILES_DIR = './articles/md/',
    HTML_FILES_DIR = './articles/html/';

//var filename = 'readme';

fs.readdir(MD_FILES_DIR, function(err, files) {
    files.forEach(function(filename) {
        if (filename[0] == '.') {
            return;
        }
        fs.readFile(MD_FILES_DIR + filename, 'utf8', function(err, data) {
            if (err)
                throw err;
            var md_content = data.toString();
            var html_content = markdown.toHTML(md_content);

            fs.writeFile(HTML_FILES_DIR + filename.replace(/\.md/i, '.html'), buildHTML(html_content), function(err) {
                if (err) {
                    throw err;
                }
            });
        });
    });
});



function buildHTML(html_content) {
    var header = '',
        body = '';

    header += '<meta charset="utf-8" />';
    body += html_content;

    return '<html>' +
        '<head>' + header + '</head>' +
        '<body>' + html_content + '</body>' +
        '</html>';
}