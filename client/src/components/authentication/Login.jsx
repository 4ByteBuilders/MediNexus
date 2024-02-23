import React from "react";
import * as z from "zod";
import { instance as axios } from "../../lib/axiosConfig";
import {
  Form,
  FormControl,
  FormDescription,
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
const hospitalSchema = z.object({
  registrationId: z.string().min(6).max(50),
  password: z.string().min(6).max(50),
});
const initialValues = {
  registrationId: "",
  password: "",
};

const Login = () => {
  const form = useForm({
    resolver: zodResolver(hospitalSchema),
    defaultValues: initialValues,
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
                      placeholder="123456"
                      {...field}
                      className="text-md"
                    />
                  </FormControl>
                  <FormDescription>
                    This is the registration id of the hospital
                  </FormDescription>
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
                      placeholder="password"
                      {...field}
                      className="text-md"
                    />
                  </FormControl>
                  <FormDescription>
                    This is the password of the hospital
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
