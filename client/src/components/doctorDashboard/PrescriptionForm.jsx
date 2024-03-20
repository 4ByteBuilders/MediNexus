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
import { instance as axios } from "@/lib/axiosConfig";
import { Button } from "../ui/button";
import PropTypes from "prop-types";

const prescriptionSchema = z.object({
  symptoms: z.string().min(2).max(50),
  medicines: z.string().min(2).max(50),
  doctorOpinion: z.string().min(2).max(50),
  disease: z.string().min(4).max(20),
  tests: z.string().min(0).max(50),
});

const initialValuesPatient = {
  symptoms: "",
  medicines: "",
  doctorOpinion: "",
  disease: "",
  tests: "",
};

const PrescriptionForm = ({ doctorData, created, patientName, prescriptionId }) => {

  const form = useForm({
    resolver: zodResolver(prescriptionSchema),
    defaultValues: initialValuesPatient,
  });

  function formatDateString(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}, ${hours}:${minutes}`;

    return formattedDate;
  }

  async function onSubmit(values) {
    values.symptoms = values.symptoms.split(",");
    values.tests = values.tests.split(",");
    values.doctorId = doctorData._id;
    values.prescriptionId = prescriptionId;
    console.log(values);
    try {
      const res = await axios.patch("/prescription/doctor-checkup", values);
      console.log(res);
      toast.success("Prescription filled successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error filling prescription. Please try again later");
    }
  }

  return (
    <div className="m-8 mx-96 w-1/2 p-6 bg-slate-200 rounded-lg shadow-sm my-3">
      <div>
        <h1 className="text-2xl font-bold">Fill Prescription</h1>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Patient: {patientName}
        </h2>
        <p className="text-sm text-gray-500 mb-2">Doctor: {doctorData.name}</p>
        <p className="text-sm text-gray-500 mb-2">Created: {formatDateString(created)}</p>
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
            name="tests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Recommended tests</FormLabel>
                <FormControl>
                  <Input
                    type="text"
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

PrescriptionForm.propTypes = {
  doctorData: PropTypes.object.isRequired,
  created: PropTypes.string.isRequired,
  patientName: PropTypes.string.isRequired,
  prescriptionId: PropTypes.string.isRequired,
};

export default PrescriptionForm;
