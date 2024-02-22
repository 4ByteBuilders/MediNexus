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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function TestResults({ item }) {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [patient, setPatient] = useState(null);
  const searchPatient = async () => {
    setLoading(true);
    try {
      let firstName = name.split(' ')[0];
      let lastName = name.split(' ')[1];
      if (firstName === undefined)
        return;
      if (lastName === undefined)
        lastName = '';
      console.log(firstName, lastName);
      const res = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/hospital/patient-lookup`, {
        params: {
          firstName,
          lastName,
        },
        withCredentials: true
      });
      if (res.data.patients.length !== 0)
        setPatient(res.data.patients);
      else {
        toast.error("No Patients found");
        setPatient(null);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={
            window.location.pathname === item.link
              ? "flex flex-row gap-2 items-center justify-start w-full p-3 transition-colors duration-300 cursor-pointer bg-primary"
              : "flex flex-row gap-2 items-center justify-start w-full p-3 transition-colors duration-300 cursor-pointer hover:bg-slate-200 "
          }
        >
          <div className="">{item.icon}</div>
          <div className="">{item.name}</div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search your patient</DialogTitle>
          <DialogDescription>
            Enter either of the following
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={() => setName(event.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Aadhar" className="text-right">
              Aadhar last 4 digits
            </Label>
            <Input id="Aadhar" type='number' value={aadhar} onChange={() => setAadhar(event.target.value)} className="col-span-3" />
          </div>
        </div>
        {patient && patient.map((patient, index) => (
          <div key={index} className="flex flex-col mb-2 bg-slate-200 rounded-lg cursor-pointer">
            <div className="p-2">
              <div className="text-sm">Name: {patient.name}</div>
              <div className="text-sm">Aadhar: {patient.aadhar}</div>
              <div className="text-sm">Ph.: {patient.phone}</div>
            </div>
          </div>
        ))}
        <DialogFooter>
          {isLoading ? <Button disabled>Loading...</Button> :
            <Button type="submit" onClick={searchPatient}>Search</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
