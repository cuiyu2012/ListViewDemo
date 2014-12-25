(function () {
    "use strict";

    WinJS.UI.Pages.define("/page/picContent.html", {
        "retDataSource": null,

        "getXhrDoneCallback": function () {
            var that = this;
            function xhrDoneCallback(result) {
                if (result.status === 200) {                    
                    that.retDataSource = JSON.parse(result.response);                    
                    var newpics = that.retDataSource.pics.map(function (item) {
                        return { "picPath": "http://127.0.0.1:8081/picDirs/picRepository/" + this.picpage + "/" + item };
                    }, that.retDataSource);
                    console.log(JSON.stringify(newpics));
                    that.consoleRetDataSource();
                    document.getElementById("basicFlipView").winControl.itemDataSource = new WinJS.Binding.List(newpics).dataSource;
                }
            };
            return xhrDoneCallback;
        },

        "consoleRetDataSource": function() {
            console.log(JSON.stringify(this.retDataSource));
        },

        "ready": function (element, options) {
            console.log(options.itemIndex);           
            WinJS.xhr({
                url: "http://127.0.0.1:8081/picDirs/picContentAjax?picpage=" + options.itemIndex,
                responseType: "json"
            }).done(this.getXhrDoneCallback());            
        }
    });
})();

function onImgLoad(obj) {
    console.log(obj.height + " * " + obj.width + " " + obj.href);
    obj.parentNode.style.height = obj.height + "px";
    console.log(obj.parentNode.style.height);
}