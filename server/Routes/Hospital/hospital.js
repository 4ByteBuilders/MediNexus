const express = require('express');
const mongoose = require('mongoose');
const { catchAsync } = require('../../catchAsync');
const { addPatient, getPatient } = require('../../Controllers/hospital_controllers');
const { protector } = require('../../Controllers/protect_controller');

const router = express.Router();

router.post('/add-patient', catchAsync(protector), catchAsync(addPatient));

router.get(
  "/patient-lookup",
  catchAsync(protector),
  catchAsync(getPatient)
);

module.exports = router;