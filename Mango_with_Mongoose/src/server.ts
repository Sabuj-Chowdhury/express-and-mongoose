import express from "express";
import cors from "cors";
import config from "./config";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server running at : ${config.port}`);
});

async function server() {
  try {
    await mongoose.connect(config.database_url!);
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
}

server();
