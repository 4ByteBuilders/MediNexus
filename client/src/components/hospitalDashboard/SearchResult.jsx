import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Loading from "../ui/loading";
import { useState } from "react";
import toast from "react-hot-toast";
import { instance as axios } from "@/lib/axiosConfig";

export default function SearchResults({ item, values }) {
  const [patient, setPatient] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const searchPatient = async () => {
    console.log("It ran");
    setLoading(true);
    try {
      const res = await axios.get("/hospital/patient-lookup", values);
      console.log(res.data);
      if (res.data.patients.length !== 0) {
        const data = res.data.patients;
        data.map((patient) => {
          patient.aadhar = patient._id.slice(0, 4);
          return patient;
        });
        setPatient(data);
      } else {
        toast.error("No Patients found");
        setPatient(null);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger onClick={searchPatient} asChild>
        <div className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
          <div className="">{item.icon}</div>
          <div className="">{item.name}</div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Results</DialogTitle>
          <DialogDescription>
            Select any one of the following patients
          </DialogDescription>
        </DialogHeader>
        {isLoading ? (
          <Loading />
        ) : patient ? (
          patient.map((patient, index) => (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="text-right">Name: {patient.name}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="text-right">
                  Aadhar last 4 digits: {patient.aadhar}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="text-right">
                  Aadhar last 4 digits: {patient.phoneNumber}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No patients found</p>
        )}

        <DialogFooter>
          <Button type="submit">Add Patient to Queue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
