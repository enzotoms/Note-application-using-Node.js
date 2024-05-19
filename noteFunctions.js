const fs = require("fs");



function createNote(params) {
    const {noteTitle, noteDescription} = argv
    // step one: check if user has created some notes already
    
    let userNotes = [];
    
userNotes.push({
    noteTitle: noteTitle,
    noteDescription: argv.noteDescription,
});

    fs.readFile("./note.json","utf-8", (err, data) => {
        if (err) {
            fs.writeFileSync("./note.json", JSON.stringify(userNotes), "utf-8");
            return
        }
        const updatedNote = JSON.parse(data);
           
        updatedNote.push({
          noteTitle: noteTitle,
          noteDescription: argv.noteDescription,
              });
      
      
              fs.writeFileSync("./note.json", JSON.stringify(updatedNote), "utf-8");
          })
      }



        function readNote() {
            let note =  fs.readFileSync("./note.json", "utf-8");
            return note
          }
          // createNote();
          readNote();
          console.log(readNote());



          function deleteSingleNote (argv) {
            const {noteTitle } = argv;
            fs.readFile('./note.json', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                
                const userStoredNote = JSON.parse(data);
               const updatedNotes = userStoredNote.filter((items) => items.noteTitle !== noteTitle);

               fs.writeFileSync("./note.json", JSON.stringify(updatedNotes), "utf-8");

                
            });
          }

          module.exports = {
            readNote, createNote,deleteSingleNote
          };



          function readSingleNote (argv) {
            const {noteTitle } = argv;
            fs.readFile('./note.json', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                
                const userStoredNote = JSON.parse(data);
               const singleNotes = userStoredNote.find((items) => items.noteTitle === noteTitle);

               console.log(singleNotes);

            });
          }

          module.exports = {
            readNote, createNote,deleteSingleNote, readSingleNote
          };