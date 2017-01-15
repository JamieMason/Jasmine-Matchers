// node modules
var exec = require('child_process').exec;

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

gulp.task('test', function (done) {
  exec('npm run test:local', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('watch', [], function () {
  return gulp.watch([
    '*.js',
    'src/**/*.js',
    'test/**/*.js'
  ], [
    'build',
    'test'
  ]);
});
