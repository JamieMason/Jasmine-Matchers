'use strict';

module.exports = function(config) {

    config.set({

        autoWatch: true,

        browsers: [
            'PhantomJS'
        ],

        colors: true,

        coverageReporter: {
            dir: 'coverage',
            instrumenterOptions: {
                istanbul: {
                    noCompact: true
                }
            },
            reporters: [{
                type: 'html',
                subdir: 'report-html'
            }, {
                type: 'lcov',
                subdir: 'report-lcov'
            }, {
                type: 'cobertura',
                subdir: '.',
                file: 'cobertura.txt'
            }, {
                type: 'lcovonly',
                subdir: '.',
                file: 'report-lcovonly.txt'
            }, {
                type: 'teamcity',
                subdir: '.',
                file: 'teamcity.txt'
            }, {
                type: 'text',
                subdir: '.',
                file: 'text.txt'
            }, {
                type: 'text-summary',
                subdir: '.',
                file: 'text-summary.txt'
            }]
        },

        files: [
            'dist/jasmine-matchers.js',
            'dist/jasmine-matchers.spec.js'
        ],

        frameworks: [
            'jasmine'
        ],

        preprocessors: {
            '**/dist/*.js': [
                'coverage'
            ]
        },

        reporters: [
            'nested',
            'coverage'
        ],

        thresholdReporter: {
            statements: 95,
            branches: 95,
            functions: 95,
            lines: 95
        }

    });

};
