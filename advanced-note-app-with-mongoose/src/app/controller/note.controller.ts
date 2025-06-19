import express, { Request, Response } from "express";
import { Note } from "../models/note.models";

export const noteRouter = express.Router();

noteRouter.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;

  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message: "Note created successfully!",
    // note: myNote,
    note,
  });
});

noteRouter.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "All Notes!",
    notes,
  });
});

noteRouter.get("/:noteID", async (req: Request, res: Response) => {
  const noteID = req.params.noteID;
  const note = await Note.findById(noteID);

  res.status(201).json({
    success: true,
    message: "Single Note By id!",
    note,
  });
});

noteRouter.patch("/:noteID", async (req: Request, res: Response) => {
  const noteID = req.params.noteID;
  const updateBody = req.body;
  const note = await Note.findByIdAndUpdate(noteID, updateBody, { new: true });
  //   const note = await Note.updateOne({_id :noteID}, updateBody, { new: true });
  //   const note = await Note.findOneAndUpdate({_id :noteID}, updateBody, { new: true });

  res.status(201).json({
    success: true,
    message: "note updated!",
    note,
  });
});

noteRouter.delete("/:noteID", async (req: Request, res: Response) => {
  const noteID = req.params.noteID;
  const note = await Note.findByIdAndDelete(noteID);
  // const note1 = await Note.deleteOne({_id :noteID});
  // const note2 = await Note.findOneAndDelete({_id :noteID});

  res.status(201).json({
    success: true,
    message: "note Deleted!",
    note,
  });
});
