import PropTypes from "prop-types";

const Patientprofile = ({ patientData }) => {
  const calculateAge = (dob) => {
    let parts = dob.split("/");
    let formattedDob = parts[1] + "/" + parts[0] + "/" + parts[2];
    let dateOfBirth = new Date(formattedDob);
    let diff_ms = Date.now() - dateOfBirth.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };
  return (
    <div className="bg-white rounded-sm p-4 mt-12 mr-8 w-1/2">
      <div className="flex flex-col items-center">
        <div className="w-32">
          <img
            className="h-20 w-20 rounded-full m-auto"
            src="/icons/person.jpg"
          />
        </div>
        <h1 className="text-lg font-bold mt-4">Welcome {patientData.name}!</h1>
      </div>
      <div className="mt-4">
        <div className="text-lg mt-2">Age: {calculateAge(patientData.dob)}</div>
        <div className="text-lg mt-2">
          Blood Group: {patientData.bloodgroup}
        </div>
        <div className="text-lg mt-2">
          Contact Number: {patientData.contact}
        </div>
      </div>
    </div>
  );
};

Patientprofile.propTypes = {
  patientData: PropTypes.object.isRequired,
};

export default Patientprofile;
