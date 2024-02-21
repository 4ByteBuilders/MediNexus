const express=require('express');
const {Doctor}=require('../../Models/Doctor');
const {Patient}=require('../../Models/Patient');


const router=express.Router();

router.post('/patient/lookup', async(req, res)=>{
    const{aadhar, firstName, lastName, dob}=req.body;
    firstName=firstName.toLowerCase();
    lastName=lastName.toLowerCase();
    const patientId=`${aadhar}-${firstName}-${lastName}-${dob}`;
    const patient=await Patient.findOne({_id: patientId});
    if(patient){
        res.status(200).send({status: "Patient Found", patient});
    }
    else{
        res.status(404).send({status: "Patient Not Found, kindly register the patient. Click Here:"});
    }
})

router.post('/patient/register', async(req, res)=>{
    const{aadhar, firstName, lastName, dob}=req.body;
    firstName=firstName.toLowerCase();
    lastName=lastName.toLowerCase();
    const patientId=`${aadhar}-${firstName}-${lastName}-${dob}`;
    const patient=await Patient.findOne({_id: patientId});
    if(patient){
        res.status(400).send({status: "Patient already exists!!", patient});
    }
    else{
        const {address, phoneNumber, bloodType, height, weight, gender}=req.body;
        const newPatient=new Patient({
            _id: patientId,
            name: `${firstName} ${lastName}`,
            address,
            phoneNumber,
            bloodType,
            height,
            weight,
            gender,
        });
        await newPatient.save();
        res.status(200).send({status: "Patient Registered", newPatient});
    }
})

module.exports=router;
