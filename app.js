console.log("helooooo");
const fs = require("fs");
const note = require("./note");
const yargs = require("yargs");

// fs.appendFileSync("xx.txt", "hhhhhhhhhh")
// console.log(process.argv)

let command = yargs.argv._[0];
let title = yargs.argv.title;
let body = yargs.argv.body;

if (command === "add") {
  note.add(title, body);
} else if (command === "list") {
  console.log(note.list());
} else if (command === "read") {
  note.read(title);
} else if (command === "remove") {
  note.remove(title);
} else {
  note.help();
}
