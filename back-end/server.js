import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";

const app = express();

const port = process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
