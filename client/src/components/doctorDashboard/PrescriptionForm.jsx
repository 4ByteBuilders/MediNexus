import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const PrescriptionForm = () => {
  return (
    <>
      <Form>
        <FormItem>
          <FormLabel className="text-md">Patient Name</FormLabel>
          <FormControl>
            <Input placeholder="John Doe" className="text-md" />
          </FormControl>
        </FormItem>
      </Form>
    </>
  );
};

export default PrescriptionForm;
