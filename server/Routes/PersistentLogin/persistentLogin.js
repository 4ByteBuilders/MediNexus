const express = require("express");
const jwt = require("jsonwebtoken");
const { catchAsync } = require("../../catchAsync");
const Doctor = require("../../Models/Doctor");
const { Hospital } = require("../../Models/Hospital");
const Patient = require("../../Models/Patient");
const CustomError = require("../../CustomError");

const router = express.Router();

router.get(
  "/fetch-data",
  catchAsync(async (req, res, next) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded._id;
    // Now you can use the userId...
    const doctor = await Doctor.findById(userId).populate("pendingPrescriptions");
    const hospital = await Hospital.findById(userId);
    const patient = await Patient.findById(userId);
    if (doctor || hospital || patient) {
      return res.status(200).send({
        status: "User Found",
        user: doctor || hospital || patient,
      });
    } else {
      throw new CustomError("User Not Found", 404);
    }
  })
);

module.exports = router;
