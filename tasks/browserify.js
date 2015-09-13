'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./src/index.js')
        .bundle()
        .pipe(source('jasmine-matchers.js'))
        .pipe(gulp.dest('dist'));
    browserify('./test/index.js')
        .bundle()
        .pipe(source('jasmine-matchers.spec.js'))
        .pipe(gulp.dest('dist'));
});
