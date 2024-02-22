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

export default function TestResults({ item }) {
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
            Enter the following details to upload the test results for the
            patient
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
