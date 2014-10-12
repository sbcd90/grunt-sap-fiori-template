grunt-sap-fiori-template
========================

- SAP Fiori Open UI5/Maven Template for creating SAP Fiori applications easily.

Usage
=====

- This is a grunt plugin & can be used as any other grunt plugins.
- Install this module from npm.
- Check the file 'parameters.json' for the list of configurable parameters which users can provide.
- The below code snippet shows the initial configuration to execute the task which creates the SAP Fiori project structure.

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
                                            
- Please check the [Gruntfile](https://raw.githubusercontent.com/sbcd90/grunt-sap-fiori-template/master/Gruntfile.js) for further details                                            
