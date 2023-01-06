const NotesClient = require("./backend-server/notesClient");
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

console.log('The notes app is running');

const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);

//view.displayNotesFromApi();

client.loadNotes((notes) => {
  // This will be executed if notes are loaded correctly from the server
  model.setNotes(notes);
  view.displayNotes();
}, () => {
  // This will be executed if there's an error
  view.displayError();
});