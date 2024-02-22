const express = require("express");
const { catchAsync } = require("../../catchAsync");
const { hospitalRegister, hospitalLogin } = require("../../Controllers/hospital_controllers");
const router = express.Router();

router.post(
  "/register",
  catchAsync(hospitalRegister)
);

router.post("/login", catchAsync(hospitalLogin));


module.exports = router;
