const fs = require('fs');

console.log("Hello World!...1");
console.log("Hello World!.....2");

// const notes = fs.readFileSync('./note.js', "utf-8")
// console.log(notes);

fs.readFile('./note.js', "utf-8", ((err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
}))

console.log("Hello World!......3");
console.log("Hello World!..........4");