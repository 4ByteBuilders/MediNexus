const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Hospital } = require("../Models/Hospital");
const {Patient} = require("../Models/Patient");
const CustomError = require("../CustomError");
const Prescription = require("../Models/Prescription");


const hospitalRegister = async (req, res, next) => {
    const { registrationId, name, address, password, contactNumber, emailId } =
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
        .send({ status: "Hospital Registered", newHospital: {...newHospital, password: null}, token });
    }
  }

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
        res.status(200).send({ status: "Hospital Logged In", hospital: {...hospital, password: null}, token });
      } else {
        throw new CustomError("Incorrect Hospital ID or Password", 401);
      }
    } else {
      throw new CustomError("Hospital Not Found", 404);
    }
  }

const addPatient = async (req, res) => {
    let { aadhar, firstName, lastName, dob} = req.body;
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    const patientId = `${aadhar}-${firstName}-${lastName}-${dob}`;
    const patient = await Patient.findOne({ _id: patientId });
    if (patient) {
      res.status(400).send({ status: "Patient already exists!!", patient });
    } else {
      const { address, phoneNumber, bloodType, height, weight, gender, password} =
      req.body;
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
  }

  const getPatient = async (req, res, next) => {
    let { firstName, lastName } = req.query;
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    const patientName = `${firstName} ${lastName}`;
    const patients = await Patient.find({ name: patientName });
    if (patients) {
      res.status(200).send({ status: "Patient(s) Found", patients });
    } else {
      res.status(404).send({
        status: "No Patients found, kindly register the patient. Click Here:",
      });
    }
  }

module.exports = {
    hospitalRegister,
    hospitalLogin,
    addPatient,
    getPatient,
}