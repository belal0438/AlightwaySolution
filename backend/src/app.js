import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/database.js";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16Kb" }));
app.use(cookieParser());

/*
Route Handling
*/

import userRoute from "./routes/user.route.js";
import leaveRoute from "./routes/leave.route.js";

app.use("/api/v1/users", userRoute);
app.use("/api/v1/leave", leaveRoute);

app.get("/", (req, res) => {
  res.send("Hello belal word World!");
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR EVENT FOR APP !!", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILD !!!", err);
  });
