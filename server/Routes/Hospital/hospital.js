const express = require('express');
const mongoose = require('mongoose');
const { catchAsync } = require('../../catchAsync');
const { addPatient, getPatient } = require('../../Controllers/hospital_controllers');
const { protector } = require('../../Controllers/protect_controller');
const Prescription = require('../../Models/Prescription');
const { Patient } = require('../../Models/Patient');

const router = express.Router();

  
router.get("/recent-patients", catchAsync(protector), catchAsync(async(req,res,next)=>{
  
    const isHospital = req.isHospital;
    if(isHospital === false){
        throw new CustomError("Unauthorized Access", 401);
    }
    const hospitalId = req.user._id;
    const prescriptions = await Prescription.find({createdbyHospital: hospitalId})
    console.log(prescriptions);
    let patientDetails = [];
    for(let prescription of prescriptions){
        const patient = await Patient.findById(prescription.patientId);
        patientDetails.push({
          patientName: patient.name,
          phoneNumber: patient.phoneNumber,
          gender: patient.gender,
          bloodType: patient.bloodType,
        });
    }
    res.status(200).send({status: "Recent Patients", patientDetails});
}));

router.get(
  "/patient-lookup",
  catchAsync(protector),
  catchAsync(getPatient)
  );

router.post('/add-patient', catchAsync(protector), catchAsync(addPatient));

module.exports = router;