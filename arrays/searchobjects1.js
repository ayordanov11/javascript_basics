const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercises. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

console.log(notes.length);
console.log(notes);

// console.log(notes.indexOf({}));

//console.log({} === {});

//when we compare two objects it does not matter if they have the same set of objects properties and the same object property values.
//that does not make two objects equal.
//Two objects are equal if they are exact same object in memory

/*
let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject); 
*/

//findIndex looks for the first match it finds and when it finds it, it stops running the function, which is efficient.
const index = notes.findIndex(function (note, index) {
    console.log(note);
    return note.title === 'Habbits to work on'
});

console.log(index);