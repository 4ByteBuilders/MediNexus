const express = require("express");
const { protector } = require("../../Controllers/protect_controller");
const { catchAsync } = require("../../catchAsync");
const router = express.Router();

const { createPrescription, doctorCheckup, getPrescription } = require("../../Controllers/prescription_controllers");

router.get("/:patient_id/get-prescription", protector, catchAsync(getPrescription));

router.post("/create", protector, catchAsync(createPrescription));

router.patch("/doctor-checkup", protector, catchAsync(doctorCheckup));

module.exports = router;