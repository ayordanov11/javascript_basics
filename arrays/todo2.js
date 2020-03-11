// const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise'];

const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercose',
    completed: true
}]

const deleteToDo = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1);
    }
}

// 1. Convert array to array of objects -> text, completed property
// 2. Create function to remove a todo by text value.

deleteToDo(todos, 'buy food');
console.log(todos);