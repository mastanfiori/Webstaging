sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onInit: function(oEvent) {
            debugger;
            this.extensionAPI.attachPageDataLoaded(this._pageDataLoaded.bind(this));
            // this.byId("com.ns.nttdata.zwebstaging::sap.suite.ui.generic.template.ObjectPage.view.Details::ZSD_V_WEB_STAGING--delete").setVisible(false);
            // MessageToast.show("Custom handler invoked.");
        },
         _pageDataLoaded: function (oEvt) {
            this.byId("com.ns.nttdata.zwebstaging::sap.suite.ui.generic.template.ObjectPage.view.Details::ZSD_V_WEB_STAGING--delete").setVisible(false);
            
        }

    };
});