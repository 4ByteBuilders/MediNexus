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
import Patientfull from "./components/patientDashboard/Patientfull";

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
        <Route
          path="/signup"
          element={
            <Signup />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patienthome" element={<Patientfull />} />
        <Route path="/viewstocks" element={<Fullstocks />} />
        <Route
          path="/hospitalhome"
          element={
            <HospitalDataProvider>
              <Hospitalfull />
            </HospitalDataProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
