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
    disease: {
        type: String,
        required: true,
    },
    testIds: [{
        type: Schema.Types.String,
        ref: 'Test'
    }],
    doctorsOpinion: {
        type: String,
        required: true,
    },
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;