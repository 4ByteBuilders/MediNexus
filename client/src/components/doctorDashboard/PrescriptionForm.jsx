import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import axios from "axios";
import { Button } from "../ui/button";

const prescriptionSchema = z.object({
  symptoms: z.array(z.string()),
  medicines: z.array(z.string()),
  doctorOpinion: z.string().min(2).max(50),
  disease: z.string().min(4).max(20),
  recommendedTests: z.string().min(0).max(50),
});

const initialValuesPatient = {
  symptoms: "",
  medicines: "",
  doctorOpinion: "",
  disese: "",
  recommendedTests: "",
};

const PrescriptionForm = ({ doctor, created, patientname, hospitalname }) => {
  const form = useForm({
    resolver: zodResolver(prescriptionSchema),
    defaultValues: initialValuesPatient,
  });

  async function onSubmit(values) {
    console.log(values);
    try {
      const res = await axios.post("/patient-auth/login", values);
      console.log(res);
      toast.success("Hospital logged in successfully");
      setTimeout(() => {
        window.location.href = "/hospitalhome";
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="m-8 mx-96 w-1/2 p-6 bg-slate-200 rounded-lg shadow-sm my-3">
      <div>
        <h1 className="text-2xl font-bold">Fill Prescription</h1>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Patient: {patientname}
        </h2>
        <p className="text-sm text-gray-500 mb-2">Doctor: {doctor}</p>
        <p className="text-sm text-gray-500 mb-2">Hospital: {hospitalname}</p>
        <p className="text-sm text-gray-500 mb-2">Created: {created}</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="symptoms"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Symptoms</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Fever, Headache..."
                    {...field}
                    className="text-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="disease"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Probable Disease</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Cholera, Typhod.."
                    {...field}
                    className="text-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="doctorOpinion"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Opinion</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doctor's remarks/opinion"
                    {...field}
                    className="text-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="medicines"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Medicines</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Dolo, Crocin..."
                    {...field}
                    className="text-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="recommendedTests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Recommended tests</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="CT scan, MRI..."
                    {...field}
                    className="text-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default PrescriptionForm;
