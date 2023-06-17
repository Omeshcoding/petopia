import React from 'react';

import Logo from '@components/Logo';
import logo from '../../public/SVG/logodark.svg';
import MyServices from '@components/MyServices';

const page = () => {
  return (
    <article className="flex h-[100vh]">
      <div className="w-[20%] bg-secondary">
        <Logo logo={logo} bgColor="primary" />
      </div>
      <div className="w-[40%] bg-primary ">
        <MyServices />
      </div>
      <div className="w-[40%] bg-slate-300"></div>
    </article>
  );
};

export default page;
