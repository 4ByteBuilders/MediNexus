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
const Patientlist = ({ queue }) => {
  const capitalize = (name) => {
    const names = name.split(" ");
    const capitalizedNames = names.map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
    return capitalizedNames.join(" ");
  };
  const calculateAge = (dob) => {
    let parts = dob.split("/");
    let formattedDob = parts[1] + "/" + parts[0] + "/" + parts[2];
    let dateOfBirth = new Date(formattedDob);
    let diff_ms = Date.now() - dateOfBirth.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <div className="bg-white rounded-sm p-4 w-full">
      <h1 className="text-2xl font-semibold mb-2">Recent Patients</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Blood group</TableHead>
            <TableHead>Aadhar no</TableHead>
            <TableHead className="text-right">Doctor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queue.map((patient, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {capitalize(patient.name)}
              </TableCell>
              <TableCell>{patient.bloodType}</TableCell>
              <TableCell>{patient._id.slice(0, 4)}</TableCell>
              <TableCell className="text-right">
                {patient.selectedDoctorName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Patientlist;
