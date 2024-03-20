import React from "react";

const Statscard = ({ statsdetails }) => {
  return (
    <div className="bg-white rounded-lg p-4 mt-3 mr-8 w-1/2">
      <div className="flex items-center">
        <div className="mr-5">{statsdetails.img}</div>
        <h1 className="text-lg font-bold">
          {statsdetails.count} {statsdetails.title}!
        </h1>
      </div>
    </div>
  );
};

export default Statscard;
