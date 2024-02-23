const jwt = require("jsonwebtoken");
const CustomError = require("../CustomError");
const Doctor = require("../Models/Doctor");
const { Hospital } = require("../Models/Hospital");
const { Patient } = require("../Models/Patient");

const protector = async(req,res, next)=>{
    const token = req.cookies.token;
    console.log("*******");
    console.log(req.cookies.token);
    console.log("*******");
    if(!token){
        throw new CustomError("Unauthorized Access", 401);
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
        throw new CustomError("Unauthorized Access", 401);
    }
    const userId = decoded._id;
    const doctor = await Doctor.findById(userId);
    if (doctor) {
        req.isDoctor = true;
    }
    const hospital = await Hospital.findById(userId);
    if (hospital) {
        req.isHospital = true;
    }
    const patient = await Patient.findById(userId);
    if (patient) {
        req.isPatient = true;
    }
    if (doctor || hospital || patient) {
        req.user = doctor || hospital || patient;
        next();
    } else {
        throw new CustomError("User Not Found", 404);
    }
}

// const protector = async (req,res)=>{
//     const token = req.cookies.token;
//     console.log("token", token);
// }

module.exports = {
    protector,
}