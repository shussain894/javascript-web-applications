class notesModel {
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
}

module.exports = notesModel 