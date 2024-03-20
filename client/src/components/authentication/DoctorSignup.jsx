import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import toast from "react-hot-toast";
const doctorSchema = z.object({
  registrationId: z.string().min(6).max(50),
  name: z.string().min(2).max(50),
  experience: z.string().min(1).max(50),
  degree: z.string().min(2).max(50),
  password: z.string().min(6).max(50),
  speciality: z.string().min(2).max(50),
});

const initialValuesDoctor = {
  registrationId: "",
  name: "",
  experience: "",
  degree: "",
  password: "",
  speciality: "",
};
function DoctorSignup() {
  const formDoctor = useForm({
    resolver: zodResolver(doctorSchema),
    defaultValues: initialValuesDoctor,
  });
  async function onSubmit(values) {
    try {
      const res = await axios.post("/doctor-auth/register", values);
      console.log(res);
      toast.success(`Doctor registered successfully`);
      setTimeout(() => {
        window.location.href = "/doctorhome";
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  }
  return (
    <Form {...formDoctor}>
      <form onSubmit={formDoctor.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={formDoctor.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Dr. Shastru"
                  {...field}
                  className="text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formDoctor.control}
          name="registrationId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Official Registered ID</FormLabel>
              <FormControl>
                <Input placeholder="ABC:1234" {...field} className="text-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formDoctor.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Experience</FormLabel>
              <FormControl>
                <Input placeholder="In years" {...field} className="text-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formDoctor.control}
          name="degree"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Degree</FormLabel>
              <FormControl>
                <Input placeholder="MBBS, etc" {...field} className="text-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formDoctor.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className="text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formDoctor.control}
          name="speciality"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Speciality</FormLabel>
              <FormControl>
                <Input
                  placeholder="Cardiologist, Radiologist, etc"
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

export default DoctorSignup;
