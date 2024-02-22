import About from "./components/devPages/About";
import Contact from "./components/devPages/Contact";
import Hospitalfull from "./components/hospitalDashboard/Hospitalfull";
import LandingPage from "./components/landingPage/landingpage";
import { Navbar } from "./components/navbar/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospitalhome" element={<Hospitalfull />} />
      </Routes>
    </BrowserRouter>
  );
}