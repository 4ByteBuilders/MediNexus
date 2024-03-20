import Sidebar from "../navbar/sideBar";
import { IoNewspaper } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { IoMdChatbubbles } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { Button } from "../ui/button";

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
      <div className="w-screen pl-[220px] pt-8 font-lato">
        <Sidebar items={sideBarItemsUpper} />
        <div className="w-full flex flex-col">
          <div className="mt-8">
            <h1 className="text-2xl font-bold">Welcome Dr. Shastru!</h1>
          </div>
          <div className="my-8">
            <h1 className="text-2xl font-bold">Patient's Prescriptions</h1>
          </div>
          <div className="w-1/2 p-6 bg-slate-200 rounded-lg shadow-sm my-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Abhishek Ekre
            </h2>
            <p className="text-sm text-gray-500 mb-2">Created: 12/5/22</p>
            <p className="text-lg text-gray-700 mb-2">Disease: Piles</p>
            <p className="text-base text-gray-600">
              Opinion: We of Alcoholics Anonymous believe that the reader will
              be interested in the medical estimate of the plan of recovery
              described in this book.
            </p>
          </div>
          <div className="w-1/2 p-6 bg-slate-200 rounded-lg shadow-sm my-3  ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Abhishek Ekre
            </h2>
            <p className="text-sm text-gray-500 mb-2">Created: 12/5/22</p>
            <p className="text-lg text-gray-700 mb-2">Disease: Piles</p>
            <p className="text-base text-gray-600">
              Opinion: We of Alcoholics Anonymous believe that the reader will
              be interested in the medical estimate of the plan of recovery
              described in this book.
            </p>
          </div>
          <div className="flex justify-end my-8 mr-20">
            <Button>Create new Prescription</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorfull;
