const express = require("express");
const app = express();

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRouter = require("./router/userRouter");

dotenv.config();

// middleware
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("User API Running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});