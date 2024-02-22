const express = require("express");
const { protector } = require("../../Controllers/protect_controller");
const { catchAsync } = require("../../catchAsync");
const router = express.Router();

const { createPrescription, doctorCheckup } = require("../../Controllers/prescription_controllers");

router.post("/create", protector, catchAsync(createPrescription));

router.patch("/doctor-checkup", protector, catchAsync(doctorCheckup));

module.exports = router;