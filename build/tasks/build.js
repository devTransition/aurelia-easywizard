'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var babel = require('gulp-babel');
var paths = require('../paths')
var sourcemaps = require('gulp-sourcemaps');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');

var outputSystem = paths.output + "system"

gulp.task('system', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
    .pipe(gulp.dest(outputSystem));
});

gulp.task('template-system', function () {
   return gulp.src(paths.template)
    .pipe(gulp.dest(outputSystem));
});

gulp.task('build-system', function (callback) {
  return runSequence(
    'system',
    'template-system',
    callback
  );  
})

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'build-system',
    callback
  );
});
