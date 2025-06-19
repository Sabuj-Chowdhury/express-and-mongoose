import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const userRouter = express.Router();

userRouter.post("/create-user", async (req: Request, res: Response) => {
  const body = req.body;

  const note = await User.create(body);

  res.status(201).json({
    success: true,
    message: "User created successfully!",
    note,
  });
});

userRouter.get("/", async (req: Request, res: Response) => {
  const note = await User.find();

  res.status(201).json({
    success: true,
    message: "all users!",
    note,
  });
});
