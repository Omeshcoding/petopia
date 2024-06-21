import React from 'react';
import { IoMdRepeat } from 'react-icons/io';
import { FaReceipt } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';
const SitterServicesButton = () => {
  return (
    <div className="flex justify-center  sm:justify-between py-4 sm:p-6 bg-white my-2 md:my-4 rounded-md sm:items-center flex-wrap gap-4 text-sm">
      <button
        type="button"
        className="bg-[#dce0f6] py-1 px-4 rounded-sm flex items-center gap-1 text-darkerGray"
      >
        <IoMdRepeat /> Repeat service
      </button>
      <button
        type="button"
        className="bg-[#dce0f6] py-1 px-4 rounded-sm flex items-center gap-1 text-darkerGray"
      >
        <FaReceipt /> View reciept
      </button>
      <button
        type="button"
        className="bg-[#dce0f6] py-1 px-4 rounded-sm flex items-center gap-1 text-darkerGray"
      >
        <MdFeedback /> Give Feedback
      </button>
    </div>
  );
};

export default SitterServicesButton;
