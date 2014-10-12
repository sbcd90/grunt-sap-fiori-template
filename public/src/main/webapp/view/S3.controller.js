jQuery.sap.declare("<%= project.artifactId %>.view.S3");
jQuery.sap.require("sap.ca.scfld.md.controller.BaseDetailController");

sap.ca.scfld.md.controller.BaseDetailController.extend("<%= project.artifactId %>.view.S3", {

	onInit: function() {
		sap.ca.scfld.md.controller.BaseDetailController.prototype.onInit.call(this);

		var view = this.getView();
		this.oRouter.attachRouteMatched(function(oEvent) {
			if (oEvent.getParameter("name") === "detail") {
				var context = new sap.ui.model.Context(view.getModel(), '/' + oEvent.getParameter("arguments").contextPath);
				
                
            }
        });
    
    },
    
    getHeaderFooterOptions : function(){
        
    }

});
