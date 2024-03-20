import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Doctorlist = ({ doctorsdata }) => {
  return (
    <div className="bg-white rounded-sm p-4 w-full">
      <h1 className="text-2xl font-semibold mb-2">Doctors consulted</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Contact info</TableHead>
            <TableHead>Speciality</TableHead>
            <TableHead className="text-right">Experience</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctorsdata.map((doc, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{doc.name}</TableCell>
              <TableCell>{doc.contact}</TableCell>
              <TableCell>{doc.speciality}</TableCell>
              <TableCell className="text-right">{doc.experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Doctorlist;
