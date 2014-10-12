jQuery.sap.declare("<%= project.artifactId %>.view.S3");
jQuery.sap.require("sap.ca.scfld.md.controller.BaseMasterController");
jQuery.sap.require("sap.ca.scfld.md.controller.ScfldMasterController");

sap.ca.scfld.md.controller.ScfldMasterController.extend("<%= project.artifactId %>.view.S2", {

    /*called on initial load*/ 
    onInit : function() {
    
    },
    
    /*called after data is loaded*/
    onDataLoaded : function(){
        
    },
    
    /*for setting header footer options*/
    getHeaderFooterOptions : function(){
        
    },

});