
import { IoNewspaper } from "react-icons/io5";
import { GrDocumentTest } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import Sidebar from "../navbar/sideBar";
const sideBarItemsUpper = [
  {
    name: "Dashboard",
    icon: <MdDashboard size={25} />,
    link: "/patienthome",
  },
  {
    name: "Prescriptions",
    icon: <IoNewspaper size={25} />,
    link: "/prescriptions",
  },
  {
    name: "Tests",
    icon: <GrDocumentTest size={25} />,
    link: "/gettests",
  },
  {
    name: "Chat",
    icon: <IoMdChatbubbles size={25} />,
    link: "/chatwithdoctor",
  },
];
const Patientfull = () => {
  return (
    <div className="w-screen pl-[220px] pt-8 font-lato">
      <Sidebar items={sideBarItemsUpper} />
      <div className="w-full flex flex-col">
        <h1 className="text-2xl font-bold">Welcome to your dashboard!</h1>
        <div className="mr-5 mt-8 flex flex-row gap-5" >
          <div className="w-1/2 p-2 bg-slate-200 rounded-lg">
            <h2 className="font-semibold">Your Medical History</h2>

          </div>
          <div className="w-1/2 p-2 bg-slate-200 rounded-lg">
            <h2 className="font-semibold">Personal Details</h2>

          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Patientfull;
