module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: ['Chrome'],
    colors: true,
    concurrency: Infinity,
    exclude: [],
    files: ['src/**/*.js', 'src/**/*.spec.js'],
    frameworks: ['jasmine', 'jasmine-matchers'],
    logLevel: config.LOG_INFO,
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
    ],
    port: 9876,
    preprocessors: {},
    reporters: ['progress'],
    singleRun: true,
  });
};
