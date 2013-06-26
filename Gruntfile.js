module.exports = function(grunt) {

  'use strict';

  var version = require('./package.json').version;
  var output = 'dist/jasmine-matchers-' + version + '.js';

  grunt.initConfig({

    concat: {
      dist: {
        files: [{
          src: [
            'src/wrapper/head.txt',
            'src/private.js',
            'src/*.js',
            'src/wrapper/foot.txt'
          ],
          dest: output
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('build', ['concat']);

};
