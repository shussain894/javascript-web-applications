const notesModel = require('./notesModel');

beforeEach(() => {
  note = new notesModel();
});

describe('notesModel', () => {
  it('should return an empty array', () => {
    expect(note.getNotes()).toEqual([]) 
  });
  it('adds a note and then returns the note', () => {
    note.addNotes('Buy milk')
    note.addNotes('Go to gym')
    expect(note.getNotes()).toEqual(['Buy milk', 'Go to gym'])
  });
  it('should clear the notes array', () => {
    note.addNotes('Buy milk')
    note.addNotes('Go to gym')
    note.reset()
    expect(note.getNotes()).toEqual([])
  });
});  