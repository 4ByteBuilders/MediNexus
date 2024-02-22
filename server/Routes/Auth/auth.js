const express = require("express");
const jwt = require("jsonwebtoken");
const { Doctor } = require("../../Models/Doctor");
const { Hospital } = require("../../Models/Hospital");
const { Patient } = require("../../Models/Patient");
const { catchAsync } = require("../../catchAsync");
const CustomError = require("../../CustomError");

const router = express.Router();

router.post(
  "/patient/lookup",
  catchAsync(async (req, res) => {
    const { aadhar, firstName, lastName, dob } = req.body;
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    const patientId = `${aadhar}-${firstName}-${lastName}-${dob}`;
    const patient = await Patient.findOne({ _id: patientId });
    if (patient) {
      res.status(200).send({ status: "Patient Found", patient });
    } else {
      res.status(404).send({
        status: "Patient Not Found, kindly register the patient. Click Here:",
      });
    }
  })
);

router.post("/patient/register", async (req, res) => {
  const { aadhar, firstName, lastName, dob } = req.body;
  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();
  const patientId = `${aadhar}-${firstName}-${lastName}-${dob}`;
  const patient = await Patient.findOne({ _id: patientId });
  if (patient) {
    res.status(400).send({ status: "Patient already exists!!", patient });
  } else {
    const { address, phoneNumber, bloodType, height, weight, gender } =
      req.body;
    const newPatient = new Patient({
      _id: patientId,
      name: `${firstName} ${lastName}`,
      address,
      phoneNumber,
      bloodType,
      height,
      weight,
      gender,
    });
    await newPatient.save();
    res.status(200).send({ status: "Patient Registered", newPatient });
  }
});

router.post(
  "hospital/register",
  catchAsync(async (req, res) => {
    const { registrationId, name, address } = req.body;
    const hospital = await Hospital.findOne({ _id: registrationId });
    if (hospital) {
      throw new CustomError("Hospital already exists!!", 400);
    } else {
      const newHospital = new Hospital({
        _id: registrationId,
        name,
        address,
      });
      await newHospital.save();
      const token = await jwt.sign({ registrationId }, process.env.SECRET_KEY);
      res
        .status(200)
        .send({ status: "Hospital Registered", newHospital, token });
    }
  })
);

router.post("/hospital/login", async (req, res) => {});

module.exports = router;
