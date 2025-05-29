const fs = require("fs");

console.log(1);

// this is async function
fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Error occurred");
    return;
  }
  console.log(data);
});
console.log(2);

fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Kichu bhul hoise");
    return;
  }
  console.log(data);
});
console.log(3);

fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Vul hoise!");
    return;
  }
  console.log(data);
});
console.log(4);
