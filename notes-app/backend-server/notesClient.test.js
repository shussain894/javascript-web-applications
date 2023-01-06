const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableFetchMocks();

describe('NotesClient class', () => {

  let notesClient;
  beforeEach(() => {
    fetch.mockReset();
    client = new NotesClient();
  });

  it('calls fetch and loads notes data', (done) => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        text: 'This is a test note.',
      })
    );
    client.loadNotes((response) => {
      expect(response.id).toBe(1);
      expect(response.text).toBe('This is a test note.');
      done();
    });
  });

  it('createNote and adds it to the database', () => {
    fetch.mockResponseOnce(JSON.stringify([
      "this is a new note"
    ]));

    client.createNote('this is a new note');

    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:3000/notes',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'content': 'this is a new note'}),
      })
    );
  });
});