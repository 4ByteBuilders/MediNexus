import { useContext } from "react";
import { Button } from "../ui/button";
import Patientlist from "./Patientlist";
import { HospitalDataContext } from "@/contextAPIs/HospitalContext";
import { Input } from "../ui/input";
import Sidebar from "../navbar/sideBar";
import Hospitaldetails from "./Hospitaldetails";
import Hospitalselfstock from "./Hospitalselfstock";

const Hospitalfull = () => {
  const { hospitalData } = useContext(HospitalDataContext);
  return (
    <div className="w-full grid grid-cols-3">
      <Sidebar />
      <div className="col-span-2  m-auto flex flex-row flex-wrap align-center justify-center w-10/12 mx-20">
        {/* search patient and patient details component */}
        <div className="pl-20 ml-20 mt-10 w-full">
          <div className="flex flex-row items-center justify-between w-full gap-5 mb-6">
            <Input
              className="rounded-xl border-0 bg-white"
              type="text"
              placeholder="Search patient"
            />
            <Button className="font-semibold p-3">Add Patient</Button>
          </div>
          <Patientlist />
          <Hospitaldetails hospitalData={hospitalData} />
        </div>
      </div>
      <Hospitalselfstock />
    </div>
  );
};

export default Hospitalfull;
