import { GiHeartOrgan } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import TestResults from "../hospitalTestResults/ViewPrescriptions";
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
    link: "/uploadtest",
  },
];
function Sidebar() {
  return (
    <div
      className="fixed left-0 top-0 h-screen w-[200px] flex flex-col
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
            <TestResults key={index} item={item} />
          ) : (
            <div
              key={index}
              className={
                window.location.pathname === item.link
                  ? "flex flex-row gap-2 items-center justify-start w-[195px] p-3 transition-colors duration-300 cursor-pointer bg-primary text-white rounded-md mx-auto"
                  : "flex flex-row gap-2 items-center justify-start w-[195px] p-3 transition-colors duration-300 cursor-pointer hover:bg-slate-200 rounded-md mx-auto"
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
