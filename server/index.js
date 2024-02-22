require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const authRoutes = require("./Routes/Auth/auth");
const hospitalAuth = require("./Routes/Auth/hospitalAuth");
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {});
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/hospital-auth", hospitalAuth);
app.use((err, req, res, next) => {
  // Log the error in detail, if in development mode
  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }
  // Send generic or specific error message
  res.status(err.statusCode || 500).send({
    message: err.message || "Internal Server Error",
  });
});