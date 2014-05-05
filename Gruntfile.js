module.exports = function(grunt) {

  'use strict';

  var version = require('./package.json').version;
  var output = 'dist/jasmine-matchers.js';

  grunt.initConfig({

    watch: {
      scripts: {
        files: ['src/**/*.js', 'test/**/*.js'],
        tasks: ['build'],
        options: {
          nospawn: true
        }
      }
    },

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
            'src/members.js',
            'src/wrapper/add-matchers-adapter.js',
            'src/wrapper/foot.txt'
          ],
          dest: output
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('build', ['concat']);

};
