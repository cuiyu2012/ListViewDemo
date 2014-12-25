
(function () {
    "use strict";

    var page = WinJS.UI.Pages.define("home.html", {
        "retDataSource": null,
        "getXhrDoneCallback": function() {
            var that = this;
            return function (result) {
                if (result.status === 200) {                    
                    that.retDataSource = JSON.parse(result.response);
                    document.getElementById("basicListView").winControl.itemDataSource = new WinJS.Binding.List(that.retDataSource).dataSource;
                    
                }
            }
        },

        "getOnItemInvokedCallBack": function() {
            var that = this;
            function oniteminvoked(args) {
                WinJS.Navigation.navigate("/page/picContent.html", { itemIndex: that.retDataSource[args.detail.itemIndex].index });
            };
            return oniteminvoked;
        },


        "ready": function (element, options) {            
            WinJS.xhr({
                url: "http://127.0.0.1:8081/picDirs/picIndexAjax",
                responseType: "json"
            }).done(this.getXhrDoneCallback());
            document.getElementById("basicListView").winControl.oniteminvoked = this.getOnItemInvokedCallBack();            
        }

       

        
    
    });
})();