// fs->file system
const fs = require("fs");

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
console.log(data);
