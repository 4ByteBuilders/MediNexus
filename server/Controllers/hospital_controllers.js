const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Hospital } = require("../Models/Hospital");
const Patient = require("../Models/Patient");
const CustomError = require("../CustomError");

const hospitalRegister = async (req, res, next) => {
  const { registrationId, name, address, password, contactNumber, emailId, doctors } =
    req.body;
  const hospital = await Hospital.findOne({ _id: registrationId });
  if (hospital) {
    throw new CustomError("Hospital already exists!!", 400);
  } else {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newHospital = new Hospital({
      _id: registrationId,
      name,
      address,
      password: hashedPassword,
      contactNumber,
      emailId,
      doctors
    });
    await newHospital.save();
    const token = jwt.sign({ _id: registrationId }, process.env.SECRET_KEY);
    // res.cookie("token", token, {httpOnly: true, maxAge: 2 * 24 * 60 * 60 * 1000,});
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .send({
        status: "Hospital Registered",
        newHospital: { ...newHospital, password: null },
        token,
      });
  }
};

const hospitalLogin = async (req, res, next) => {
  const { registrationId, password } = req.body;
  const hospital = await Hospital.findOne({ _id: registrationId });
  if (hospital) {
    console.log(password, hospital.password);
    const passwordIsValid = await bcrypt.compare(password, hospital.password);
    if (passwordIsValid) {
      const token = jwt.sign({ _id: registrationId }, process.env.SECRET_KEY);
      // res.cookie("token", token, {httpOnly: true, maxAge: 2 * 24 * 60 * 60 * 1000,});
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 2 * 24 * 60 * 60 * 1000,
      });
      res
        .status(200)
        .send({
          status: "Hospital Logged In",
          hospital: { ...hospital, password: null },
          token,
        });
    } else {
      throw new CustomError("Incorrect Hospital ID or Password", 401);
    }
  } else {
    throw new CustomError("Incorrect Hospital ID or Password", 401);
  }
};

const addPatient = async (req, res) => {
  let { aadhar, firstName, lastName, dob } = req.body;
  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();
  const patientId = `${aadhar}-${firstName}-${lastName}-${dob}`;
  const patient = await Patient.findOne({ _id: patientId });
  if (patient) {
    res.status(400).send({ status: "Patient already exists!!", patient });
  } else {
    const {
      address,
      phoneNumber,
      bloodType,
      height,
      weight,
      gender,
      password,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newPatient = new Patient({
      _id: patientId,
      name: `${firstName} ${lastName}`,
      address,
      phoneNumber,
      bloodType,
      height,
      weight,
      gender,
      password: hashedPassword,
    });
    await newPatient.save();
    res.status(200).send({ status: "Patient Registered", newPatient });
  }
};

const getPatient = async (req, res) => {
  let { firstName, lastName, dob, aadhar } = req.query;
  const patientId = `${aadhar}-${firstName.toLowerCase()}-${lastName.toLowerCase()}-${dob}`;
  //  const patientName = `${firstName} ${lastName}`;
  // const regex = new RegExp(patientName, "i");
  // let patients = await Patient.find({
  //   name: { $regex: regex },
  // }).limit(15);

  const patient = await Patient.findOne({ _id: patientId });

  if (patient) {
    res.status(200).send({ status: "Patient Found", patient });
  } else {
    res.status(200).send({
      status: "No record found for the given patient details!",
    });
  }
};

const getDoctors = async (req, res) => {
  let { speciality, doctorName } = req.query;
  doctorName = doctorName.toLowerCase();
  speciality = speciality.toLowerCase();

  if (req.isHospital) {
    const hospitalId = req.user._id;
    const hospital = await Hospital.findById(hospitalId).populate("doctors");
    const myDoctors = hospital.doctors;

    const filteredDoctors = [];

    for (let doctor of myDoctors) {
      const docName = doctor.name.toLowerCase();
      const docSpec = doctor.speciality.toLowerCase();
      if (docName.includes(doctorName) && docSpec.includes(speciality)) {
        filteredDoctors.push(doctor);
      }
    }

    if (filteredDoctors.isEmpty) {
      res.status(200).send({ status: "No Doctors found" });
    } else {
      res.status(200).send({ status: "Doctors Found", filteredDoctors });
    }
  } else {
    res.status(401).send({ status: "Unauthorized" });
  }
};

module.exports = {
  hospitalRegister,
  hospitalLogin,
  addPatient,
  getPatient,
  getDoctors
};
