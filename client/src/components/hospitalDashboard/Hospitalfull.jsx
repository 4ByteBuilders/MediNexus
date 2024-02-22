import { useContext } from "react";
import { Button } from "../ui/button";
import Patientlist from "./Patientlist";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HospitalDataContext } from "@/contextAPIs/HospitalContext";
import { Input } from "../ui/input";
import Sidebar from "../navbar/sideBar";

const Hospitalfull = () => {
  const { hospitalData } = useContext(HospitalDataContext);
  return (
    <div className="w-full grid grid-cols-3">
      <Sidebar />
      <div className="col-span-2 ml-20 m-auto flex flex-row flex-wrap align-center justify-center">
        <div className="ml-20">
          <Input type="text" placeholder="Search patient" />
        </div>
        <div className="m-auto">
          <Link to='/signup' className='font-semibold text-1xl p-3'>Add Patient</Link>
        </div>
        <Patientlist />
        {/* <Card>
          <CardContent>
            <button>
                Create profile
            </button>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
      </div>
      <div className="col-span-1 m-10 mx-30">
        <Card>
          <CardContent className="grid grid-row">
            <Button className='font-semibold text-1xl p-3 my-4'>Upload Test Results</Button>
            <Button className='font-semibold text-1xl p-3 my-4'>Request Stock</Button>
            <Button className='font-semibold text-1xl p-3 my-4'>Upload Stock</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hospitalfull;
