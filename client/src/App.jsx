import About from "./components/devpages/About";
import Contact from "./components/devpages/Contact";
import LandingPage from "./components/landingpage/landingpage";
import { Navbar } from "./components/navbar/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  );
}