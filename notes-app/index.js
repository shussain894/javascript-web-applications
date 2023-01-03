const notesModel = require("./notesModel")
const note = new notesModel()

note.addNotes('Buy milk')
note.addNotes('Go to gym')

console.log('The notes app is running')
console.log(note.getNotes())