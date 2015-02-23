module.exports = function(config) {

  'use strict';

  config.set({

    colors: true,

    autoWatch: true,

    browsers: [
      'PhantomJS'
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
      'test/**/_utils.spec.js',
      'test/**/*.spec.js'
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
