import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { instance as axios } from "../../lib/axiosConfig"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import toast from "react-hot-toast"
import { useContext, useState } from "react"
import { HospitalDataContext } from "@/contextAPIs/HospitalContext"
import SwitchComponent from "./SwitchComponent"


const hospitalSchema = z.object({
    registrationId: z.string().min(6).max(50),
    name: z.string().min(2).max(50),
    address: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6).max(50),
    contactNumber: z.string().min(10).max(10),
})

const initialValues = {
    registrationId: "",
    name: "",
    address: "",
    email: "",
    password: "",
    contactNumber: "",
}

export default function Signup() {
    const { setHospitalData } = useContext(HospitalDataContext);
    const [user, setUser] = useState('Hospital');
    const form = useForm({
        resolver: zodResolver(hospitalSchema),
        defaultValues: initialValues,
    });

    async function onSubmit(values) {
        try {

            const res = await axios.post("/hospital-auth/register", values);
            console.log(res)
            setHospitalData(res.data._doc);
            toast.success(`${user} registered successfully`); x
            setTimeout(() => {
                window.location.href = "/hospitalhome"
            }, 1500);
        } catch (error) {
            console.log(error)
            toast.error("An error occurred")
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-3 p-5 w-1/2">
                <h1 className="text-3xl font-bold">Signup</h1>
                <SwitchComponent user={user} setUser={setUser} />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} className="text-md" />
                                    </FormControl>
                                    <FormDescription>
                                        This is the name of the hospital
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="registrationId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md">Registration ID</FormLabel>
                                    <FormControl>
                                        <Input placeholder="123456" {...field} className="text-md" />
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
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md">Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="123456" {...field} className="text-md" />
                                    </FormControl>
                                    <FormDescription>
                                        This is the address of the hospital
                                    </FormDescription>
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
                                        <Input placeholder="example@email.com" {...field} className="text-md" />
                                    </FormControl>
                                    <FormDescription>
                                        This is the email of the hospital
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
                                        <Input placeholder="password" {...field} className="text-md" />
                                    </FormControl>
                                    <FormDescription>
                                        This is the password of the hospital
                                    </FormDescription>
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
                                        <Input placeholder="1234567890" {...field} className="text-md" />
                                    </FormControl>
                                    <FormDescription>
                                        This is the contact number of the hospital
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
    )
}
