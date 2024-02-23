import Sidebar from "../navbar/sideBar";
import Hospitalselfstock from "../hospitalDashboard/Hospitalselfstock";
import Hospitalselfstockorgans from "./Hospitalselfstockorgans";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { GiHeartOrgan } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
const Fullstocks = () => {
  const [hospitals, sethospital] = useState([
    {
      name: "Hospital 1",
    },
    {
      name: "Hospital 2",
    },
    {
      name: "Hospital 3",
    },
    {
      name: "Hospital 4",
    },
    {
      name: "Hospital 5",
    },
  ]);
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
  return (
    <div className="w-full grid grid-cols-4">
      <Sidebar items={sideBarItemsUpper} />
      <div className="col-span-2  m-auto flex flex-row flex-wrap align-center justify-center w-10/12 mx-20">
        <div className="pl-20 ml-40 w-full">
          <h1 className="text-2xl mt-20 font-bold">Your Hospital:</h1>
          <Hospitalselfstock name="your" />
        </div>
      </div>
      <div className="col-span-2  m-auto flex flex-row flex-wrap align-top justify-center w-10/12 mx-20">
        <div className="w-1/2 mr-52">
          <Hospitalselfstockorgans name="your" />
        </div>
      </div>
      {hospitals.map((hospital, index) => {
        return (
          <>
            <div className="col-span-2 m-auto flex flex-row flex-wrap align-center justify-center w-10/12 mx-20">
              <div className="pl-20 ml-40 w-full">
                {index === 0 ? (
                  <h1 className="text-2xl mt-20 font-bold">
                    Nearby Hospitals:
                  </h1>
                ) : null}
                <Hospitalselfstock name={hospital.name} />
              </div>
            </div>
            <div className="col-span-2 m-auto flex flex-row flex-wrap align-top justify-center w-10/12 mx-20">
              <div className="w-1/2 mr-52">
                <Hospitalselfstockorgans name={hospital.name} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Fullstocks;
