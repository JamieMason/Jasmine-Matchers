// 3rd party modules
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

// public
gulp.task('browserify', function () {
  browserify('./src/index.js')
    .bundle()
    .pipe(source('jasmine-matchers.js'))
    .pipe(gulp.dest('dist'));
  browserify('./test/index.js')
    .bundle()
    .pipe(source('jasmine-matchers.spec.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', [
  'browserify'
]);

gulp.task('development-watchers', ['build'], function () {
  return gulp.watch([
    '*.js',
    'src/**/*.js',
    'test/**/*.js'
  ], [
    'build'
  ]);
});
