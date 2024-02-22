import React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const Patientlist = () => {
  const calculateAge = (dob) => {
    let parts = dob.split("/");
    let formattedDob = parts[1] + "/" + parts[0] + "/" + parts[2];
    let dateOfBirth = new Date(formattedDob);
    let diff_ms = Date.now() - dateOfBirth.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };
  const [patients, setPatients] = useState([
    {
      name: "John Doe",
      bloodgroup: "O+",
      contact: "12345610890",
      dob: "01/01/2000",
    },
    {
      name: "John Doe",
      bloodgroup: "O+",
      contact: "12345610890",
      dob: "01/01/2004",
    },
    {
      name: "John Doe",
      bloodgroup: "O+",
      contact: "",
      dob: "01/01/1990",
    },
  ]);

  return (
    <div className="bg-white rounded-sm p-4 w-full">
      <h1 className="text-2xl font-semibold mb-2">Recent Patients</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Blood group</TableHead>
            <TableHead>Contact info</TableHead>
            <TableHead className="text-right">Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{patient.name}</TableCell>
              <TableCell>{patient.bloodgroup}</TableCell>
              <TableCell>
                {patient.contact ? patient.contact : "Unavailable"}
              </TableCell>
              <TableCell className="text-right">
                {calculateAge(patient.dob)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Patientlist;
