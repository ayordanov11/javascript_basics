const notes = ['Note 1', 'Note 2', 'Note 3']

notes[2] = 'This is no the new note 3';

// Counting .... 1

/*
for(let count = 2; count >= 0; count--) {
    console.log(count);
}
*/

//count is locally scoped to the for statement.

for(let count = 0; count < notes.length; count++){
    console.log(notes[count]);
}

for(let count = notes.length -1; count >= 0; count--){
    console.log(notes[count]);
}