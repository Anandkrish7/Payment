import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { readdirSync } from "fs";
import path from "path";
import auth from "./routes/auth.js";

// Load environment variables
dotenv.config();

const app = express();

// Database connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error(`Error in DB Connection: ${err}`);
  });

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true })); 
app.use(morgan("dev"));

// Route
app.use("/api", auth);


// Listen to the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
