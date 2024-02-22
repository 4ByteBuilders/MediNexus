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

const Hospitalselfstock = ({ name }) => {
  return (
    <div className="bg-white rounded-sm p-4 mt-10 mr-8">
      <div className="grid h-full">
        <div>
          <h1 className="text-2xl font-semibold ml-2">Available Blood</h1>
        </div>
        <Table>
          <TableCaption>A list of {name} stocks.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Blood group</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">A+</TableCell>
              <TableCell>100L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">B+</TableCell>
              <TableCell>10L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AB+</TableCell>
              <TableCell>80L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">O+</TableCell>
              <TableCell>100L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">A-</TableCell>
              <TableCell>1L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">B-</TableCell>
              <TableCell>10L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AB-</TableCell>
              <TableCell>10L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">O-</TableCell>
              <TableCell>5L</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Hospitalselfstock;
