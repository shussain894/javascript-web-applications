class NotesView {
  constructor(model, client) {
    this.model = model
    this.client = client 
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#note-input').value;
      this.addNewNote(newNote)
      // this.client.createNote(newNote, () => 
      // this.displayNotesFromApi(), (error) => 
      // { this.displayError(error)})
      this.client.createNote(newNote, () => {
        this.displayError();
      });
    });
  };

  addNewNote(newNote) {
    this.model.addNotes(newNote);
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    })

    const notes = this.model.getNotes()

    notes.forEach(note => { 
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  displayNotesFromApi() {
    this.client.loadNotes(
      (response) => {
        this.model.setNotes(response);
        this.displayNotes();
      },
    );
  };

  displayError() {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = 'Oops, something went wrong!';
    this.mainContainerEl.append(errorElement);
  };
}

module.exports = NotesView
