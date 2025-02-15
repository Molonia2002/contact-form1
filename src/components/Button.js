import React from "react";

const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
