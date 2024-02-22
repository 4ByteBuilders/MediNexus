import { createContext, useEffect, useState } from "react";
import { instance as axios } from "../lib/axiosConfig";
import PropType from "prop-types";

export const HospitalDataContext = createContext();

export const HospitalDataProvider = ({ children }) => {
  const [hospitalData, setHospitalData] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/user/fetch-data");
        console.log(res.data);
        setHospitalData(res.data.user);
      } catch (error) {
        console.log(error);
      }
    }
    checkAuth();
  }, []);
  return (
    <HospitalDataContext.Provider value={{ hospitalData, setHospitalData }}>
      {children}
    </HospitalDataContext.Provider>
  );
};

HospitalDataProvider.propTypes = {
  children: PropType.node.isRequired
};