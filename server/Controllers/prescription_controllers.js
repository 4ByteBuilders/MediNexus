const uuid = require('uuid');
const Prescription = require("../Models/Prescription");
const CustomError = require("../CustomError");

const createPrescription = async(req,res,next)=>{
    let {patientName, patientId, doctorId} = req.body;
    const {isHospital} = req.isHospital;
    if(isHospital === false){
        throw new CustomError("Unauthorized Access", 401);
    }
    patientName = patientName.toLowerCase();
    const prescriptionId = uuid.v4();
    const newPrescription = new Prescription({
        _id: prescriptionId,
        patientName,
        patientId,
        doctorId: doctorId,
    });
    await newPrescription.save();
    res.status(200).send({status: "Prescription Created", newPrescription});    
    // socket ting to doctor and patient
    // test ids to be uploaded by hospital
}

const doctorCheckup = async(req,res,next)=>{
    let { prescriptionId, disease , doctorsOpinion} = req.body;
    // prescription Id has been tinged to the doctor which he will pass to this route
    // via the request body
    const isDoctor = req.isDoctor;
    if(isDoctor === false){
        throw new CustomError("Unauthorized Access", 401);
    }
    const prescription = await Prescription.findById(prescriptionId);
    if(prescription){
        prescription.disease = disease;
        prescription.doctorsOpinion = doctorsOpinion;
        await prescription.save();
        res.status(200).send({status: "Prescription Updated", prescription});
        // socket ting to patient
    } else {
        throw new CustomError("Prescription Not Found", 404);
    }
}

module.exports = {
    createPrescription,
    doctorCheckup,
}