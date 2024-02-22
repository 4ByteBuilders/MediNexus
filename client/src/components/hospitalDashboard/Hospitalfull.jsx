import { useContext } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HospitalDataContext } from "@/contextAPIs/HospitalContext";
const Hospitalfull = () => {
  const { hospitalData } = useContext(HospitalDataContext);
  return (
    <div className="w-full grid grid-cols-3">
      <div className="col-span-2 ml-20 m-auto flex flex-row align-center justify-center">

        {hospitalData ? 'Welcome ' + hospitalData.name : 'Welcome to your dashboard'}
        <div>
          <input className="my-5 mr-4 px-4 py-2 placeholder-green-500 bg-white rounded-lg text-sm border border-green-400 focus:outline-none focus:border-green-600"
            type="text"
            placeholder="Search patient" />
        </div>
        <div className="m-auto">
          <Button className='font-semibold text-1xl p-3 '>Add Patient</Button>
        </div>
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
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Hospitalfull;
