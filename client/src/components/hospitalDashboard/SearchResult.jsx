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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { instance as axios } from "@/lib/axiosConfig";
import PropTypes from "prop-types";
import { CgGirl } from "react-icons/cg";
import { CgBoy } from "react-icons/cg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";
import { set } from "react-hook-form";

export default function SearchResults({
  item,
  values,
  patient,
  setPatient,
  setQueue,
  queue,
}) {
  const addToQueue = () => {
    setQueue([...queue, patient]);
  };
  const [isLoading, setLoading] = useState(true);
  const [doctorName, setDoctorName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  //capitalize name function
  const capitalize = (name) => {
    const names = name.split(" ");
    const capitalizedNames = names.map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
    return capitalizedNames.join(" ");
  };

  const searchPatient = async () => {
    console.log("It ran");
    setLoading(true);
    try {
      console.log(values);
      const res = await axios.get("/hospital/patient-lookup", {
        params: values,
      });
      console.log(res.data);
      if (res.data.patient) {
        setPatient(res.data.patient);
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

  useEffect(() => {
    console.log(doctorName, speciality);
    if (doctorName.length > 2 || speciality.length > 2) getDoctors();
  }, [doctorName, speciality]);

  const getDoctors = async () => {
    try {
      const res = await axios.get("/hospital/doctor-lookup", {
        params: {
          doctorName,
          speciality,
        },
      });
      setDoctorList(res.data.filteredDoctors);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
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
          <DialogDescription>Select if the patient is found</DialogDescription>
        </DialogHeader>
        {isLoading ? (
          <Loading />
        ) : patient ? (
          <div className="flex flex-row items-center gap-4 py-4 bg-slate-200 cursor-pointer rounded-lg px-3">
            <div>
              {patient.gender === "male" ? (
                <CgBoy size={34} />
              ) : (
                <CgGirl size={34} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <p className="text-center">
                Name:{" "}
                <span className="font-semibold">
                  {capitalize(patient.name)}
                </span>
              </p>
              <p className="text-center">
                Aadhar:{" "}
                <span className="font-semibold">{patient._id.slice(0, 4)}</span>
              </p>
              <p className="text-center">
                Blood group:{" "}
                <span className="font-semibold">{patient.bloodType}</span>
              </p>
              {patient.selectedDoctorName && (
                <p className="text-center">
                  Doctor:{" "}
                  <span className="font-semibold">
                    {patient.selectedDoctorName}
                  </span>
                </p>
              )}
            </div>
          </div>
        ) : (
          <p>No patients found</p>
        )}
        <DialogFooter>
          <DropdownMenu>
            {
              patient &&
              <DropdownMenuTrigger>Select Doctor</DropdownMenuTrigger>}
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <div className="flex flex-row gap-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={doctorName}
                    onChange={() => {
                      setDoctorName(event.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="Speciality"
                    value={speciality}
                    onChange={() => {
                      console.log(event.target.value);
                      setSpeciality(event.target.value);
                    }}
                  />
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {doctorList.map((item, index) => {
                return (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => {
                      console.log("Raaan");
                      setPatient({
                        ...patient,
                        selectedDoctorId: item._id,
                        selectedDoctorName: item.name,
                        selectedDoctorSpeciality: item.speciality,
                      });
                    }}
                  >
                    <div className="flex flex-col">
                      <p className="font-semibold">{item.name}</p>
                      <p>{item.speciality}</p>
                    </div>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="w-1" />
          {patient ? (
            <Button type="submit" onClick={addToQueue}>
              Add Patient to Queue
            </Button>
          ) : (
            <Button disabled type="submit">
              Add Patient to Queue
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

SearchResults.propTypes = {
  item: PropTypes.object,
  values: PropTypes.object,
  patient: PropTypes.object,
  setPatient: PropTypes.func,
};
