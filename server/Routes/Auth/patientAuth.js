const express = require("express");
const { catchAsync } = require("../../catchAsync");
const { patientLogin } = require("../../Controllers/patient-controllers");

const router = express.Router();

router.post("/login", catchAsync(patientLogin));