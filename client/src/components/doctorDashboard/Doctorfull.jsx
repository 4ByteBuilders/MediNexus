import React from "react";
import Sidebar from "../navbar/sideBar";
import { IoNewspaper } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { IoMdChatbubbles } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const sideBarItemsUpper = [
  {
    name: "Prescriptions",
    icon: <IoNewspaper size={25} />,
    link: "/getprescriptions",
  },
  {
    name: "Notifications",
    icon: <IoIosNotifications size={25} />,
    link: "/gettests",
  },
  {
    name: "Chat",
    icon: <IoMdChatbubbles size={25} />,
    link: "/chatwithdoctor",
  },
  {
    name: "Blogs",
    icon: <LiaBlogSolid size={25} />,
    link: "/chatwithdoctor",
  },
];
const Doctorfull = () => {
  return (
    <>
      <div className="w-screen p-[220px] grid-cols-3">
        <Sidebar items={sideBarItemsUpper} />
        <div>
          <h1>Patient Prescriptions</h1>
        </div>
      </div>
    </>
  );
};

export default Doctorfull;
