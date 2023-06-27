import React from 'react';

const FormInput = ({ label, type, style, placeholder }) => {
  console.log(style);
  return (
    <div className="flex flex-col mx-auto gap-4">
      <label>{label} </label>
      <input
        type={type}
        className={`border-2 pl-5 border-lightBrown rounded-md ${style}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
