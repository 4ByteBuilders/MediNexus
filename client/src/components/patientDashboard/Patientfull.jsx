import React from "react";
import { IoNewspaper } from "react-icons/io5";
import { GrDocumentTest } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import Sidebar from "../navbar/sideBar";
const sideBarItemsUpper = [
  {
    name: "Prescriptions",
    icon: <IoNewspaper size={25} />,
    link: "/getprescriptions",
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
    <div className="w-full grid grid-cols-3">
      <Sidebar items={sideBarItemsUpper} />
    </div>
  );
};

export default Patientfull;
