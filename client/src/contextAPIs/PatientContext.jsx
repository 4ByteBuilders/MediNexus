import { createContext, useEffect, useState } from "react";
import { instance as axios } from "../lib/axiosConfig";
import PropType from "prop-types";
import Loading from "@/components/ui/loading";
import toast from "react-hot-toast";

export const PatientDataContext = createContext();

export const PatientDataProvider = ({ children }) => {
  const [patientData, setPatientData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/user/fetch-data");
        console.log(res.data);
        setPatientData(res.data.user);
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
  if (!patientData && window.location.pathname !== "/signup") {
    window.location.href = "/login";
    return null;
  }
  return (
    <PatientDataContext.Provider value={{ patientData, setPatientData }}>
      {children}
    </PatientDataContext.Provider>
  );
};

PatientDataProvider.propTypes = {
  children: PropType.node.isRequired,
};
