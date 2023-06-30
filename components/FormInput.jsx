import React from 'react';

const FormInput = ({
  label,
  type,
  style,
  placeholder,
  value,
  handleChange,
}) => {
  console.log(name);
  return (
    <div className="flex flex-col mx-auto gap-4">
      <label>{label} </label>
      <input
        type={type}
        className={`border-2 pl-5 border-lightBrown rounded-md ${style}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
