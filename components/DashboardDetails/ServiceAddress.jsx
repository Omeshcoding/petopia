import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { CiEdit } from 'react-icons/ci';
const ServiceAddress = () => {
  return (
    <div className="flex justify-center  sm:justify-between  p-6 bg-white my-2 md:my-4 rounded-md sm:items-center flex-wrap gap-4 text-center md:text-left">
      <div className="flex flex-wrap justify-center sm:justify-start   items-center gap-4">
        <span className="text-4xl text-primary bg-darkGray p-3 rounded-full">
          <FaLocationDot />{' '}
        </span>
        <p className="md:w-40 text-darkGray">
          123 Fluffypants Lane Pawtown, FL 32789 123-468-8901
        </p>
      </div>
      <button
        type="button"
        className="bg-[#dce0f6] py-1 px-4 rounded-sm flex items-center gap-1 text-darkerGray"
      >
        <CiEdit /> Edit
      </button>
    </div>
  );
};

export default ServiceAddress;
