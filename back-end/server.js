import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import pinRoute from "./routes/pins.js";
import userRoute from "./routes/users.js";

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

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
