import express, { Application, NextFunction, Request, Response } from "express";
import { todosRouter } from "./todos/todos.route";
const app: Application = express();

app.use(express.json());
app.use("/todos", todosRouter);

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Custom middleware");
    console.log({
      url: req.url,
      method: req.method,
      header: req.header,
    });
    next();
  },

  (req: Request, res: Response) => {
    res.send("Welcome to ToDo's app");
  }
);

export default app;
