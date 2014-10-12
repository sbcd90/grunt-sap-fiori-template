// define a root UIComponent which exposes the main view
jQuery.sap.declare("<%= project.artifactId %>.Component");
jQuery.sap.require("sap.ca.scfld.md.ComponentBase");
jQuery.sap.require("<%= project.artifactId %>.Configuration");

// new Component
sap.ca.scfld.md.ComponentBase.extend("<%= project.artifactId %>.Component", {
	metadata : sap.ca.scfld.md.ComponentBase.createMetaData("MD",{
		"name": "Master Detail Sample",
		"version" : "1.0.0",
		"library" : "<%= project.artifactId %>",
		"includes" : [],  
		"dependencies" : { 
			"libs" : [ 
				"sap.m",
				"sap.me"
			],  
			"components" : [ 
			]
		},
		"config" : {
			"resourceBundle" : "i18n/i18n.properties",
			"titleResource" : "Enter title of application here",
			"icon" : "Enter icon of application here",
			"favIcon" : "./resources/sap/ca/ui/themes/base/img/favicon/F0297_Due_Project_Milestones.ico",
			"homeScreenIconPhone" : "./resources/sap/ca/ui/themes/base/img/launchicon/<AppName>/57_iPhone_Desktop_Launch.png",
			"homeScreenIconPhone@2" : "./resources/sap/ca/ui/themes/base/img/launchicon/<AppName>/114_iPhone-Retina_Web_Clip.png",
			"homeScreenIconTablet" : "./resources/sap/ca/ui/themes/base/img/launchicon/<AppName>/72_iPad_Desktop_Launch.png",
			"homeScreenIconTablet@2" : "./resources/sap/ca/ui/themes/base/img/launchicon/<AppName>/144_iPad_Retina_Web_Clip.png",
			"startupImage320x460" : "./resources/sap/ca/ui/themes/base/img/splashscreen/320_x_460.png",
			"startupImage640x920" : "./resources/sap/ca/ui/themes/base/img/splashscreen/640_x_920.png",
			"startupImage640x1096" : "./resources/sap/ca/ui/themes/base/img/splashscreen/640_x_1096.png",
			"startupImage768x1004" : "./resources/sap/ca/ui/themes/base/img/splashscreen/768_x_1004.png",
			"startupImage748x1024" : "./resources/sap/ca/ui/themes/base/img/splashscreen/748_x_1024.png",
			"startupImage1536x2008" : "./resources/sap/ca/ui/themes/base/img/splashscreen/1536_x_2008.png",
			"startupImage1496x2048" : "./resources/sap/ca/ui/themes/base/img/splashscreen/1496_x_2048.png"
		},
		viewPath : "<%= project.artifactId %>.view",
		masterPageRoutes:{},
		detailPageRoutes:{},
		fullScreenPageRoutes:{}
	}),                                                                                                                  
	
	/**
	 * Initialize the application
	 * 
	 * @returns {sap.ui.core.Control} the content
	 */
	createContent : function() {
        var oViewData = {component: this};

		return sap.ui.view({
			viewName : "<%= project.artifactId %>.Main",
			type : sap.ui.core.mvc.ViewType.XML,
			viewData : oViewData
		});
	}                                                                             
	
});
