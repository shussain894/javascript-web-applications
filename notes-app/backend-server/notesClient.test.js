const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableFetchMocks();

describe('NotesClient class', () => {
  it('calls fetch and loads notes data', (done) => {
    const client = new NotesClient();
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
});