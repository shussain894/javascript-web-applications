(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // backend-server/notesClient.js
  var require_notesClient = __commonJS({
    "backend-server/notesClient.js"(exports, module) {
      var NotesClient2 = class {
        loadNotes(callback, errorCallback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => callback(data)).catch((error) => errorCallback(error));
        }
        createNote(note, errorCallback) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ "content": note })
          }).catch((error) => errorCallback(error));
        }
      };
      module.exports = NotesClient2;
    }
  });

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.note = [];
        }
        getNotes() {
          return this.note;
        }
        addNotes(note) {
          this.note.push(note);
        }
        reset() {
          return this.note = [];
        }
        setNotes(response) {
          this.note = response;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#note-button").addEventListener("click", () => {
            const newNote = document.querySelector("#note-input").value;
            this.addNewNote(newNote);
            this.client.createNote(newNote, () => {
              this.displayError();
            });
          });
        }
        addNewNote(newNote) {
          this.model.addNotes(newNote);
          this.displayNotes();
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.textContent = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        displayNotesFromApi() {
          this.client.loadNotes(
            (response) => {
              this.model.setNotes(response);
              this.displayNotes();
            }
          );
        }
        displayError() {
          const errorElement = document.createElement("div");
          errorElement.className = "error";
          errorElement.textContent = "Oops, something went wrong!";
          this.mainContainerEl.append(errorElement);
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesClient = require_notesClient();
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  console.log("The notes app is running");
  var client = new NotesClient();
  var model = new NotesModel();
  var view = new NotesView(model, client);
  client.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  }, () => {
    view.displayError();
  });
})();
