const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes);

// the number of elements in the array = 3;
console.log(notes.length);

// first item
console.log(notes[0]);

// undefined, we don't have that many items in the notes;
console.log(notes[22]);

// always get the last item in the array;
console.log(notes[notes.length - 1]);

/*
// removes the last item
console.log(notes.pop());

// add new element at the end of the array
notes.push('My new note');

// removes the first item
console.log(notes.shift());

// add new item at the beginning of the array
notes.unshift('My first note');
*/

// deletes the second element of the array: go to position 1 and delete 1 element
//notes.splice(1, 1);

//add an item somewhere in the list; otidi na poziciq 1 v array, ne trii nishto s 0, dobavi elementa
// notes.splice (1, 0, 'This is the new second item.');

//go to position 1 in the array, delete 1 item, then add this; replace Note 2 and add the new note;
//notes.splice (1, 1, 'This is the new second item.');

notes[2] = 'This is no the new note 3';

console.log(notes.length);
console.log(notes);