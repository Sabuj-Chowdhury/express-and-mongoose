// fs->file system
const fs = require("fs");

const data = fs.readFileSync("./hello.txt");
console.log(data);
