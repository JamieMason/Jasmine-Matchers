'use strict';

var gulp = require('gulp');

gulp.task('development-watchers', ['build'], function() {
    return gulp.watch([
        '*.js',
        'src/**/*.js',
        'test/**/*.js'
    ], [
        'build'
    ]);
});
