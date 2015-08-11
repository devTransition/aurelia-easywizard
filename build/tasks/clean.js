'use strict';

var gulp = require('gulp');
var del = require('del');
var paths = require('../paths')

// Empty the build dir.
gulp.task('clean', function (done) {
  del([paths.output + '/*'], done);
});
