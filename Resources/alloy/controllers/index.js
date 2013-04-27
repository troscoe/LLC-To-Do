function Controller() {
    function __alloyId15() {
        var models = whereFunction(__alloyId14);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = transformFunction(__alloyId12);
            var __alloyId13 = Alloy.createController("row", {
                $model: __alloyId12
            });
            rows.push(__alloyId13.getViewEx({
                recurse: true
            }));
        }
        $.__views.todoTable.setData(rows);
    }
    function addToDo() {
        Alloy.createController("add").getView().open();
    }
    function whereFunction(collection) {
        return whereIndex ? collection.where({
            done: 1 === whereIndex ? 0 : 1
        }) : collection.models;
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.item = transform.item;
        return transform;
    }
    function showTasks(e) {
        whereIndex = e.index;
        todos.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        title: "List"
    });
    $.__views.__alloyId10 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.ADD,
        id: "__alloyId10"
    });
    addToDo ? $.__views.__alloyId10.addEventListener("click", addToDo) : __defers["$.__views.__alloyId10!click!addToDo"] = true;
    $.__views.win.leftNavButton = $.__views.__alloyId10;
    $.__views.todoTable = Ti.UI.createTableView({
        id: "todoTable"
    });
    $.__views.win.add($.__views.todoTable);
    var __alloyId14 = Alloy.Collections["todo"] || todo;
    __alloyId14.on("fetch destroy change add remove reset", __alloyId15);
    $.__views.__alloyId16 = Ti.UI.iOS.createToolbar({
        bottom: 0,
        id: "__alloyId16"
    });
    $.__views.win.add($.__views.__alloyId16);
    var __alloyId18 = [];
    var __alloyId22 = {
        title: "All",
        ns: "Alloy.Abstract"
    };
    __alloyId18.push(__alloyId22);
    var __alloyId23 = {
        title: "Active",
        ns: "Alloy.Abstract"
    };
    __alloyId18.push(__alloyId23);
    var __alloyId24 = {
        title: "Done",
        ns: "Alloy.Abstract"
    };
    __alloyId18.push(__alloyId24);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        index: 0,
        left: 5,
        right: 5,
        labels: __alloyId18,
        id: "tabbedbar"
    });
    $.__views.__alloyId16.add($.__views.tabbedbar);
    showTasks ? $.__views.tabbedbar.addEventListener("click", showTasks) : __defers["$.__views.tabbedbar!click!showTasks"] = true;
    $.__views.__alloyId8 = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.win,
        id: "__alloyId8"
    });
    $.__views.index.add($.__views.__alloyId8);
    exports.destroy = function() {
        __alloyId14.off("fetch destroy change add remove reset", __alloyId15);
    };
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    var INDEXES = {
        All: 0,
        Active: 1,
        Done: 2
    };
    var whereIndex = INDEXES["All"];
    var btnEdit = Titanium.UI.createButton({
        title: "Edit",
        systemButton: Ti.UI.iPhone.SystemButton.EDIT
    });
    var btnDone = Titanium.UI.createButton({
        title: "Done",
        systemButton: Ti.UI.iPhone.SystemButton.DONE
    });
    btnEdit.addEventListener("click", function() {
        $.todoTable.setEditing(true);
        $.win.setRightNavButton(btnDone);
    });
    btnDone.addEventListener("click", function() {
        $.todoTable.setEditing(false);
        $.win.setRightNavButton(btnEdit);
    });
    $.win.setRightNavButton(btnEdit);
    $.index.open();
    todos.fetch();
    __defers["$.__views.__alloyId10!click!addToDo"] && $.__views.__alloyId10.addEventListener("click", addToDo);
    __defers["$.__views.tabbedbar!click!showTasks"] && $.__views.tabbedbar.addEventListener("click", showTasks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;