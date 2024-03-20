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

export default function SearchResults({ item, patient }) {
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
          <DialogTitle>Search Results</DialogTitle>
          <DialogDescription>
            Select any one of the following patients
          </DialogDescription>
        </DialogHeader>
        {patient &&
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
          ))}

        <DialogFooter>
          <Button type="submit">Add Patient to Queue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
