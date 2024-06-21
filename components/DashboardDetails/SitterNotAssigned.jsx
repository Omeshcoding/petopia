import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { VscSmiley } from 'react-icons/vsc';

const SitterNotAssigned = () => {
  return (
    <div className="flex justify-center  sm:justify-between  p-6 bg-white my-2 md:my-4 rounded-md sm:items-center flex-wrap gap-4">
      <div className="flex flex-wrap justify-center sm:justify-start items-center">
        <span className="text-4xl text-darkGray bg-primary p-3 rounded-full">
          <VscSmiley />{' '}
        </span>
        <div className="text-center sm:text-left sm:ml-4 text-[16px] text-darkGray">
          <p className="">Your Sitter</p>
          <p className="text-para text-darkerGray font-bold">
            Not Assigned yet
          </p>
          <p>Sitters are assigned 72 hours before service</p>
        </div>
      </div>
    </div>
  );
};

export default SitterNotAssigned;
// <div className="flex items-center gap-4">

//   <p className="w-40 text-darkGray">
//     123 Fluffypants Lane Pawtown, FL 32789 123-468-8901
//   </p>
// </div>
// <button
//   type="button"
//   className="bg-[#dce0f6] py-1 px-4 rounded-sm flex items-center gap-1 text-darkerGray"
// >
//   <CiEdit /> Edit
// </button>
