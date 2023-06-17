import React from 'react';

import Logo from '@components/Logo';
import logo from '../../public/SVG/logodark.svg';
import MyServices from '@components/MyServices';

const page = () => {
  return (
    <article className="flex h-[100vh] ">
      <div className="w-[20%] bg-secondary p-20 text-white">
        <Logo logo={logo} bgColor="primary" />
        <div className="mt-20">
          <h5>SERVICES</h5>
          <p>Scheduled</p>
          <p>Completed</p>
        </div>
        <div className="mt-20">
          <h5>PETS</h5>
          <p>Ginger</p>
          <p>Fluffy</p>
          <button>Book a Service</button>
        </div>
        <div className="mt-40">
          <p>My account</p>
          <p>Support</p>
          <p>Sign out</p>
        </div>
      </div>
      <div className="w-[40%] bg-primary ">
        <MyServices />
      </div>
      <div className="w-[40%] bg-slate-300"></div>
    </article>
  );
};

export default page;
