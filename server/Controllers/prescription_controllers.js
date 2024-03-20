const { v4: uuidv4 } = require("uuid");
const Prescription = require("../Models/Prescription");
const CustomError = require("../CustomError");
const Patient = require("../Models/Patient");
const Test = require("../Models/Test");
const Doctor = require("../Models/Doctor");

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
  const patient = await Patient.findById(patientId);
  patient.prescriptionIds.push(prescriptionId);
  const doctor = await Doctor.findById(doctorId);
  doctor.pendingPrescriptions.push(prescriptionId);
  await patient.save();
  await doctor.save();
  res
    .status(200)
    .send({ status: "Prescription Created", newPrescription, success: true });
  // socket ting to doctor and patient
  // test ids to be uploaded by hospital
};

const doctorCheckup = async (req, res, next) => {
  let {
    prescriptionId,
    disease,
    doctorId,
    doctorOpinion,
    medicines,
    symptoms,
    tests,
  } = req.body;
  // prescription Id has been tinged to the doctor which he will pass to this route
  // via the request body
  console.log(req.body);
  const isDoctor = req.isDoctor;
  if (isDoctor === false) {
    throw new CustomError("Unauthorized Access", 401);
  }
  const prescription = await Prescription.findById(prescriptionId);
  if (prescription) {
    prescription.medicines = medicines;
    prescription.disease = disease;
    prescription.doctorsOpinion = doctorOpinion;
    prescription.symptoms = symptoms;
    for (let testName of tests) {
      const test = new Test({
        _id: uuidv4(),
        testName,
        patientName: prescription.patientName,
        patientId: prescription.patientId,
        doctorId: prescription.doctorId,
        doctorName: req.user.name,
        prescriptionId: prescriptionId,
        testDate: new Date(),
      });
      await test.save();
      prescription.testIds.push(test._id);
    }
    await prescription.save();
    const doctor = await Doctor.findById(doctorId);
    doctor.pendingPrescriptions = doctor.pendingPrescriptions.filter(
      (prescription_id) => {
        return prescriptionId !== prescription_id;
      }
    );
    await doctor.save();
    res.status(200).send({ status: "Prescription Updated", prescription });
    // socket ting to patient
  } else {
    throw new CustomError("Prescription Not Found", 404);
  }
};

const getPrescription = async (req, res, next) => {
  let { patient_id } = req.params;
  console.log(patient_id);
  //dob ka / ko underscore karke bhejega front end se
  patient_id = patient_id.replace(/_/g, "/");
  const patient = await Patient.findById(patient_id).populate({
    path: "prescriptionIds",
    populate: [{ path: "doctorId" }, { path: "createdbyHospital" }],
  });
  if (!patient) {
    throw new CustomError("Patient Not Found", 404);
  }
  console.log("Patient: ", patient);
  console.log("Patient prescriptions: ", patient.prescriptionIds);
  res
    .status(200)
    .send({
      status: "Patient Prescriptions",
      prescriptions: patient.prescriptionIds,
    });
};

module.exports = {
  createPrescription,
  doctorCheckup,
  getPrescription,
};
