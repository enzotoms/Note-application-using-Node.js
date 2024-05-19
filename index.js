#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;
const fs = require("fs");
const { readNote, createNote, deleteSingleNote, readSingleNote} = require("./noteFunctions");

console.log(argv.command);

const {command} = argv;
if (argv.command === "create note") {
    console.log("user want to create note");

} else if (command === 'read note'){
    console.log("user want to read note");

} else if (command === 'delete Note'){
    deleteSingleNote(argv);
    
} else if (command === 'read single note'){
    readSingleNote(argv);
}




  



