import React from 'react';
import Logo from '@/components/Logo';
import logo from '../public/SVG/logodark.svg';
const Sidebar = () => {
  return (
    <div className="flex flex-col text-left  bg-secondary w-[40%]  pt-20  text-primary">
      <div className="mx-auto mt-20">
        <Logo logo={logo} title="PAWTASTIC" bgColor="primary" />
        <h4 className=" text-2xl font-bold mt-14 mb-3 ml-[-14px]">
          Why our service?
        </h4>
        <ol className="flex-column gap-8 list-disc">
          <li>We're animal lovers backed by</li>
          <li>Powered by tech, so you can</li>
          <li>Update and pics for every</li>
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
