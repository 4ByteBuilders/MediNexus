import { createContext, useEffect, useState } from "react";
import { instance as axios } from "../lib/axiosConfig";
import PropType from "prop-types";
import Loading from "@/components/ui/loading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const HospitalDataContext = createContext();

export const HospitalDataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [hospitalData, setHospitalData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/user/fetch-data");
        console.log(res.data);
        setHospitalData(res.data.user);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch data");
      }
      setLoading(false);
    };
    checkAuth();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  // if (!hospitalData && window.location.pathname !== "/signup") {
  //   navigate("/signup");
  //   toast.error("Please login to continue");
  //   return null;
  // }
  return (
    <HospitalDataContext.Provider value={{ hospitalData, setHospitalData }}>
      {children}
    </HospitalDataContext.Provider>
  );
};

HospitalDataProvider.propTypes = {
  children: PropType.node.isRequired,
};
