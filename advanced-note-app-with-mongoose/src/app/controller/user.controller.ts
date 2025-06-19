import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import { string, z } from "zod";

export const userRouter = express.Router();

const CreateUserZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

userRouter.post("/create-user", async (req: Request, res: Response) => {
  try {
    // const body = req.body;
    const body = await CreateUserZodSchema.parseAsync(req.body);
    console.log("zod body ", body);

    const user = await User.create(body);

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      user,
    });
  } catch (err: any) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
      err,
    });
  }
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

userRouter.patch("/:userID", async (req: Request, res: Response) => {
  const userID = req.params.userID;
  const updateUser = req.body;
  const user = await User.findByIdAndUpdate(userID, updateUser, { new: true });

  res.status(201).json({
    success: true,
    message: "user updated!",
    user,
  });
});

userRouter.delete("/:userID", async (req: Request, res: Response) => {
  const userID = req.params.userID;

  const user = await User.findByIdAndDelete(userID);

  res.status(201).json({
    success: true,
    message: "user deleted!",
    user,
  });
});
