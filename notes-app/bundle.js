(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var notesModel2 = class {
        constructor() {
          this.note = [];
        }
        getNotes() {
          return this.note;
        }
        addNotes(note2) {
          this.note.push(note2);
        }
        reset() {
          return this.note = [];
        }
      };
      module.exports = notesModel2;
    }
  });

  // index.js
  var notesModel = require_notesModel();
  var note = new notesModel();
  note.addNotes("Buy milk");
  note.addNotes("Go to gym");
  console.log("The notes app is running");
  console.log(note.getNotes());
})();
