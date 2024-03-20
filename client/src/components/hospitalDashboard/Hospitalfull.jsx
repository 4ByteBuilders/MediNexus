import { useContext, useState } from "react";
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
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    aadhar: "",
  });

  const { hospitalData } = useContext(HospitalDataContext);

  return (
    <div className="w-full grid grid-cols-3">
      <Sidebar items={sideBarItemsUpper} />
      <div className="col-span-2  m-auto flex flex-row flex-wrap align-center justify-center w-10/12 mx-20">
        {/* search patient and patient details component */}
        <div className="pl-20 ml-20 mt-10 w-full">
          <div className="flex flex-col gap-5 mb-6">
            <div className="flex items-center gap-5">
              <Input
                id="firstName"
                value={values.firstName}
                onChange={() =>
                  setValues({ ...values, firstName: event.target.value })
                }
                className="rounded-xl border-0 bg-white w-half"
                type="text"
                placeholder="Patient first name"
              />
              <Input
                id="lastName"
                value={values.lastName}
                onChange={() =>
                  setValues({ ...values, lastName: event.target.value })
                }
                className="rounded-xl border-0 bg-white w-half"
                type="text"
                placeholder="Patient Surname"
              />
            </div>
            <div className="flex items-center gap-5">
              <Input
                id="Aadhar"
                value={values.aadhar}
                onChange={() =>
                  setValues({ ...values, aadhar: event.target.value })
                }
                className="rounded-xl border-0 bg-white w-half"
                type="number"
                placeholder="Patient Aadhar no."
              />
              <Input
                id="dob"
                value={values.dob}
                onChange={() =>
                  setValues({ ...values, dob: event.target.value })
                }
                className="rounded-xl border-0 bg-white w-half"
                type="text"
                placeholder="DOB dd/mm/yyyy"
              />
              <SearchResults
                item={{ icon: <IoMdSearch />, name: "Search" }}
                values={values}
              />
            </div>
          </div>
          <Patientlist />
          <Hospitaldetails hospitalData={hospitalData} />
        </div>
      </div>
      <Hospitalselfstock />
    </div>
  );
};

export default Hospitalfull;
