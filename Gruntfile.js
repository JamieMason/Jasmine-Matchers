module.exports = function(grunt) {

  'use strict';

  var version = require('./package.json').version;

  grunt.initConfig({

    concat: {
      dist: {
        files: [{
          src: [
            'src/wrapper/head.txt',
            'src/private.js',
            'src/arrays.js',
            'src/booleans.js',
            'src/browser.js',
            'src/dates.js',
            'src/errors.js',
            'src/numbers.js',
            'src/objects.js',
            'src/strings.js',
            'src/wrapper/add-matchers-adapter.js',
            'src/wrapper/foot.txt'
          ],
          dest: 'dist/jasmine-matchers.js'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['src/**/*.js', 'test/**/*.js'],
        tasks: ['build'],
        options: {
          nospawn: true
        }
      }
    },

    jsdoc: {
      dist: {
        src: ['src/**/*.js'],
        options: {
          destination: 'build/docs'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('build', ['concat', 'jsdoc']);

};
