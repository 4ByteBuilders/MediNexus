
import { instance as axios } from "@/lib/axiosConfig";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function Prescriptions({ patientData }) {
    const [prescriptions, setPrescriptions] = useState([])
    function formatDateString(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const formattedDate = `${day}-${month}-${year}, ${hours}:${minutes}`;

        return formattedDate;
    }
    useEffect(() => {
        const fetchPrescriptions = async () => {
            try {
                const id = patientData._id.replace(/\//g, '_');
                const res = await axios.get(`/prescription/${id}/get-prescription`)
                console.log(res.data.prescriptions)
                setPrescriptions(res.data.prescriptions)
                toast.success('Prescriptions fetched successfully')
            } catch (error) {
                console.log(error)
                toast.error('Error fetching prescriptions. Please try again later.')
            }
        }
        fetchPrescriptions()
    }, [])
    return (
        <div className="w-full flex flex-col">
            <h1 className="text-2xl font-bold">Your recent prescriptions</h1>
            <div className="mr-5 mt-8 flex flex-col gap-5">
                {
                    prescriptions.reverse().map((prescription, idx) => {
                        return (
                            <div key={idx} className="bg-slate-200 flex flex-row items-center justify-between gap-2 p-2 rounded-lg w-full px-4 hover:bg-slate-300 transition-colors">
                                <div className="flex flex-col gap-2 p-2">
                                    <h2 className="font-semibold text-2xl">Prescription {idx + 1}</h2>
                                    <p className="text-slate-500">Id: {prescription._id}</p>
                                    <p className="">Hospital: {prescription.createdbyHospital.name}</p>
                                    <p className="">Created date:<span> {formatDateString(prescription.createdAt)}</span></p>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <p className="font-bold">Assigned to {prescription.doctorId.name}</p>
                                    <Dialog>
                                        <DialogTrigger>
                                            <Button>See Prescription</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    <p className="font-semibold text-2xl">
                                                        Prescription {idx + 1}
                                                    </p>
                                                </DialogTitle>
                                                <DialogDescription>
                                                    <div className="flex flex-col gap-2 items-center border-2 border-black rounded-lg py-4">

                                                        <div>
                                                            <span className="text-2xl font-semibold text-black">
                                                                {prescription.createdbyHospital.name}
                                                            </span>
                                                        </div>

                                                        <div className="border-b-2 border-green-800 w-2/3 " />

                                                        <div className="flex flex-col items-center w-full">
                                                            <div className="mb-2">
                                                                <span className="font-semibold text-lg text-black">Doctor Details</span>
                                                            </div>
                                                            <div className="grid grid-cols-2 w-full px-10 text-base">
                                                                <p className="text-black">Name: {prescription.doctorId.name}</p>
                                                                <p className="text-black ">Degree: {prescription.doctorId.degree}</p>
                                                                <p className="text-black ">Experience: {prescription.doctorId.experience} years</p>
                                                                <p className="text-black ">Speciality: {prescription.doctorId.speciality}</p>
                                                            </div>
                                                        </div>
                                                        <div className="border-b-2 border-green-800 w-2/3 " />

                                                        <div className="flex flex-col items-center w-full">
                                                            <div className="mb-2">
                                                                <span className="font-semibold text-lg text-black">Content</span>
                                                            </div>
                                                            <div className="grid grid-cols-2 w-full px-10 text-base">
                                                                <p className="text-black">Patient Name: {prescription.patientName}</p>
                                                                <p className="text-black ">Degree: {prescription.doctorId.degree}</p>
                                                                <p className="text-black ">Experience: {prescription.doctorId.experience} years</p>
                                                                <p className="text-black ">Speciality: {prescription.doctorId.speciality}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button type="button">
                                                        Close
                                                    </Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
            </div>
        </div>
    )
}

Prescriptions.propTypes = {
    patientData: PropTypes.object.isRequired
}

export default Prescriptions