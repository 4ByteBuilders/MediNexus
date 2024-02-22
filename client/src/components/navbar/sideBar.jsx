import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { GiHeartOrgan } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import TestResults from "../hospitalTestResults/TestResults";
const sideBarItemsUpper = [
  {
    name: "Dashboard",
    icon: <MdDashboard size={25} />,
    link: "/hospitalhome",
  },
  {
    name: "View Stock",
    icon: <GiHeartOrgan size={25} />,
    link: "/viewstock",
  },
  {
    name: "Upload Test Results",
    icon: <GrDocumentTest size={25} />,
    link: "/uploadtest",
  },
];
function Sidebar() {
  return (
    <div
      className="fixed left-0 top-0 h-screen w-52 flex flex-col
         justify-between bg-secondary"
    >
      <div>
        <div className="flex flex-row gap-2 items-center justify-center mb-12 w-full p-3 transition-colors duration-300 cursor-pointer">
          <div className="w-14 mr-2">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="">
            <span className="font-bold">MediNexus</span>
          </div>
        </div>
        {sideBarItemsUpper.map((item, index) =>
          index === 2 ? (
            <TestResults item={item} />
          ) : (
            <div
              key={index}
              className={
                window.location.pathname === item.link
                  ? "flex flex-row gap-2 items-center justify-start w-full p-3 transition-colors duration-300 cursor-pointer bg-primary"
                  : "flex flex-row gap-2 items-center justify-start w-full p-3 transition-colors duration-300 cursor-pointer hover:bg-slate-200 "
              }
            >
              <div className="">{item.icon}</div>
              <div className="">{item.name}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Sidebar;
