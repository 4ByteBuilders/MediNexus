import Sidebar from "../navbar/sideBar"
import { instance as axios } from "@/lib/axiosConfig";
import { IoNewspaper } from "react-icons/io5";
import { GrDocumentTest } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const sideBarItemsUpper = [
    {
        name: "Dashboard",
        icon: <MdDashboard size={25} />,
        link: "/patienthome",
    },
    {
        name: "Prescriptions",
        icon: <IoNewspaper size={25} />,
        link: "/prescriptions",
    },
    {
        name: "Tests",
        icon: <GrDocumentTest size={25} />,
        link: "/gettests",
    },
    {
        name: "Chat",
        icon: <IoMdChatbubbles size={25} />,
        link: "/chatwithdoctor",
    },
];

function Prescriptions({ patientData }) {
    console.log(patientData)
    const [prescriptions, setPrescriptions] = useState([])
    useEffect(() => {
        const fetchPrescriptions = async () => {
            try {
                const res = await axios.get('/prescription/:patient_id/get-prescription')
                setPrescriptions(res.data)
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
            <h1 className="text-2xl font-bold">Your Prescriptions</h1>
            <div className="mr-5 mt-8 flex flex-row gap-5">
                {
                    prescriptions.map((prescription, idx) => {
                        return (
                            <div key={idx}>
                                <h2 className="font-semibold">Prescription {idx + 1}</h2>
                                {/* <p>{prescription}</p> */}
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

export default Prescriptions