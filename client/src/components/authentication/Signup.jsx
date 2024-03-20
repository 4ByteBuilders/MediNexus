import SwitchComponent from "./SwitchComponent";
import { useState } from "react";
import HospitalSignup from "./HospitalSignup";
import DoctorSignup from "./DoctorSignup";

export default function Signup() {
    const [user, setUser] = useState("Hospital");

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-3 p-5 w-1/2">
                <h1 className="text-3xl font-bold">Signup</h1>
                <SwitchComponent user={user} setUser={setUser} items={["Hospital", "Doctor"]} />
                {user === "Hospital" ? <HospitalSignup /> : <DoctorSignup />}
            </div>
        </div>
    );
}
