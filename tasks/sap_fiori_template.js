/*
 * grunt-test
 * https://github.com/sbcd90/grunttest
 *
 * Copyright (c) 2014 sbcd90
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('sap_fiori_template', 'SAP Fiori Open UI5/Maven Template for creating SAP Fiori applications easily.', function() {
      
      var projectPath = this.data[0];
      var project_groupId = this.data[1];
      var project_artifactId = this.data[2];
      var project_version = this.data[3];
      var project_description = this.data[4];
      var project_parent_groupId = this.data[5];
      var project_parent_artifactId = this.data[6];
      var project_parent_version = this.data[7];
      
      if(grunt.file.exists(projectPath) && grunt.file.isDir(projectPath)){
            grunt.log.writeln('The destination directory already exists');
              
            var files = grunt.file.expand({
                                nonull : true
            },[projectPath + '/*']);
            
              
            if(files.length>1){
                grunt.log.writeln(files);
                grunt.fail.warn('The destination directory is not empty');
            }
            else
                grunt.log.writeln('Creating project structure in the destination directory');
        }
        else{
            grunt.log.writeln('The destination directory does not exist & will be created');
            grunt.file.mkdir(projectPath);
            grunt.log.writeln('Creating project structure in the destination directory');
        }
      
      grunt.file.recurse('public',function(abspath, rootdir, subdir, filename){
          
          var destPath = undefined;
          if(subdir!=undefined)
              destPath = projectPath + '/' + subdir + '/' + filename;
          else
              destPath = projectPath + '/' + filename;
          
          grunt.file.copy(abspath,destPath,{
              
              encoding : grunt.file.defaultEncoding,
              
              process : function(contents, srcpath, destpath){
                            
                            var fileContents = contents;
                  
                            if(fileContents.indexOf('<%= project.groupId %>')!=-1)
                                fileContents = fileContents.replace(new RegExp('<%= project.groupId %>', 'g'),project_groupId);
                            if(fileContents.indexOf('<%= project.artifactId %>')!=-1)
                                fileContents = fileContents.replace(new RegExp('<%= project.artifactId %>', 'g'),project_artifactId);
                            if(fileContents.indexOf('<%= project.version %>')!=-1)
                                fileContents = fileContents.replace(new RegExp('<%= project.version %>', 'g'),project_version);
                            if(fileContents.indexOf('<%= project.description %>')!=-1)
                                fileContents = fileContents.replace(new RegExp('<%= project.description %>', 'g'),project_description);
                            if(fileContents.indexOf('<%= project.parent.groupId %>')!=-1)
                                fileContents = fileContents.replace(new RegExp('<%= project.parent.groupId %>', 'g'),project_parent_groupId);
                            if(fileContents.indexOf('<%= project.parent.artifactId %>')!=-1)
                                fileContents = fileContents.replace(new RegExp('<%= project.parent.artifactId %>', 'g'),project_parent_artifactId);
                            if(fileContents.indexOf('<%= project.parent.version %>')!=-1)
                                fileContents = fileContents.replace(new RegExp('<%= project.parent.version %>', 'g'),project_parent_version);
                  
                            
                            return fileContents;
              }
          });
      });
  });

};
