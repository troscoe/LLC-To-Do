function Controller() {
    function addItem() {
        var todos = Alloy.Collections.todo;
        var task = Alloy.createModel("Todo", {
            item: $.todoText.value,
            done: 0
        });
        todos.add(task);
        task.save();
        todos.fetch();
        closeWindow();
    }
    function closeWindow() {
        $.add.close();
    }
    function focusTextField() {
        $.todoText.focus();
    }
    function closeKeyboard(e) {
        e.source.blur();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.add = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "New To Do",
        modal: "true",
        id: "add"
    });
    $.__views.add && $.addTopLevelView($.__views.add);
    focusTextField ? $.__views.add.addEventListener("open", focusTextField) : __defers["$.__views.add!open!focusTextField"] = true;
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Cancel",
        id: "__alloyId1"
    });
    closeWindow ? $.__views.__alloyId1.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId1!click!closeWindow"] = true;
    $.__views.add.leftNavButton = $.__views.__alloyId1;
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Add",
        id: "__alloyId3"
    });
    addItem ? $.__views.__alloyId3.addEventListener("click", addItem) : __defers["$.__views.__alloyId3!click!addItem"] = true;
    $.__views.add.rightNavButton = $.__views.__alloyId3;
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        height: 44,
        id: "__alloyId5"
    });
    var __alloyId6 = [];
    __alloyId6.push($.__views.__alloyId5);
    $.__views.todoText = Ti.UI.createTextField({
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        id: "todoText",
        hintText: "Type your to do"
    });
    $.__views.__alloyId5.add($.__views.todoText);
    closeKeyboard ? $.__views.todoText.addEventListener("return", closeKeyboard) : __defers["$.__views.todoText!return!closeKeyboard"] = true;
    $.__views.__alloyId4 = Ti.UI.createTableView({
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId6,
        id: "__alloyId4"
    });
    $.__views.add.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.add!open!focusTextField"] && $.__views.add.addEventListener("open", focusTextField);
    __defers["$.__views.__alloyId1!click!closeWindow"] && $.__views.__alloyId1.addEventListener("click", closeWindow);
    __defers["$.__views.__alloyId3!click!addItem"] && $.__views.__alloyId3.addEventListener("click", addItem);
    __defers["$.__views.todoText!return!closeKeyboard"] && $.__views.todoText.addEventListener("return", closeKeyboard);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;