import React from 'react';

const FormInput = ({ label, type }) => {
  return (
    <div className="flex flex-col mx-auto gap-4">
      <label>{label} </label>
      <input type={type} className=" border-2 py-1 px-4 border-black" />
    </div>
  );
};

export default FormInput;
