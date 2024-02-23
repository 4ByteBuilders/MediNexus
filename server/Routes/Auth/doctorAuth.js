const express = require("express");
const { catchAsync } = require("../../catchAsync");
const { doctorLogin, doctorRegister } = require("../../Controllers/doctor_controllers");
const {protector} = require("../../Controllers/protect_controller");
const router = express.Router();

router.post(
  "/login",
  protector,
  catchAsync(doctorLogin)
);

router.post(
  "/register",
  protector,
  catchAsync(doctorRegister)
);

module.exports = router;
