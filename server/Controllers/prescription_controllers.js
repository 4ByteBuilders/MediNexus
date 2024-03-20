const uuid = require('uuid');
const Prescription = require("../Models/Prescription");
const CustomError = require("../CustomError");
const Patient = require('../Models/Patient');

const createPrescription = async (req, res, next) => {
    let { patientName, patientId, doctorId, prescriptionId } = req.body;
    console.log(patientName);
    console.log(patientId);
    console.log(doctorId);
    const { isHospital } = req.isHospital;
    if (isHospital === false) {
        throw new CustomError("Unauthorized Access", 401);
    }
    const hospitalId = req.user._id;
    patientName = patientName.toLowerCase();
    const newPrescription = new Prescription({
        _id: prescriptionId,
        patientName,
        patientId,
        doctorId: doctorId,
        createdbyHospital: hospitalId,
    });
    await newPrescription.save();
    res.status(200).send({ status: "Prescription Created", newPrescription, success: true });
    // socket ting to doctor and patient
    // test ids to be uploaded by hospital
}

const doctorCheckup = async (req, res, next) => {
    let { prescriptionId, disease, doctorsOpinion, medicines } = req.body;
    // prescription Id has been tinged to the doctor which he will pass to this route
    // via the request body
    const isDoctor = req.isDoctor;
    if (isDoctor === false) {
        throw new CustomError("Unauthorized Access", 401);
    }
    const prescription = await Prescription.findById(prescriptionId);
    if (prescription) {
        prescription.medicines = medicines;
        prescription.disease = disease;
        prescription.doctorsOpinion = doctorsOpinion;
        await prescription.save();
        res.status(200).send({ status: "Prescription Updated", prescription });
        // socket ting to patient
    } else {
        throw new CustomError("Prescription Not Found", 404);
    }
}

const getPrescription = async (req, res, next) => {
    let { patient_id } = req.params;
    console.log(patient_id);
    //dob ka / ko underscore karke bhejega front end se
    patient_id = patient_id.replace(/_/g, '/');
    const patient = await Patient.findById(patient_id).populate('prescriptionIds');
    if (!patient) {
        throw new CustomError("Patient Not Found", 404);
    }
    console.log("Patient: ", patient);
    console.log("Patient prescriptions: ", patient.prescriptionIds);
    res.status(200).send({ status: "Patient Prescriptions", prescriptions: patient.prescriptionIds });
}

module.exports = {
    createPrescription,
    doctorCheckup,
    getPrescription,
}