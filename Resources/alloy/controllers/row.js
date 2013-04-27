function Controller() {
    function toggleStatus() {
        var todo = todos.get(id);
        todo.set({
            done: todo.get("done") ? 0 : 1,
            date_completed: moment().unix()
        }).save();
    }
    function deleteToDo(e) {
        e.cancelBubble = true;
        var todo = todos.get(id);
        todo.destroy();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row",
        title: "undefined" != typeof $model.__transform["item"] ? $model.__transform["item"] : $model.get("item")
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    deleteToDo ? $.__views.row.addEventListener("delete", deleteToDo) : __defers["$.__views.row!delete!deleteToDo"] = true;
    toggleStatus ? $.__views.row.addEventListener("click", toggleStatus) : __defers["$.__views.row!click!toggleStatus"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    var todos = Alloy.Collections.todo;
    var id;
    if ($model) {
        id = $model.id;
        if ($model.get("done")) {
            $.row.backgroundColor = "#eee";
            $.row.hasCheck = true;
        } else {
            $.row.backgroundColor = "#fff";
            $.row.hasCheck = false;
        }
    }
    __defers["$.__views.row!delete!deleteToDo"] && $.__views.row.addEventListener("delete", deleteToDo);
    __defers["$.__views.row!click!toggleStatus"] && $.__views.row.addEventListener("click", toggleStatus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;