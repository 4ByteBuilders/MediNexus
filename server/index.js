require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const hospitalAuth = require("./Routes/Auth/hospitalAuth");
const hospitalRoutes = require("./Routes/Hospital/hospital");
const patientRoutes = require("./Routes/Patient/patient");
const doctorAuth = require("./Routes/Auth/doctorAuth");
const patientAuth = require('./Routes/Auth/patientAuth');
const persistentLoginRoute = require('./Routes/PersistentLogin/persistentLogin');
const prescriptionRoutes = require("./Routes/Prescription/prescription");
const testRoutes = require("./Routes/Test/test");

corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL, {});
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use("/user", persistentLoginRoute);
app.use("/hospital-auth", hospitalAuth);
app.use("/doctor-auth", doctorAuth);
app.use("/patient-auth", patientAuth);
app.use("/hospital", hospitalRoutes);
app.use("/patient", patientRoutes);
app.use("/prescription", prescriptionRoutes);
app.use("/test", testRoutes);
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
