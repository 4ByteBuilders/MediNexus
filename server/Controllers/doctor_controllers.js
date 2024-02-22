const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Doctor = require("../Models/Doctor");
const CustomError = require("../CustomError");

const doctorLogin = async (req, res, next) => {
    let { doctorId, password } = req.body;
    let doctor = await Doctor.findById(doctorId);
    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      throw new CustomError("Invalid Credentials", 400);
    }
    const token = jwt.sign({ _id: doctorId }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "Doctor Logged In", token });
  }

const doctorRegister = async (req, res, next) => {
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
    const token = jwt.sign({ _id: doctorId }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 2 * 24 * 60 * 60 * 1000,
      });
    res.status(201).json({ message: "Doctor Registered", token });
  }

module.exports = {
    doctorLogin,
    doctorRegister,
}