import mongoose from "mongoose";

// 1 create a schema
// 2 mpdel on that schema

const noteschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Note =  mongoose.model("Note",noteschema)

export default Note