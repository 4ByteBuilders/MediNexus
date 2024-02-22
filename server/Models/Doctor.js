const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  hospitals: [
    {
      type: mongoose.Schema.Types.String,
      ref: "Hospital",
    },
  ],
  experience: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = { Doctor };
