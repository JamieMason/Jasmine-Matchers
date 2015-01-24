module.exports = function(config) {

  'use strict';

  config.set({

    colors: true,

    autoWatch: true,

    browsers: [
      'Firefox',
      'Opera',
      'PhantomJS',
      'Safari'
    ],

    frameworks: [
      'jasmine'
    ],

    reporters: [
      'nested',
      'coverage'
    ],

    files: [
      'dist/jasmine-matchers.js',
      'test/**/_utils.test.js',
      'test/**/*.test.js'
    ],

    preprocessors: {
      '**/dist/*.js': [
        'coverage'
      ]
    },

    coverageReporter: {
      type: 'html',
      dir: 'build/coverage/'
    }

  });

};
