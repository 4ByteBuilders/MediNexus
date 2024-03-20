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
import SwitchComponent from "./SwitchComponent"
import { useState } from "react";

const hospitalSchema = z.object({
  registrationId: z.string().min(6).max(50),
  password: z.string().min(6).max(50),
});
const initialValuesHospital = {
  registrationId: "",
  password: "",
};

const patientSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  dob: z.string().min(2).max(50),
  aadharNumber: z.string().min(12).max(12),
  password: z.string().min(6).max(50),
});

const initialValuesPatient = {
  firstName: "",
  lastName: "",
  dob: "",
  aadharNumber: "",
  password: "",
};


const Login = () => {
  const [user, setUser] = useState('Hospital/Doctor');

  const formPatient = useForm({
    resolver: zodResolver(patientSchema),
    defaultValues: initialValuesPatient,
  });

  const form = useForm({
    resolver: zodResolver(hospitalSchema),
    defaultValues: initialValuesHospital,
  });

  async function onSubmit(values) {
    try {
      const res = await axios.post("/hospital-auth/login", values);
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
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3 p-5 w-1/2">
        <h1 className="text-3xl font-bold">Login</h1>
        <SwitchComponent user={user} setUser={setUser} items={["Hospital/Doctor", "Patient"]} />
        {
          user === "Patient" ?
            <Form {...formPatient}>
              <form onSubmit={formPatient.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={formPatient.control}
                  name="aadharNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Aadhar Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123456789123"
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
                  name="Password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Password</FormLabel>
                      <FormControl>
                        <Input
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

            :
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="registrationId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Registration ID</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ABC:1234"
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
                  name="Password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Password</FormLabel>
                      <FormControl>
                        <Input
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
            </Form>}
      </div>
    </div>
  );
};

export default Login;
