import { Toaster } from "react-hot-toast";
import Signup from "./components/authentication/Signup";
import About from "./components/devpages/About";
import Contact from "./components/devpages/Contact";
import Hospitalfull from "./components/hospitalDashboard/Hospitalfull";
import LandingPage from "./components/landingpage/landingpage";
import { Navbar } from "./components/navbar/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HospitalDataProvider } from "./contextAPIs/HospitalContext";
import Fullstocks from "./components/viewStocks/Fullstocks";
import Login from "./components/authentication/Login";
import Patientfull from "./components/patient/Patientfull";
import Doctorfull from "./components/doctorDashboard/Doctorfull";
import Prescriptions from "./components/patient/Prescriptions";
import { PatientDataProvider } from "./contextAPIs/PatientContext";
<<<<<<< HEAD
import UploadTests from "./hospitalUploadTests/UploadTests";
=======
import PrescriptionForm from "./components/doctorDashboard/PrescriptionForm";
>>>>>>> ad1f31b2fef92836775b4aec2d6f4b79d24fed1f

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/patienthome"
          element={
            <PatientDataProvider>
              <Patientfull />
            </PatientDataProvider>
          }
        />
        <Route path="/doctorhome" element={<Doctorfull />} />
<<<<<<< HEAD
=======
        <Route path="/prescriptionform" element={<PrescriptionForm />} />
        <Route path="/viewstocks" element={<Fullstocks />} />
>>>>>>> ad1f31b2fef92836775b4aec2d6f4b79d24fed1f
        <Route
          path="/hospitalhome"
          element={
            <HospitalDataProvider>
              <Hospitalfull />
            </HospitalDataProvider>
          }
        />
        <Route path="/viewstocks" element={<Fullstocks />} />
        <Route path="/uploadtests" element={<UploadTests />} />
      </Routes>
    </BrowserRouter>
  );
}
