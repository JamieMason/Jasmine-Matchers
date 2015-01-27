module.exports = function(grunt) {

  'use strict';

  // var version = require('./package.json').version;

  grunt.initConfig({

    config: {
      output: 'dist/jasmine-matchers.js',
      sources: {
        src: 'src/**/*.js',
        test: 'test/**/*.js',
        all: [
          '<%= config.sources.src %>',
          '<%= config.sources.test %>'
        ]
      }
    },

    concat: {
      dist: {
        files: [{
          src: [
            'src/wrapper/head.txt',
            'src/wrapper/private.js',
            'src/*.js',
            'src/members/*.js',
            'src/wrapper/add-matchers-adapter.js',
            'src/wrapper/foot.txt'
          ],
          dest: '<%= config.output %>'
        }]
      }
    },

    jsbeautifier: {
      dist: {
        options: {
          js: {
            indentSize: 2
          }
        },
        src: '<%= config.output %>'
      }
    },

    watch: {
      scripts: {
        files: '<%= config.sources.all %>',
        tasks: [
          'build'
        ],
        options: {
          nospawn: true
        }
      }
    },

    jscs: {
      dist: {
        src: '<%= config.sources.src %>'
      }
    },

    jshint: {
      dist: {
        src: '<%= config.sources.src %>'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: [
          'PhantomJS'
        ]
      }
    }

  });

  [
    'grunt-contrib-concat',
    'grunt-contrib-jshint',
    'grunt-contrib-watch',
    'grunt-jsbeautifier',
    'grunt-jscs',
    'grunt-karma'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('code-quality', [
    'jshint',
    'jscs',
    'karma'
  ]);

  grunt.registerTask('build', [
    'concat',
    'jsbeautifier'
  ]);

};
