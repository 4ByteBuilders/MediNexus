import * as z from "zod";
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

const patientSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  dob: z.string().min(2).max(50),
  aadharNumber: z.string().min(4).max(4),
  password: z.string().min(6).max(50),
});

const initialValuesPatient = {
  firstName: "",
  lastName: "",
  dob: "",
  aadharNumber: "",
  password: "",
};

function PatientLogin() {

  const formPatient = useForm({
    resolver: zodResolver(patientSchema),
    defaultValues: initialValuesPatient,
  });

  async function onSubmit(values) {
    console.log(values);
    // try {
    //   const res = await axios.post("/hospital-auth/login", values);
    //   console.log(res);
    //   toast.success("Hospital logged in successfully");
    //   setTimeout(() => {
    //     window.location.href = "/hospitalhome";
    //   }, 1500);
    // } catch (error) {
    //   console.log(error);
    //   toast.error(error.response.data.message);
    // }
  }

  return (
    <Form {...formPatient}>
      <form onSubmit={formPatient.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={formPatient.control}
          name="aadharNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Last Four Aadhar Digits</FormLabel>
              <FormControl>
                <Input
                  placeholder="XXXX"
                  {...field}
                  className="text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formPatient.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  className="text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formPatient.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                  className="text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formPatient.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Date of Birth</FormLabel>
              <FormControl>
                <Input
                  placeholder="DD/MM/YYYY"
                  {...field}
                  className="text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        <FormField
          control={formPatient.control}
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
  )
}

export default PatientLogin