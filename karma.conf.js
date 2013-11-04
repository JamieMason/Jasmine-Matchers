/*global process:true */

module.exports = function(config) {

  'use strict';

  config.set({

    frameworks: ['jasmine'],

    files: [
      'dist/jasmine-matchers.js',
      'test/*.test.js'
    ],

    preprocessors: {
      '**/dist/*.js': ['coverage']
    },

    autoWatch: true,

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'build/coverage/'
    }

  });
};
