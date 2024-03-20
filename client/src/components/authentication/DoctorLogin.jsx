import * as z from "zod";
import { instance as axios } from "../../lib/axiosConfig";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const doctorSchema = z.object({
  registrationId: z.string().min(6).max(50),
  password: z.string().min(6).max(50),
});
const initialValuesDoctor = {
  registrationId: "",
  password: "",
};

function DoctorLogin() {
  const form = useForm({
    resolver: zodResolver(doctorSchema),
    defaultValues: initialValuesDoctor,
  });

  async function onSubmit(values) {
    console.log(values);
    try {
      const res = await axios.post("/doctor-auth/login", values);
      console.log(res);
      toast.success("Doctor logged in successfully");
      setTimeout(() => {
        window.location.href = "/doctorhome";
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="registrationId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Registration ID</FormLabel>
              <FormControl>
                <Input placeholder="ABC:1234" {...field} className="text-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
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
  );
}

export default DoctorLogin;
