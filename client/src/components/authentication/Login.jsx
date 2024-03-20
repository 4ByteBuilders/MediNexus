

import { useState } from "react";
import PatientLogin from "./PatientLogin";
import HospitalLogin from "./HospitalLogin";
import SwitchComponent from "./SwitchComponent";


const Login = () => {
  const [user, setUser] = useState('Hospital/Doctor');
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3 p-5 w-1/2">
        <h1 className="text-3xl font-bold">Login</h1>
        <SwitchComponent user={user} setUser={setUser} items={["Hospital/Doctor", "Patient"]} />
        {
          user === "Patient" ?
            <PatientLogin />
            :
            <HospitalLogin />
        }
      </div>
    </div>
  );
};

export default Login;
