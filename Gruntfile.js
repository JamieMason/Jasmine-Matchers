module.exports = function(grunt) {

  'use strict';

  // var version = require('./package.json').version;

  grunt.initConfig({

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
          dest: 'dist/jasmine-matchers.js'
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
        src: [
          'dist/jasmine-matchers.js'
        ]
      }
    },

    watch: {
      scripts: {
        files: [
          'src/**/*.js',
          'test/**/*.js'
        ],
        tasks: [
          'build'
        ],
        options: {
          nospawn: true
        }
      }
    },

    jsdoc: {
      dist: {
        src: [
          'src/**/*.js'
        ],
        options: {
          destination: 'build/docs'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('build', [
    'concat',
    'jsdoc'
  ]);

};
