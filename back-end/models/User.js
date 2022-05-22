import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required,
      min: 3,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      required,
      max: 50,
      unique: true,
    },

    password: {
      type: String,
      required,
      min: 6,
    },

    isAdmin: {
      type: String,
      default: "null",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
