/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesClient = require('./backend-server/notesClient')

jest.mock('./backend-server/notesClient');

describe('Notes view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    client = new NotesClient();
    view = new NotesView(model, client);
  });

  it('displays 2 notes', () => {

    model.addNotes('Buy milk')
    model.addNotes('Go to the vets')
    view.displayNotes()

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('clicks the button and adds the note', () => {

    const input = document.querySelector('#note-input');
    input.value = 'My first new note';

    const button = document.querySelector('#note-button')
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My first new note');
  });

  it('displays the correct number of notes', () => {

    model.addNotes('This is my first note')
    model.addNotes('This is my second note')

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
  // it('client connects to the server and fetches notes', (done) => {
  //   fetch.mockResponseOnce(JSON.stringify(['first note 1', 'second note 2']));
  //   client.loadNotes((data) => {
  //     expect(data).toEqual(['first note 1', 'second note 2']);
  //     done();
  //   });
  // });
  it('applies notes from the server to the page', (done) => {
    const clientMock = {
      loadNotes: (callback) => callback(['fake note 1', 'fake note 2']),
    };
    const mockView = new NotesView(model, clientMock);

    mockView.displayNotesFromApi();
    const divs = document.querySelectorAll('div.note');
    const divsLength = divs.length;
    expect(divsLength).toBe(2);
    expect(divs[0].textContent).toEqual('fake note 1');
    expect(divs[1].textContent).toEqual('fake note 2');
    done();
  });

  it('displays error if theres no connection to database', () => {
    view.displayError()
    expect(document.querySelector('div.error').textContent).toBe('Oops, something went wrong!')
  });

});