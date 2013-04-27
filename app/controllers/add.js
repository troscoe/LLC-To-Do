function addItem() {
	 var todos = Alloy.Collections.todo;

    // Create a new model for the todo collection
    var task = Alloy.createModel('Todo', {
        item : $.todoText.value,
        done : 0
    });
    
    // add new model to the global collection
    todos.add(task);

    // save the model to persistent storage
    task.save();

    // reload the tasks
    todos.fetch();
    
    //close the window
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