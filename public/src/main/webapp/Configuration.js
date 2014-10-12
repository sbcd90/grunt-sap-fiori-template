jQuery.sap.declare("<%= project.artifactId %>.Configuration");
jQuery.sap.require("sap.ca.scfld.md.ConfigurationBase");
jQuery.sap.require("sap.ca.scfld.md.app.Application");

sap.ca.scfld.md.ConfigurationBase.extend("<%= project.artifactId %>.Configuration", {

	oServiceParams: {
        serviceList: [
            {
                name: "Sample OData",
                masterCollection: "collectionName",
                serviceUrl: "/path/to/odata",
                isDefault: true,
                overrideGetPropertyMetadata : true,
                mockedDataSource: "/<%= project.artifactId %>/model/metadata.xml",
                useBatch : true
            }

        ]
    },
 
    getServiceParams: function () {
        return this.oServiceParams;
    },

    /**
     * @inherit
     */
    getServiceList: function () {
        return this.oServiceParams.serviceList;
    },


    getMasterKeyAttributes : function() {
        return [];
    },
    
    
    getExcludedQueryStringParameters : function() {
        return [];
    }

});
