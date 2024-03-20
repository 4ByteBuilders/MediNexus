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

const hospitalSchema = z.object({
    registrationId: z.string().min(6).max(50),
    name: z.string().min(2).max(50),
    address: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6).max(50),
    contactNumber: z.string().min(10).max(10),
});

const initialValuesHospital = {
    registrationId: "",
    name: "",
    address: "",
    email: "",
    password: "",
    contactNumber: "",
};

function HospitalSignup() {
    const form = useForm({
        resolver: zodResolver(hospitalSchema),
        defaultValues: initialValuesHospital,
    });
    async function onSubmit(values) {
        try {
            const res = await axios.post("/hospital-auth/register", values);
            console.log(res);
            toast.success(`Hospital registered successfully`);
            setTimeout(() => {
                window.location.href = "/hospitalhome";
            }, 1500);
        } catch (error) {
            console.log(error);
            toast.error("An error occurred");
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md">Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="XYZ Hospital"
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
                    name="registrationId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md">
                                Official Registered ID
                            </FormLabel>
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
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md">Address</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Vellore, UK, 543120 "
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md">Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@email.com"
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
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md">Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="password"
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
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md">Contact Number</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="+XX-XXXXXXXXX"
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

export default HospitalSignup