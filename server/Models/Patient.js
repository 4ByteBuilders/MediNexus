const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  bloodType: {
    type: String,
    required: true,
  },
  height: String,
  weight: String,
  gender: String,
  prescriptionIds: {
    type: mongoose.Schema.Types.String,
    ref: "Prescription",
  },
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = { Patient };
