import express, { Request, Response } from "express";
import { client } from "../../config/mongoDB";

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

todosRouter.get("/:title", (req: Request, res: Response) => {
  res.send("get todos by title ");
});
todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {
  res.send("Update todo");
});
todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {
  res.send("Delete todo");
});
