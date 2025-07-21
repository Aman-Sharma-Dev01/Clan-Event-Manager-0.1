import mongoose from "mongoose";

const winnerSchema = new mongoose.Schema({
  eventHeading: {
    type: String,
    required: [true, "Event heading is required."],
  },
  
  // Storing each winner's info in a structured object
  winner1: {
    name: { type: String, required: true },
    photo: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  },

  winner2: {
    name: { type: String, required: true },
    photo: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  },

  winner3: {
    name: { type: String, required: true },
    photo: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  },
  
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

}, { timestamps: true }); // Automatically adds createdAt and updatedAt

export const Winner = mongoose.model("Winner", winnerSchema);