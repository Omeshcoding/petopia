import React from 'react';
import FormInput from '@components/FormInput';
const UserProfileForms = () => {
  return (
    <form>
      <div className="flex gap-10 w-[80%] mx-auto ">
        <FormInput label="First Name" type="text" />
        <FormInput label="Last Name" type="text" />
      </div>
      <div className="flex gap-10 w-[80%] mx-auto ">
        <FormInput label="Phone" type="text" />
        <FormInput label="Phone alt" type="text" />
      </div>
      <div className="flex gap-10 w-[80%] mx-auto ">
        <FormInput label="City" type="text" />
        <FormInput label="State" type="n" />
        <FormInput label="Zip" type="text" />
      </div>
    </form>
  );
};

export default UserProfileForms;
