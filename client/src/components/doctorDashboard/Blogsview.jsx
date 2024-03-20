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
    link: "/doctorhome",
  },
  {
    name: "Notifications",
    icon: <IoIosNotifications size={25} />,
    link: "/doctornotifications",
  },
  {
    name: "Chat",
    icon: <IoMdChatbubbles size={25} />,
    link: "/chatwithpatient",
  },
  {
    name: "Blogs",
    icon: <LiaBlogSolid size={25} />,
    link: "/blogsview",
  },
];

const Blogsview = () => {
  return (
    <div className="w-screen pl-[220px] pt-8 font-lato]">
      <Sidebar items={sideBarItemsUpper} />
    </div>
  );
};

export default Blogsview;
