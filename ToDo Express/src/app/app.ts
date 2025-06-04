import express, { Application, NextFunction, Request, Response } from "express";
import { todosRouter } from "./todos/todos.route";
import { error } from "console";
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

  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(what);
      res.send("Welcome to ToDo's app");
    } catch (error) {
      next(error);
    }
  }
);

app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(what);
    res.send("Welcome to Error er duniya");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("Error", error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

export default app;
