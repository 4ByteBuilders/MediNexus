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
import { instance as axios } from "../../lib/axiosConfig";

export default function TestResults({ item }) {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [isLoading, setLoading] = useState(false);
  const searchPatient = async () => {
    setLoading(true);
    try {
      const firstName = name.split(' ')[0];
      const lastName = name.split(' ')[1];
      const res = await axios.get('/hospital/patient-lookup', { firstName, lastName })
      console.log(res.data);
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
        <DialogFooter>
          {isLoading ? <Button disabled>Loading...</Button> :
            <Button type="submit" onClick={searchPatient}>Search</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
