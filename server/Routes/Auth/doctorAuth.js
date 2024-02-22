const express = require("express");
const { catchAsync } = require("../../catchAsync");
const { doctorLogin, doctorRegister } = require("../../Controllers/doctor_controllers");

const router = express.Router();

router.post(
  "/login",
  catchAsync(doctorLogin)
);

router.post(
  "/register",
  catchAsync(doctorRegister)
);

module.exports = router;
