import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://noteApp:ltSjDR4gUW4mCQMK@cluster0.i53p4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Connected to Mongodb using mongoose!!!");

    server = app.listen(PORT, () => {
      console.log(`App is listening on: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
