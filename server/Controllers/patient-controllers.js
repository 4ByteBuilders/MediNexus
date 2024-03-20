const Patient = require("../Models/Patient");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const CustomError = require("../CustomError");

const patientLogin = async (req, res, next) => {
    const { aadhar, firstName, lastName, dob, password } = req.body;
    const patientId = `${aadhar}-${firstName.toLowerCase()}-${lastName.toLowerCase()}-${dob}`;
    const patient = await Patient.findOne({ _id: patientId });
    if (patient) {
        const passwordIsValid = await bcrypt.compare(password, patient.password);
        if (passwordIsValid) {
            const token = jwt.sign({ _id: patientId }, process.env.SECRET_KEY);
            res.cookie("token", token, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
                maxAge: 2 * 24 * 60 * 60 * 1000,
            });
            res.status(200).send({ status: "Patient Logged In", patient: { ...patient, password: null }, token });
        } else {
            throw new CustomError("Incorrect Patient ID or Password", 401);
        }
    } else {
        throw new CustomError("Incorrect Patient ID or Password", 401);
    }
}

module.exports = {
    patientLogin,
}