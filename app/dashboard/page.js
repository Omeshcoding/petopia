import React from 'react';

import MyServices from '@components/MyServices/MyServices';
import PetProfile from '@components/DashboardDetails/PetProfile';
import SitterProfile from '@components/DashboardDetails/SitterProfile';
import ServiceAddress from '@components/DashboardDetails/ServiceAddress';
import ServiceQuote from '@components/DashboardDetails/ServiceQuote';
import SitterNotAssigned from '@components/DashboardDetails/SitterNotAssigned';
import SitterServicesButton from '@components/DashboardDetails/SitterServicesButton';

const page = () => {
  return (
    <article className="flex w-[100vw] ">
      <div className="w-[40%] bg-primary ">
        <MyServices />
      </div>
      <div
        className="w-[60%] bg-slate-300 h-[750px]
       overflow-y-scroll p-2 md:px-4"
      >
        <PetProfile />
        <SitterNotAssigned />
        <ServiceAddress />
        <ServiceQuote />
        <SitterProfile />
        <SitterServicesButton />
      </div>
    </article>
  );
};

export default page;
