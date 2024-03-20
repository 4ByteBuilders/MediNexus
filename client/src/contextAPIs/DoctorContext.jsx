import { createContext, useEffect, useState } from "react";
import { instance as axios } from "../lib/axiosConfig";
import PropType from "prop-types";
import Loading from "@/components/ui/loading";
import toast from "react-hot-toast";

export const DoctorDataContext = createContext();

export const DoctorDataProvider = ({ children }) => {
    const [doctorData, setDoctorData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("/user/fetch-data");
                console.log(res.data);
                setDoctorData(res.data.user);
            } catch (error) {
                console.log(error);
                toast.error("Please login to continue");
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (!doctorData && window.location.pathname !== "/signup") {
        window.location.href = "/login";
        return null;
    }

    return (
        <DoctorDataContext.Provider value={{ doctorData, setDoctorData }}>
            {children}
        </DoctorDataContext.Provider>
    );
};

DoctorDataProvider.propTypes = {
    children: PropType.node.isRequired,
};
