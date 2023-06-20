import React from 'react';
import Logo from '@/components/Logo';
import logo from '@public/SVG/logodark.svg';
const FormSidebar = () => {
  return (
    <div className="flex flex-col text-left  bg-secondary w-[40%] h-[100vh]  pt-20  text-primary">
      <div className="mx-auto mt-20">
        <Logo logo={logo} title="PAWTASTIC" bgColor="primary" />

        <ol className="flex-column gap-8 list-disc">
          <li>User Profile</li>
          <li>Pet basic</li>
          <li>Pet Details</li>
          <li>Confirm</li>
        </ol>
      </div>
    </div>
  );
};

export default FormSidebar;
