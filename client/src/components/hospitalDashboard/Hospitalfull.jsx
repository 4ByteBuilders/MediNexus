import { useContext } from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import Patientlist from "./Patientlist";
import { HospitalDataContext } from "@/contextAPIs/HospitalContext";
import { Input } from "../ui/input";
import Sidebar from "../navbar/sideBar";
import Hospitaldetails from "./Hospitaldetails";
import Hospitalselfstock from "./Hospitalselfstock";
import { GiHeartOrgan } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";
import SearchResults from "./SearchResult";

const sideBarItemsUpper = [
  {
    name: "Dashboard",
    icon: <MdDashboard size={25} />,
    link: "/hospitalhome",
  },
  {
    name: "View Stock",
    icon: <GiHeartOrgan size={25} />,
    link: "/viewstocks",
  },
  {
    name: "View Prescriptions",
    icon: <GrDocumentTest size={25} />,
    link: "/viewprescriptions",
  },
];
const Hospitalfull = () => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const { hospitalData } = useContext(HospitalDataContext);
  console.log(hospitalData);
  const [isLoading, setLoading] = useState(false);
  const [patient, setPatient] = useState(null);
  const searchPatient = async () => {
    setLoading(true);
    try {
      if (firstname === undefined) return;
      if (surname === undefined) surname = "";
      console.log(firstname, surname);
      const res = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/hospital/patient-lookup`,
        {
          params: {
            firstname,
            surname,
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      if (res.data.patients.length !== 0) {
        const data = res.data.patients;
        data.map((patient) => {
          patient.aadhar = patient._id.slice(0, 4);
          return patient;
        });
        setPatient(data);
        setIsSearch(true);
      } else {
        toast.error("No Patients found");
        setPatient(null);
        setIsSearch(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  return (
    <div className="w-full grid grid-cols-3">
      <Sidebar items={sideBarItemsUpper} />
      <div className="col-span-2  m-auto flex flex-row flex-wrap align-center justify-center w-10/12 mx-20">
        {/* search patient and patient details component */}
        <div className="pl-20 ml-20 mt-10 w-full">
          <div className="flex flex-col gap-5 mb-6">
            <div className="flex items-center gap-5">
              <Input
                id="firstname"
                value={firstname}
                onChange={() => setFirstname(event.target.value)}
                className="rounded-xl border-0 bg-white w-half"
                type="text"
                placeholder="Patient first name"
              />
              <Input
                id="surname"
                value={surname}
                onChange={() => setSurname(event.target.value)}
                className="rounded-xl border-0 bg-white w-half"
                type="text"
                placeholder="Patient Surname"
              />
            </div>
            <div className="flex items-center gap-5">
              <Input
                id="Aadhar"
                value={aadhar}
                onChange={() => setAadhar(event.target.value)}
                className="rounded-xl border-0 bg-white w-half"
                type="number"
                placeholder="Patient Aadhar no."
              />
              <Input
                id="dob"
                value={dob}
                onChange={() => setDob(event.target.value)}
                className="rounded-xl border-0 bg-white w-half"
                type="text"
                placeholder="DOB dd/mm/yyyy"
              />
              <Button className="font-semibold p-3" onClick={searchPatient}>
                Search
              </Button>
            </div>
          </div>
          <Patientlist />
          <Hospitaldetails hospitalData={hospitalData} />
        </div>
      </div>
      <Hospitalselfstock />
      <SearchResults
        item={{ icon: <IoMdSearch />, name: "Search" }}
        patient={patient}
      />
    </div>
  );
};

export default Hospitalfull;
