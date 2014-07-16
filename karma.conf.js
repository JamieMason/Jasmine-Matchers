/*global process:true */

module.exports = function(config) {

  'use strict';

  config.set({

    frameworks: ['jasmine'],

    files: [
      'node_modules/jasmine-matcher-wrapper/dist/jasmine-matcher-wrapper.js',
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
