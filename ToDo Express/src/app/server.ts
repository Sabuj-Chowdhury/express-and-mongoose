import { client } from "../config/mongoDB";
import app from "./app";
const port = 5000;

let server;

const bootstrap = async () => {
  await client.connect();
  console.log("Connected to mongoDB");

  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
