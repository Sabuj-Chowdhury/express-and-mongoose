const fs = require("fs");
const readStream = fs.createReadStream("./hello.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./write.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
  console.log(data);
  writeStream.write(data, (err) => {
    if (err) {
      throw new Error("Error", err);
    }
  });
});

readStream.on("error", (err) => {
  if (err) {
    throw new Error("Error", err);
  }
});

// after write stream END
readStream.on("end", () => {
  console.log("Read Stream End");
  writeStream.end();
});

// after write stream finish
writeStream.on("finish", () => {
  console.log("Write stream end");
});
