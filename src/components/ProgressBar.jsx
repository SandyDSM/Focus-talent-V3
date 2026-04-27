import React from "react";

const ProgressBar = ({ porcentaje, id_pib }) => {

    const pid_color = {
    "1":"#46B75F",
    "2": "#FFE226",
    "3": "#FE0003"
  }

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
        style={{width: `${porcentaje}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
