import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
const port = 5000;

let server;

const uri =
  "mongodb+srv://test_user:sxKBfy8pKTmiGdjB@cluster0.i53p4.mongodb.net/practiceTodoBD?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const bootstrap = async () => {
  await client.connect();
  console.log("Connected to mongoDB");

  const db = await client.db("practiceTodoBD");
  const collection = await db
    .collection("todos")
    .insertOne({ title: "mongoDb", body: "mongodb" });

  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
