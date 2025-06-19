import { model, Schema } from "mongoose";

const noteSchema = new Schema(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Note = model("Note", noteSchema);
