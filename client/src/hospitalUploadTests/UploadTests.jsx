import { Input } from '@/components/ui/input';
import Sidebar from '../components/navbar/sideBar';
import { GiHeartOrgan } from 'react-icons/gi';
import { GrDocumentTest } from 'react-icons/gr';
import { MdDashboard } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import { instance as axios } from '../lib/axiosConfig';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { DialogHeader } from '@/components/ui/dialog';
import TestUpload from './TestUpload';

const sideBarItemsUpper = [
    {
        name: "Dashboard",
        icon: <MdDashboard size={25} />,
        link: "/hospitalhome",
    },
    {
        name: "View Stock",
        icon: <GiHeartOrgan size={25} />,
        link: "/viewstocks",
    },
    {
        name: "Upload Test Results",
        icon: <GrDocumentTest size={25} />,
        link: "/uploadtests",
    },
];

const item = { icon: <IoMdSearch />, name: "Search" };

function UploadTests() {


    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        aadhar: "",
    });

    const [prescriptions, setPrescriptions] = useState(null);
    const findPatientRecords = async () => {
        const newDob = values.dob.replace(/\//g, '_');
        const patientId = `${values.aadhar}-${values.firstName.toLowerCase()}-${values.lastName.toLowerCase()}-${newDob}`;
        const res = await axios.get(`/prescription/${patientId}/get-prescription`);
        setPrescriptions(res.data.prescriptions);
    }

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

    return (
        <div className='flex w-screen'>
            <Sidebar items={sideBarItemsUpper} />
            <div className='ml-[220px] flex flex-col w-full p-5'>
                <div className="flex flex-col gap-5 mb-6">
                    <div className="flex items-center gap-5">
                        <Input
                            id="firstName"
                            value={values.firstName}
                            onChange={() =>
                                setValues({ ...values, firstName: event.target.value })
                            }
                            className="rounded-xl border-0 bg-white w-half"
                            type="text"
                            placeholder="Patient first name"
                        />
                        <Input
                            id="lastName"
                            value={values.lastName}
                            onChange={() =>
                                setValues({ ...values, lastName: event.target.value })
                            }
                            className="rounded-xl border-0 bg-white w-half"
                            type="text"
                            placeholder="Patient Surname"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <Input
                            id="Aadhar"
                            value={values.aadhar}
                            onChange={() =>
                                setValues({ ...values, aadhar: event.target.value })
                            }
                            className="rounded-xl border-0 bg-white w-half"
                            type="number"
                            placeholder="Patient Aadhar no."
                        />
                        <Input
                            id="dob"
                            value={values.dob}
                            onChange={() =>
                                setValues({ ...values, dob: event.target.value })
                            }
                            className="rounded-xl border-0 bg-white w-half"
                            type="text"
                            placeholder="DOB dd/mm/yyyy"
                        />
                        <div
                            className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                            onClick={findPatientRecords}>
                            <div className="">{item.icon}</div>
                            <div className="">{item.name}</div>
                        </div>
                    </div>
                </div>
                <div className="mr-5 mt-8 flex flex-col gap-5">
                    {
                        prescriptions &&
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
                                                <Button>Upload Test Results</Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        {
                                                            prescription.testIds.length === 0 ?
                                                                <p className="font-semibold text-1/2xl">
                                                                    No Tests Prescribed
                                                                </p>
                                                                : <p className="font-semibold text-1/2xl">
                                                                    Add tests in pdf format
                                                                </p>
                                                        }
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        <div className='flex flex-col'>
                                                            {
                                                                !prescription.testIds.length === 0 &&
                                                                prescription.testIds.map((test, index) => {
                                                                    <TestUpload testName={test.testName} key={index} />
                                                                })
                                                            }
                                                        </div>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            )
                        })}</div>
            </div>
        </div>
    );
}

export default UploadTests;