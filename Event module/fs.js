// fs->file system
const fs = require("fs");

const myText = "Writing in file";

// writing in file
fs.writeFileSync("./hello.txt", myText);

// reading in file
const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

console.log(data);
