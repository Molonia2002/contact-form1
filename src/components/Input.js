import React from "react";

const Input = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-white">{label}</label>
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
