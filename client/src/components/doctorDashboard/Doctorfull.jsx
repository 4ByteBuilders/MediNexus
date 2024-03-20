import Sidebar from "../navbar/sideBar";
import { IoNewspaper } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { IoMdChatbubbles } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PrescriptionForm from "./PrescriptionForm";
import { DoctorDataContext } from "@/contextAPIs/DoctorContext";
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
  const { doctorData } = useContext(DoctorDataContext);
  const [pId, setPId] = useState({});
  const [page, setPage] = useState("Prescriptions");

  function formatDateString(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}, ${hours}:${minutes}`;

    return formattedDate;
  }

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
        <div className="w-full h-full flex flex-col">
          {page === "Prescriptions" ? <div className="flex flex-row-reverse w-full my-8 h-full">
            {/* Doctor Profile */}
            <div className="flex flex-col items-center h-full bg-gradient-to-b from-green-100 to-white rounded-2xl mx-5 py-3 border-2 border-black">
              <div className="flex flex-col w-full h-full items-center justify-center">
                <h1 className="text-2xl font-bold">Welcome {doctorData.name}!</h1>
                <div className="w-2/6 h-2/6 rounded-full">
                  <img src='https://png.pngtree.com/png-clipart/20231024/original/pngtree-illustration-of-a-male-doctor-for-profile-picture-png-image_13409387.png' />
                </div>
                <div className="my-1 text-center">
                  <p className="text-base">Degree: {doctorData.degree}</p>
                  <p className="text-base">Experience: {doctorData.experience} years</p>
                  <p className="text-base">Speciality: {doctorData.speciality}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mr-5 w-full">
              <h1 className="text-2xl font-bold">Patient&apos;s Prescriptions</h1>
              {doctorData.pendingPrescriptions.map((p, id) => {
                return (
                  <div
                    key={id}
                    className="w-full p-6 bg-slate-200 rounded-lg shadow-sm my-3"
                  >
                    <h2 className="text-2xl text-gray-800 mb-2">
                      {p.patientName}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      Created: {formatDateString(p.createdAt)}
                    </p>
                    <div className="flex justify-end">
                      <Button onClick={() => {
                        setPId({
                          patientName: p.patientName,
                          prescriptionId: p._id,
                          created: p.createdAt,
                        })
                        setPage('Fill')
                      }}>Fill Prescription</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> :
            <PrescriptionForm
              doctorData={doctorData} {...pId} />
          }
        </div>
      </div>
    </>
  );
};

export default Doctorfull;
