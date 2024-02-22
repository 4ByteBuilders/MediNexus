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

export default function TestResults({ item }) {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
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
          <Button type="submit">Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
