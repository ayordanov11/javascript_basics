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
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}
*/

//single argument which is a funtion
const filteredNotes = notes.filter(function (note, index){
    return false;
})
console.log(filteredNotes);
