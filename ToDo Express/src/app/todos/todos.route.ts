import express, { Request, Response } from "express";

// router middleware
export const todosRouter = express.Router();

todosRouter.get("/", (req: Request, res: Response) => {
  res.send("All todos");
});

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  // title //description //priority : high/medium/low //isCompleted : true/false
  res.send("Create todos");
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
