import React from 'react';

import Logo from '@components/Logo';
import logo from '../public/SVG/logodark.svg';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-[20%] h-[100vh] bg-secondary pl-20 pt-10 text-white">
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
        <button className="mt-3 bg-primary text-secondary px-6 rounded-sm font-semibold py-2">
          Book a Service
        </button>
      </div>
      <div className="mt-28">
        <Link href="/dashboard/myaccount">My account</Link>
        <p>Support</p>
        <p>Sign out</p>
      </div>
    </div>
  );
};

export default Sidebar;
