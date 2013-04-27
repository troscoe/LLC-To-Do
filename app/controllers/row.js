var moment = require('alloy/moment');
var todos = Alloy.Collections.todo;
var id;

if ($model) {
	id = $model.id;
	if ($model.get('done')) {
		$.row.backgroundColor = '#eee';
		$.row.hasCheck = true;
	} else {
		$.row.backgroundColor = '#fff';
		$.row.hasCheck = false;
	}
}
function toggleStatus(e) {
	var todo = todos.get(id);
	todo.set({
		"done": todo.get('done') ? 0 : 1,
		"date_completed": moment().unix()
  	}).save(); 
}
function deleteToDo(e) {
	e.cancelBubble = true;
	var todo = todos.get(id);
	todo.destroy();
}