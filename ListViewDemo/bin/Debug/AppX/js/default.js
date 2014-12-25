// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var page = WinJS.UI.Pages.define("default.html", {
        ready: function (element, options) {
            WinJS.Utilities.query("#runquery").listen("click", doSearch);
        }
    });

    function doSearch() {
        console.log(JSON.stringify(SourceList));
        SourceList[1] = { title: "Banana blast", text: "Ice cream", picture: "images/60banana.png" };
        console.log(JSON.stringify(SourceList));
        //var dataList1 = new WinJS.Binding.List(SourceList);
        var listview = document.getElementById("basicListView").winControl;
        
        //listview.itemDataSource = dataList1.dataSource;
        var dataSource = listview.itemDataSource;
        dataSource.list.setAt(1, { title: "Banana blast", text: "Ice cream", picture: "images/60banana.png" });
    }
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
    //console.log(DataExample.itemList.dataSource[0]["title"]);
})();
