module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: '..',
    browsers: [],
    colors: true,
    coverageReporter: {
      dir: 'coverage',
      instrumenterOptions: {
        istanbul: {
          noCompact: true,
        },
      },
      reporters: [
        {
          type: 'html',
          subdir: 'report-html',
        },
        {
          type: 'lcov',
          subdir: 'report-lcov',
        },
        {
          type: 'cobertura',
          subdir: '.',
          file: 'cobertura.txt',
        },
        {
          type: 'lcovonly',
          subdir: '.',
          file: 'report-lcovonly.txt',
        },
        {
          type: 'teamcity',
          subdir: '.',
          file: 'teamcity.txt',
        },
        {
          type: 'text',
          subdir: '.',
          file: 'text.txt',
        },
        {
          type: 'text-summary',
          subdir: '.',
          file: 'text-summary.txt',
        },
      ],
    },
    files: ['dist/jasmine-matchers.js', 'dist/jasmine-matchers.spec.js'],
    frameworks: ['jasmine'],
    logLevel: 'error',
    preprocessors: {
      '**/dist/jasmine-matchers.js': ['coverage'],
    },
    reporters: ['nested', 'coverage'],
    singleRun: true,
  });
};
