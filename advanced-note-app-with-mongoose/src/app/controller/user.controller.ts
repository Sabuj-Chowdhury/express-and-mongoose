import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const userRouter = express.Router();

userRouter.post("/create-user", async (req: Request, res: Response) => {
  const body = req.body;

  const user = await User.create(body);

  res.status(201).json({
    success: true,
    message: "User created successfully!",
    user,
  });
});

userRouter.get("/", async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(201).json({
    success: true,
    message: "all users!",
    users,
  });
});

userRouter.get("/:userID", async (req: Request, res: Response) => {
  const userID = req.params.userID;
  const user = await User.findById(userID);

  res.status(201).json({
    success: true,
    message: "single user!",
    user,
  });
});
