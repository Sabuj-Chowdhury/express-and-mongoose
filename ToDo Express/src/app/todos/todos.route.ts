import express, { Request, Response } from "express";
import { client } from "../../config/mongoDB";
import { ObjectId } from "mongodb";

// router middleware
export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("practiceTodoBD");
  const collection = await db.collection("todos");

  const todos = await collection.find().toArray();
  res.send(todos);
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  // title //description //priority : high/medium/low //isCompleted : true/false

  const { title, description, priority } = req.body;

  const db = await client.db("practiceTodoBD");
  const collection = await db.collection("todos");
  collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: false,
  });
  const todos = await collection.find().toArray();
  res.send(todos);
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("practiceTodoBD");
  const collection = await db.collection("todos");
  const todo = await collection.findOne({ _id: new ObjectId(id) });
  res.send(todo);
});

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const db = await client.db("practiceTodoBD");
  const collection = await db.collection("todos");
  const id = req.params.id;
  const { title, description, priority, isCompleted } = req.body;

  const filter = { _id: new ObjectId(id) };
  const UpdateDoc = await collection.updateOne(
    filter,
    { $set: { title, description, priority, isCompleted } },
    { upsert: true }
  );
  res.send(UpdateDoc);
});
todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("practiceTodoBD");
  const collection = await db.collection("todos");
  const response = await collection.deleteOne({ _id: new ObjectId(id) });
  res.send(response);
});
