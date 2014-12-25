// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";
   
    

    function doSearch() {
        
        //console.log(JSON.stringify(DataExample.dataArray));
        //DataExample.dataArray[9] = { title: "Vanilla", text: "Ice cream", picture: "images/60vanilla.png" };
        //var dataList1 = new WinJS.Binding.List(DataExample.dataArray);
        //var listview = document.getElementById("basicListView").winControl;
        DataExample.itemList.push({ title: "Banana blast", text: "Ice cream", picture: "images/60banana.png" })
        //listview.itemDataSource = dataList1.dataSource;
        //var dataSource = listview.itemDataSource;
        
        //dataSource.list.push({ title: "Banana blast", text: "Ice cream", picture: "images/60banana.png" })
    }
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        
        var activation = Windows.ApplicationModel.Activation;
        var app = WinJS.Application;
        var nav = WinJS.Navigation;
        var sched = WinJS.Utilities.Scheduler;
        var ui = WinJS.UI;

        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            nav.history = app.sessionState.history || {};
            nav.history.current.initialPlaceholder = true;

            // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
            ui.disableAnimations();
            var p = ui.processAll().then(function () {
                return nav.navigate(nav.location || Application.navigator.home, nav.state);
            }).then(function () {
                return sched.requestDrain(sched.Priority.aboveNormal + 1);
            }).then(function () {
                ui.enableAnimations();
            });
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
