// console.log(process.argv);

const path = require("path");
const fs = require("fs");
const inputArgs = process.argv.slice(2);

const text = inputArgs.join(" ");
const msg = `${text} \n`;

if (!msg) {
  console.log("please provide message to log");
  console.log("Example: node index.js hello world");
  process.exit(1);
}

const filepath = path.join(__dirname, "log.txt");
fs.appendFile(filepath, msg, { encoding: "utf-8" }, () => {
  console.log("Log added!");
});
console.log(filepath);
