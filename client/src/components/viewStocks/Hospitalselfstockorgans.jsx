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

const Hospitalselfstockorgans = ({ name }) => {
  return (
    <div className="bg-white rounded-sm p-4 mt-24 mr-8">
      <div className="grid h-full">
        <div>
          <h1 className="text-2xl font-semibold ml-2">Available Organs</h1>
        </div>
        <Table>
          <TableCaption>A list of {name} stocks.</TableCaption>
          <TableHeader>
            <TableRow className>
              <TableHead className="w-1/2">Vital Organ</TableHead>
              <TableHead>Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Heart</TableCell>
              <TableCell>34</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lung</TableCell>
              <TableCell>17</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Kidney</TableCell>
              <TableCell>19</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Liver</TableCell>
              <TableCell>47</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Hospitalselfstockorgans;
