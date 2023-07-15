import React from 'react';
import dogwalkicon from '../../public/SVG/dogwalkicon.svg';
import { LuFlower2 } from 'react-icons/lu';
const BookingPlans = () => {
  return (
    <section className="w-[100%] text-center">
      <h2 className="title">We can't wait to see your pet! How can we help?</h2>
      {/* dog-walk */}
      <div className="text-left w-[50%] mx-auto mb-4">
        <div className="flex justify-center gap-4 bg-cream py-2 rounded-sm">
          <i className="text-2xl my-auto p-5 bg-white text-cream ml-2 rounded-full">
            <LuFlower2 />
          </i>
          <div className="">
            <p className="text-xl font-semibold">Dog walk</p>
            <p className="max-w-sm">
              We’ll take your pup for a walk and make sure he or she has fresh
              food and water.
            </p>
          </div>
          <div className="border-primary border-l-2 px-4 ">
            <p className="text-2xl">$15</p>
            <p className="w-20">per 30 min walk</p>
          </div>
        </div>
      </div>
      {/* drop in visit */}
      <div className="text-left w-[50%] mx-auto mb-4 ">
        <div className="flex justify-center gap-4 bg-cream py-2 rounded-sm">
          <i className="text-2xl my-auto p-5 bg-white text-cream ml-2 rounded-full">
            <LuFlower2 />
          </i>
          <div className="">
            <p className="text-xl font-semibold">Drop-in visit</p>
            <p className="max-w-sm">
              We’ll stop by to snuggle, feed, and play with your pets in the
              comfort of home.
            </p>
          </div>
          <div className="border-primary border-l-2 px-4 ">
            <p className="text-2xl">$15</p>
            <p className="w-20">per 30 min walk</p>
          </div>
        </div>
      </div>
      <div className="text-left w-[50%] mx-auto  ">
        <div className="flex justify-center gap-4 bg-cream active:bg-white py-2 rounded-sm">
          <i className="text-2xl my-auto p-5 bg-white text-cream ml-2 rounded-full">
            <LuFlower2 />
          </i>
          <div className="">
            <p className="text-xl font-semibold">House sitting</p>
            <p className="max-w-sm">
              We’ll stay overnight with your pet to make sure he or she has
              round-the-clock love.
            </p>
          </div>
          <div className="border-primary border-l-2 px-4 ">
            <p className="text-2xl">$45</p>
            <p className="w-20">per night</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPlans;
