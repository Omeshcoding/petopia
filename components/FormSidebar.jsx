import React from 'react';
import Logo from '@/components/Logo';
import logo from '@public/SVG/logodark.svg';
const FormSidebar = () => {
  return (
    <div className="flex flex-col text-left  bg-secondary w-[40%] h-[100vh]  pt-10  text-primary">
      <div className=" flex flex-col gap-20 mx-auto mt-10 ">
        <Logo logo={logo} title="PAWTASTIC" bgColor="primary" />

        <div className="flex-column gap-16 ">
          <a>User Profile</a>
          <a>Pet basic</a>
          <a>Pet Details</a>
          <a>Confirm</a>
        </div>
      </div>
    </div>
  );
};

export default FormSidebar;
