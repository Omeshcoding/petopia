import React from 'react';
import Link from 'next/link';
import Schedule from './Schedule';

const MyServices = () => {
  return (
    <section className="h-[750px]   overflow-y-scroll">
      <div className="h-[10%] pt-10 ml-16">
        <h4 className="text-3xl text-darkGray">My Services</h4>
      </div>
      <div className=" mt-6">
        <div className="border-y-2  border-lightBrown">
          <h5 className="py-3 ml-16">SCHEDULED SERVICES</h5>
        </div>
        <div className=" overflow-y-scroll h-[400px]">
          <Schedule
            day="Saturday"
            date="February 20th"
            serviceType="dog walk"
            time="morning"
          />
          <Schedule
            day="Saturday"
            date="February 20th"
            serviceType="dog walk"
            time="morning"
          />
          <Schedule
            day="Saturday"
            date="February 20th"
            serviceType="dog walk"
            time="morning"
          />
        </div>
      </div>

      <div className="  ">
        <div className="border-y-2  border-lightBrown">
          <h5 className="py-3 ml-16">COMPLETED SERVICES</h5>
        </div>
        <div className=" overflow-y-scroll h-[400px]">
          <Schedule
            day="Saturday"
            date="February 12th"
            serviceType="dog walk"
            time="EVENING"
          />
          <Schedule
            day="Saturday"
            date="February 12th"
            serviceType="dog walk"
            time="EVENING"
          />
          <Schedule
            day="Saturday"
            date="February 12th"
            serviceType="dog walk"
            time="EVENING"
          />
        </div>
      </div>
    </section>
  );
};

export default MyServices;
