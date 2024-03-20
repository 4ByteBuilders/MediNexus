import { instance as axios } from "@/lib/axiosConfig";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

function Prescriptions({ patientData }) {
  console.log(patientData);
  const [prescriptions, setPrescriptions] = useState([]);
  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const res = await axios.get(
          `/prescription/${patientData._id}/get-prescription`
        );
        setPrescriptions(res.data);
        toast.success("Prescriptions fetched successfully");
      } catch (error) {
        console.log(error);
        toast.error("Error fetching prescriptions. Please try again later.");
      }
    };
    fetchPrescriptions();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl font-bold">Your Prescriptions</h1>
      <div className="mr-5 mt-8 flex flex-row gap-5">
        {prescriptions.map((prescription, idx) => {
          return (
            <div key={idx}>
              <h2 className="font-semibold">Prescription {idx + 1}</h2>
              {/* <p>{prescription}</p> */}
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

Prescriptions.propTypes = {
  patientData: PropTypes.object.isRequired,
};

export default Prescriptions;
