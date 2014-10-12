/*
 * grunt-sap-fiori-template
 * https://github.com/sbcd90/grunttest
 *
 * Copyright (c) 2014 sbcd90
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg : grunt.file.readJSON('parameters.json'),  
    // Configuration to be run (and then tested).
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*_test.js'
      ]
    },  
    clean: {
      tests: ['test/expected']
    },  
    sap_fiori_template: {
        parameters : [ '<%= pkg.destinationPath %>',
                    '<%= pkg.project_groupId %>',
                    '<%= pkg.project_artifactId %>',
                    '<%= pkg.project_version %>',
                    '<%= pkg.project_description %>',
                    '<%= pkg.project_parent_groupId %>',
                    '<%= pkg.project_parent_artifactId %>',
                    '<%= pkg.project_parent_version%>'
                  ]
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');    
    
  grunt.registerTask('unit_tests',['clean','jshint','sap_fiori_template','nodeunit'])    

  // By default, lint and run all tests.
  grunt.registerTask('default', ['sap_fiori_template']);

};
