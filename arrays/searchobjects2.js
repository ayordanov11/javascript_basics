const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercises. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

/*
//-1 for not match, or it is the actual index
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
    return notes[index];
}
*/

// if we are looking for item directly, Find is a great choice
// if we are looking for index to do something like remove it byt is index then find idex is a great choice
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}

const note = findNote(notes, 'office modification');
console.log(note);

/*
console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function (note, index) {
    console.log(note);
    return note.title === 'Habbits to work on'
});

console.log(index);
*/