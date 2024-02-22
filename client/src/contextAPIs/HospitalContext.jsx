import { createContext, useState } from "react";
import PropType from "prop-types";
export const HospitalDataContext = createContext(null);

export const HospitalDataProvider = ({ children }) => {
  const [hospitalData, setHospitalData] = useState(null);

  return (
    <HospitalDataContext.Provider value={{ hospitalData, setHospitalData }}>
      {children}
    </HospitalDataContext.Provider>
  );
};

HospitalDataProvider.propTypes = {
  children: PropType.node.isRequired
};