const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    patientId: {
        type: Schema.Types.String,
        ref: 'Patient',
        required: true,
    },
    doctorId: {
        type: Schema.Types.String,
        ref: 'Doctor',
        required: true,
    },
    createdbyHospital: {
        type: Schema.Types.String,
        ref: 'Hospital',
        required: true,
    },
    disease: {
        type: String,
    },
    testIds: [{
        type: Schema.Types.String,
        ref: 'Test'
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    doctorsOpinion: {
        type: String,
    },
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;