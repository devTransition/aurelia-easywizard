var gulp = require('gulp');

require('require-dir')('build/tasks');

// Default task; start local server & watch for changes.
gulp.task('default', ['build']);
