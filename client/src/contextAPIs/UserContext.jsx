import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropType from "prop-types";
import { instance as axios } from "../lib/axiosConfig"
import toast from "react-hot-toast";
export const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post('/profile');
        setUserData(res.data);
      } catch (err) {
        console.log(err);
        toast.error("You are not logged in");
      }
    };
    checkAuth();
    if (!userData) {
      localStorage.setItem('currentLink', window.location.pathname);
      navigate('/login');
    } else {
      localStorage.removeItem('currentLink');
    }
  }, [userData])

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

UserDataProvider.propTypes = {
  children: PropType.node.isRequired
};