import { Toaster } from "react-hot-toast";
import Signup from "./components/authentication/Signup";
import About from "./components/devPages/About";
import Contact from "./components/devPages/Contact";
import Hospitalfull from "./components/hospitalDashboard/Hospitalfull";
import LandingPage from "./components/landingpage/landingpage";
import { Navbar } from "./components/navbar/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HospitalDataProvider } from "./contextAPIs/HospitalContext";

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospitalhome" element={
          <HospitalDataProvider>
            <Hospitalfull />
          </HospitalDataProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}