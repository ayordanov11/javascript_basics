const notes = ['Note 1', 'Note 2', 'Note 3']

notes[2] = 'This is no the new note 3';

//callback is nothing more than a function like it's passed to a function
// 3 times 'testing123', because we have 3 elements in the array
notes.forEach(function (item, index) {
    console.log(index);
    console.log(item);
})

notes[2] = 'This is no the new note 3';

console.log(notes.length);
console.log(notes);