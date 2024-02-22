import { Toaster } from "react-hot-toast";
import Singup from "./components/authentication/Signup";
import About from "./components/devPages/About";
import Contact from "./components/devPages/Contact";
import Hospitalfull from "./components/hospitalDashboard/Hospitalfull";
import LandingPage from "./components/landingPage/landingpage";
import { Navbar } from "./components/navbar/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {

  const [welcome, setWelcome] = useState("Loading...");

  useEffect(()=>{
    const fetchWelcomeMessage = async ()=>{
      const res = await axios.get('/');
      console.log(res.data);
      setWelcome(res.data.message);
    }
    fetchWelcomeMessage();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospitalhome" element={<Hospitalfull />} />
      </Routes>
    </BrowserRouter>
  );
}