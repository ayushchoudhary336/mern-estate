import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
// Importing authRouter to handle authentication routes

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter); // Using authRouter for authentication routes

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
