import mongoose from "mongoose";

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required,
    },
    title: {
      type: String,
      required,
      min: 3,
    },
    desc: {
      type: String,
      required,
      min: 3,
    },
    rating: {
      type: Number,
      required,
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
      required,
    },
    long: {
      type: Number,
      required,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
