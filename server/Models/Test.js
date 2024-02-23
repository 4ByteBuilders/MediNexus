const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    testName: {
        type: String,
        required: true,
    },
    testDate: {
        type: Date,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    patientId: {
        type: mongoose.Schema.Types.String,
        ref: 'Patient',
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.String,
        ref: 'Doctor',
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    testResult: {
        type: String,
    }, // url of the cloudinary file
    prescriptionId: {
        type: mongoose.Schema.Types.String,
        ref: 'Prescription',
        required: true,
    },
});

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;