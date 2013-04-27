var todos = Alloy.Collections.todo;

var INDEXES = {
	'All': 0,
	'Active': 1,
	'Done': 2
};
var whereIndex = INDEXES['All'];

var btnEdit = Titanium.UI.createButton({
	title: 'Edit',
    systemButton: Ti.UI.iPhone.SystemButton.EDIT
});
 
var btnDone = Titanium.UI.createButton({
  	title: 'Done',
	systemButton: Ti.UI.iPhone.SystemButton.DONE    
});
 
btnEdit.addEventListener('click', function(e) {
	// Turn ON editing!
	$.todoTable.setEditing(true);
	$.win.setRightNavButton(btnDone);
});
 
btnDone.addEventListener('click', function(e) {
    $.todoTable.setEditing(false);
    $.win.setRightNavButton(btnEdit);
});
 
 
 // Add the edit button to the top right of the screen by default.
$.win.setRightNavButton(btnEdit);

$.index.open();
todos.fetch();

function addToDo(e) {
	Alloy.createController("add").getView().open();
}

function whereFunction(collection) {
	return !whereIndex ? 
		collection.models : 
		collection.where({ done: whereIndex === 1 ? 0 : 1 });	
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