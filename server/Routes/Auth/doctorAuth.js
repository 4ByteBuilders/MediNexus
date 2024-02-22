const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { catchAsync } = require("../../catchAsync");
const CustomError = require("../../CustomError");
const { Doctor } = require("../../Models/Doctor");

const router = express.Router();

router.post(
  "/login",
  catchAsync(async (req, res, next) => {
    let { doctorId, password } = req.body;
    let doctor = await Doctor.findById(doctorId);
    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      throw new CustomError("Invalid Credentials", 400);
    }
    const token = jwt.sign({ doctorId }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    res.status(200).json({ message: "Doctor Logged In", token });
  })
);
router.post(
  "/register",
  catchAsync(async (req, res, next) => {
    let { doctorId, password, name, speciality, experience, degree } = req.body;
    let doctor = await Doctor.findById(doctorId);
    if (doctor) {
      throw new CustomError("Doctor already exists", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    doctor = new Doctor({
      _id: doctorId,
      password: hashedPassword,
      name,
      speciality,
      experience,
      degree,
    });
    await doctor.save();
    const token = jwt.sign({ doctorId }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    res.status(201).json({ message: "Doctor Registered", token });
  })
);

module.exports = router;
