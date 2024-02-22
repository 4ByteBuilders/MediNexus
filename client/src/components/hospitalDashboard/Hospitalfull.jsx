import React from "react";
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
const Hospitalfull = () => {
  return (
    <div className="w-full grid grid-cols-3">
      <div className="col-span-2 ml-20 m-auto flex flex-row flex-wrap align-center justify-center">
        <div className="ml-20">
          <input className="my-5 mr-4 px-4 py-2 placeholder-green-500 bg-white rounded-lg text-sm border border-green-400 focus:outline-none focus:border-green-600 w-64" 
          type="text" 
          placeholder="Search patient"/>
          </div>
          <div className="m-auto">
          <Link to='/signup' className='font-semibold text-1xl p-3'>Add Patient</Link>
          </div>
          <Patientlist/>
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
