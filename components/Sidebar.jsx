import React from 'react';
import Logo from '@/components/Logo';
import logo from '../public/SVG/logodark.svg';
const Sidebar = (props) => {
  return (
    <div className="flex flex-col text-left  bg-secondary w-[40%]  pt-20  text-primary">
      <div className="mx-auto mt-20">
        <Logo logo={logo} title="PAWTASTIC" bgColor="primary" />

        <h4 className=" text-2xl font-bold mt-14 mb-3 ml-[-14px]">
          {props.title}
        </h4>

        <ol className="flex-column gap-8 list-disc">
          {props.type.map((service) => (
            <li key={service.id}>{service.title} </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
