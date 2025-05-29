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
// writing data
const txt = "ki koro?";

fs.writeFile("./hello.txt", txt, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.log("err er jonno write hoi nai", err);
    return;
  }
  console.log("write operation done");
});
console.log(5);

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
