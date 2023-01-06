class NotesView {
  constructor(model, client) {
    this.model = model
    this.client = client 
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#note-input').value;
      this.addNewNote(newNote)
    });
  }

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
}

module.exports = NotesView
