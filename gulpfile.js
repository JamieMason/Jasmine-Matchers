// node modules
const exec = require('child_process').exec;

// 3rd party modules
const babelify = require('babelify');
const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');

// public
gulp.task('browserify', () => {
  const toEs5 = (src, dest) => {
    browserify(src)
      .transform(babelify)
      .bundle()
      .on('error', err => console.error(err.message, err.stack))
      .pipe(source(dest))
      .pipe(gulp.dest('dist'));
  };

  toEs5('./src/index.js', 'jasmine-matchers.js');
  toEs5('./test/index.js', 'jasmine-matchers.spec.js');
});

gulp.task('build', [
  'browserify'
]);

gulp.task('test', done => {
  exec('npm run test:local', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('watch', [], () => {
  return gulp.watch([
    '*.js',
    'src/**/*.js',
    'test/**/*.js'
  ], [
    'build',
    'test'
  ]);
});
