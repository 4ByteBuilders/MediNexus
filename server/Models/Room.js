const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    _id: {
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
    prescriptionId: {
        type: mongoose.Schema.Types.String,
        ref: 'Prescription',
        required: true,
    },
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = {Room};