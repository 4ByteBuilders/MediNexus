const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Hospital } = require("../../Models/Hospital");
const { catchAsync } = require("../../catchAsync");
const CustomError = require("../../CustomError");
const router = express.Router();
router.post(
  "/register",
  catchAsync(async (req, res) => {
    const { registrationId, name, address, password, contactNumber, emailId } =
      req.body;
    const hospital = await Hospital.findOne({ _id: registrationId });
    if (hospital) {
      throw new CustomError("Hospital already exists!!", 400);
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newHospital = new Hospital({
        _id: registrationId,
        name,
        address,
        password: hashedPassword,
        contactNumber,
        emailId,
      });
      await newHospital.save();
      const token = await jwt.sign({ registrationId }, process.env.SECRET_KEY);
      res
        .status(200)
        .send({ status: "Hospital Registered", newHospital, token });
    }
  })
);

router.post("/login", async (req, res) => {
  const { registrationId, password } = req.body;
  const hospital = await Hospital.findOne({ _id: registrationId });
  if (hospital) {
    const passwordIsValid = bcrypt.compare(password, hospital.password);
    if (passwordIsValid) {
      const token = await jwt.sign({ registrationId }, process.env.SECRET_KEY);
      res.status(200).send({ status: "Hospital Logged In", hospital, token });
    } else {
      throw new CustomError("Incorrect Hospital ID or Password", 401);
    }
  } else {
    throw new CustomError("Hospital Not Found", 404);
  }
});

module.exports = router;
