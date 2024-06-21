import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoChatboxSharp } from 'react-icons/io5';
const ServiceQuote = () => {
  return (
    <div className="flex justify-center  sm:justify-between  p-6 bg-white my-2 md:my-4 rounded-md sm:items-center flex-wrap gap-4 text-center sm:text-left">
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
        <span className="text-4xl text-primary bg-darkGray p-3 rounded-full">
          <FaQuoteLeft />{' '}
        </span>
        <p className="md:w-40 text-darkGray">
          Please be sure to give her the antibiotics, they’re on the kitchen
          counter… Read more
        </p>
      </div>
      <button
        type="button"
        className="bg-[#dce0f6] py-1 px-4 rounded-sm flex items-center gap-1 text-darkerGray"
      >
        <IoChatboxSharp /> Chat
      </button>
    </div>
  );
};

export default ServiceQuote;
