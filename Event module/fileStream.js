const fs = require("fs");
const readStream = fs.createReadStream("./hello1.txt", { encoding: "utf-8" });
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
