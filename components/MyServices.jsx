import React from 'react';
import Link from 'next/link';

const MyServices = () => {
  return (
    <section className="h-[730px]  ">
      <div className="h-[10%] pt-10 ml-16">
        <h4 className="text-3xl text-darkGray">My Services</h4>
      </div>
      <div className="h-[40%] mt-6">
        <div className="border-y-2  border-lightBrown">
          <h5 className="py-3 ml-16">SCHEDULED SERVICES</h5>
        </div>
        <Link href="" className="border-y-2  border-lightBrown ">
          <div className="ml-16 py-3">
            <p className="py-3  font-bold text-xl">
              Saturday <span className="font-thin"> February 20th</span>
            </p>
            <p>Dog walk</p>
            <p>Morning</p>
          </div>
        </Link>
      </div>
      <div className="h-[40%] ">
        <div className="border-y-2  border-lightBrown">
          <h5 className="py-3 ml-16">COMPLETED SERVICES</h5>
        </div>
        <Link href="/" className="border-y-2  border-lightBrown ">
          <div className="ml-16 py-3">
            <p className="py-3  font-bold text-xl">
              Saturday <span className="font-thin"> February 20th</span>
            </p>
            <p>Dog walk</p>
            <p>Morning</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MyServices;
