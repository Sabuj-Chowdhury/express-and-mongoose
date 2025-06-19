import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

app.use(express.json());

const noteSchema = new Schema({
  //   title: String,
  //   content: String,
  title: { type: String, required: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "study", "work", "other"],
    default: "personal",
  },
  pinned: { type: Boolean, default: false },
  tags: {
    label: { type: String, required: true },
    color: { type: String, default: "Green" },
  },
});

const Note = model("Note", noteSchema);

app.post("/notes/create-note", async (req: Request, res: Response) => {
  // approach -1 for creating data
  //   const myNote = new Note({
  //     title: "Learning express",
  //     tags: {
  //       label: "Database",
  //     },
  //   });

  //   await myNote.save();

  // approach -2
  const body = req.body;

  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message: "Note created successfully!",
    // note: myNote,
    note,
  });
});

app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "All Notes!",
    notes,
  });
});

app.get("/notes/:noteID", async (req: Request, res: Response) => {
  const noteID = req.params.noteID;
  const note = await Note.findById(noteID);

  res.status(201).json({
    success: true,
    message: "Single Note By id!",
    note,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app");
});

export default app;
