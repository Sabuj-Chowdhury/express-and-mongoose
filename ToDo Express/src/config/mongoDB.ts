import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://test_user:sxKBfy8pKTmiGdjB@cluster0.i53p4.mongodb.net/practiceTodoBD?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
