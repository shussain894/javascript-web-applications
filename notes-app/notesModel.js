class NotesModel {
  constructor () {
    this.note = [];
  }

  getNotes() {
    return this.note;
  };

  addNotes(note) {
    this.note.push(note);
  };

  reset() {
    return this.note = [];
  }

  setNotes(response) {
    this.note = response;
  }
}

module.exports = NotesModel 