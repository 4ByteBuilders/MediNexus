const express = require("express");
const { catchAsync } = require("../../catchAsync");
const { doctorLogin, doctorRegister } = require("../../Controllers/doctor_controllers");
const {protector} = require("../../Controllers/protect_controller");
const router = express.Router();

router.post(
  "/login",
  catchAsync(protector),
  catchAsync(doctorLogin)
);

router.post(
  "/register",
  catchAsync(protector),
  catchAsync(doctorRegister)
);

module.exports = router;
