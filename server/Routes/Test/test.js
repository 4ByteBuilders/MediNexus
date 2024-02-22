const express = require("express");
const { protector } = require("../../Controllers/protect_controller");
const { catchAsync } = require("../../catchAsync");
const Test = require("../../Models/Test");
const uuid = require('uuid');
const Prescription = require("../../Models/Prescription");
const Doctor = require("../../Models/Doctor");

const router = express.Router();

router.post("/create", protector, catchAsync(async(req,res,next)=>{
    let {prescriptionId,testName} = req.body;
    const isHospital = req.isHospital;
    if(isHospital === false){
        throw new CustomError("Unauthorized Access", 401);
    }
    const prescription = await Prescription.findById(prescriptionId);
    if(!prescription){
        throw new CustomError("Prescription Not Found", 404);
    }
    let {patientName, patientId, doctorId} = prescription;
    const doctor = await Doctor.findById(doctorId);
    const doctorName = doctor.name;
    patientName = patientName.toLowerCase();
    const newTest = new Test({
        _id: uuid.v4().substring(0, 8),
        testName,
        patientName,
        patientId,
        doctorId,
        doctorName,
        prescriptionId, 
        testDate: Date.now(),
    });
    await newTest.save();
    res.status(200).send({status: "Test Created", newTest});    
    // socket ting to doctor and patient (pending)
    // test ids to be uploaded by hospital
}));

// router.patch("/upload-results", protector, catchAsync(async(req,res,next)=>{
//     let {testId, testResults} = req.body;
//     const isHospital = req.isHospital;
//     if(isHospital === false){
//         throw new CustomError("Unauthorized Access", 401);
//     }
//     const test = await Test.findById(testId);
//     if(!test){
//         throw new CustomError("Test Not Found", 404);
//     }
//     test.testResults = testResults;
//     await test.save();
//     res.status(200).send({status: "Test Results Uploaded", test});
//     // socket ting to patient (pending)
// }));

module.exports = router;