var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            item: "text",
            done: "integer",
            date_completed: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "todo"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("todo", exports.definition, []);

collection = Alloy.C("todo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;