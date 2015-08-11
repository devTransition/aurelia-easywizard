var path = require('path');

var appRoot = 'lib/';
var outputRoot = 'dist/';

module.exports = {
  source: appRoot + '**/*.js',
  template: appRoot + '**/*.html',
  output: outputRoot,
  sourceMapRelativePath: '../' + appRoot
};
