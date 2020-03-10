console.log("note app");

const fs = require("fs");

const add = (title, body) => {
  let oldNotes = JSON.parse(fs.readFileSync("notes.json"));

  let note = {
    title,
    body
  };
  let newNotes = [...oldNotes, note];
  fs.writeFileSync("notes.json", JSON.stringify(newNotes));
};

const remove = title => {
  let oldNotes = JSON.parse(fs.readFileSync("notes.json"));

  let filtrednotes = oldNotes.filter(note => note.title !== title);
  fs.writeFileSync("notes.json", JSON.stringify(filtrednotes));
};

const read = title => {
  let oldNotes = JSON.parse(fs.readFileSync("notes.json"));

  let filtrednotes = oldNotes.filter(note => note.title === title);

  console.log(`title :${filtrednotes[0].title} body:${filtrednotes[0].body} `);
};

const list = () => {
  let oldNotes = JSON.parse(fs.readFileSync("notes.json"));
  console.log(oldNotes);
};
const help = () => {
  console.log("--helpp          show help");
  console.log("--title, -t      Title of note ");
  console.log("--body, -b       Body of note ");
};

module.exports = {
  add,
  remove,
  read,
  list,
  help
};
