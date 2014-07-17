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
            'src/*.js',
            'src/wrapper/foot.txt'
          ],
          dest: output
        }]
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "node_modules/jasmine-matcher-wrapper/dist/",
            src: "jasmine-matcher-wrapper.js",
            dest: "dist/"
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('build', ['concat', 'copy']);

};
