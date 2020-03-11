// Create an array with five todoes
// you have x todos
// print the first and second to last items -> todo:walk the dog

const todos = ['learn JS', 'eat', 'play football', 'listen music', 'watch Barca playing'];

console.log(`I have ${todos.length} todos`);

console.log(`My first todo is: ${todos[0]} and my second to last todo is: ${todos[todos.length - 2]}`);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const todos2 = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise'];

// Delete the 3rd item;
todos2.splice(2, 1);
// add new item onto the end
todos2.push('Buy coffee');
// Remove the first item from the list
console.log(todos2.shift());

console.log(`You have ${todos2.length} todos!`);

console.log(todos2);

// 1. The first item
// 2. The second item

// When we pass a function into function, this is called a callback function

todos2.forEach(function(todo, index) {
    const num = index + 1; // we start at 0, but we want to start at 1, we are displaying it to the user, so +1
    console.log(`${num}. ${todo}`);
})

// 1. Order can food
// 2. Clean kitchen
// ...

for(let count = 0; count < todos2.length; count++){
    const num = count + 1;
    const todo = todos2[count];
    console.log(`${num}. ${todo}`);
}
