
import { IoNewspaper } from "react-icons/io5";
import { GrDocumentTest } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { useContext, useState } from "react";
import { PatientDataContext } from "@/contextAPIs/PatientContext";
import First from "./First";
import PatientSidebar from "./PatientSideBar";
import Prescriptions from "./Prescriptions";
const sideBarItemsUpper = [
  {
    name: "Dashboard",
    icon: <MdDashboard size={25} />,
  },
  {
    name: "Prescriptions",
    icon: <IoNewspaper size={25} />,
  },
  {
    name: "Tests",
    icon: <GrDocumentTest size={25} />,
  },
  {
    name: "Chat",
    icon: <IoMdChatbubbles size={25} />,
  },
];
const Patientfull = () => {
  const { patientData } = useContext(PatientDataContext);
  const [page, setPage] = useState("Dashboard");
  return (
    <div className="w-screen pl-[220px] pt-8 font-lato">
      <PatientSidebar items={sideBarItemsUpper} page={page} setPage={setPage} />
      {
        page === "Dashboard" &&
        <First />}
      {page === "Prescriptions" &&
        <Prescriptions page={page} patientData={patientData} />
      }

    </div>
  );
};

export default Patientfull;
