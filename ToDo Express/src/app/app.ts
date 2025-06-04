import express, { Application, Request, Response } from "express";
import { todosRouter } from "./todos/todos.route";
const app: Application = express();

app.use(express.json());
app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to ToDo's app");
});

export default app;
