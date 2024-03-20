import { Input } from '@/components/ui/input';
import Sidebar from '../components/navbar/sideBar';
import { GiHeartOrgan } from 'react-icons/gi';
import { GrDocumentTest } from 'react-icons/gr';
import { MdDashboard } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import {instance as axios} from '../lib/axiosConfig';

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
    
    const findPatientRecords = async ()=>{
        const newDob = values.dob.replace(/\//g, '_');
        const patientId = `${values.aadhar}-${values.firstName.toLowerCase()}-${values.lastName.toLowerCase()}-${newDob}`;
        const res = await axios.get(`/prescription/${patientId}/get-prescription`);
        setPrescriptions(res.data.prescriptions);
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
                {
                prescriptions && 
                prescriptions.map((prescription, index)=>{
                    return <h1 key={index} >Hello</h1>
                })
                }
            </div>
        </div>
    );
}

export default UploadTests;