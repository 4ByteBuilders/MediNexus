import { createContext, useEffect, useState } from "react";
import { instance as axios } from "../lib/axiosConfig";
import PropType from "prop-types";
import toast from "react-hot-toast";

export const HospitalDataContext = createContext();

export const HospitalDataProvider = ({ children }) => {
  const [hospitalData, setHospitalData] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/user/fetch-data");
        setHospitalData(res.data.user);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch data");
      }
    };
    checkAuth();
  }, []);
  return (
    <HospitalDataContext.Provider value={{ hospitalData, setHospitalData }}>
      {children}
    </HospitalDataContext.Provider>
  );
};

HospitalDataProvider.propTypes = {
  children: PropType.node.isRequired,
};
