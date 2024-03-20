const mongoose = require("mongoose");

const HospitalSchema = mongoose.Schema({
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
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  doctors: [{
      type: mongoose.Schema.Types.String,
      ref: "Doctor",
    }],
  contactNumber: String,
  emailId: String,
});

const Hospital = mongoose.model("Hospital", HospitalSchema);

module.exports = { Hospital };