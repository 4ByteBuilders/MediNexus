import Sidebar from "../navbar/sideBar";
import { IoNewspaper } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { IoMdChatbubbles } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import PrescriptionForm from "./PrescriptionForm";
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
  const [prescription, setPrescriptions] = useState([
    {
      patientname: "Abhishek Ekre",
      doctorName: "Dr. Shastru",
      hospitalname: "Apollo Hospital",
      created: "12/5/22",
    },
    {
      patientname: "Abhishek Ekre",
      doctorName: "Dr. Shastru",
      hospitalname: "Apollo Hospital",
      created: "12/5/22",
    },
  ]);
  return (
    <>
      <div className="w-screen pl-[220px] pt-8 font-lato">
        <Sidebar items={sideBarItemsUpper} />
        <div className="w-full flex flex-col">
          <div className="mt-8">
            <h1 className="text-2xl font-bold">Welcome Dr. Shastru!</h1>
          </div>
          <div className="my-8">
            <h1 className="text-2xl font-bold">Patient's Prescriptions</h1>
          </div>
          {prescription.map((p, id) => {
            return (
              <div
                key={id}
                className="w-1/2 p-6 bg-slate-200 rounded-lg shadow-sm my-3  "
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {p.patientname}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  Created: {p.created}
                </p>
                <div className="flex justify-end">
                  <Link to="/prescriptionform">Fill Prescription</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Doctorfull;
