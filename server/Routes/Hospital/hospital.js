const express = require('express');
const mongoose = require('mongoose');
const { catchAsync } = require('../../catchAsync');
const { addPatient, getPatient } = require('../../Controllers/hospital_controllers');

const router = express.Router();

router.post('/add-patient', catchAsync(addPatient));

router.get(
    "/patient-lookup",
    catchAsync(getPatient)
  );

module.exports = router;