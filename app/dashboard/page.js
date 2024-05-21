import React from 'react';

import MyServices from '@components/MyServices/MyServices';
import PetProfile from '@components/DashboardDetails/PetProfile';
import SitterProfile from '@components/DashboardDetails/SitterProfile';

const page = () => {
  return (
    <article className="flex w-[80vw] ">
      <div className="w-[40%] bg-primary ">
        <MyServices />
      </div>
      <div className="w-[60%] bg-slate-300">
        <PetProfile />
        <SitterProfile />
      </div>
    </article>
  );
};

export default page;
