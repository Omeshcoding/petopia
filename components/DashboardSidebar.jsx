import React from 'react';

import Logo from '@components/Logo';
import logo from '../public/SVG/logodark.svg';
import Link from 'next/link';

const DashboardSidebar = () => {
  return (
    <div className="w-[20%] h-[100vh] bg-secondary pl-20 pt-10  text-white">
      <Logo logo={logo} bgColor="primary" />
      <div className="mt-20">
        <h5>SERVICES</h5>
        <p>Scheduled</p>
        <p>Completed</p>
      </div>
      <div className="mt-20 h-40">
        <div className="mb-4">
          <h5>PETS</h5>
          <p>Ginger</p>
          <p>Fluffy</p>
        </div>
        <Link
          href="/booking"
          className="bg-primary text-secondary px-6 rounded-sm font-semibold py-2"
        >
          Book a Service
        </Link>
      </div>
      <div className="mt-28">
        <Link href="/dashboard/myaccount">My account</Link>
        <p>Support</p>
        <p>Sign out</p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
