import Image from 'next/image';
import React from 'react';
import profileImg from '@public/SVG/ginger.svg';
import { FaStar } from 'react-icons/fa';

const SitterProfile = () => {
  return (
    <div className="flex justify-center  sm:justify-between  p-6 bg-white m-4 rounded-md sm:items-center flex-wrap gap-4">
      <div className="flex flex-wrap justify-center sm:justify-start">
        <Image
          src={profileImg}
          height={100}
          width={100}
          alt="profileimage"
          className=" rounded-full border-2 border-darkerGray"
        />
        <div className="text-center sm:text-left sm:ml-4 text-[16px] text-darkGray">
          <p className="">Your Sitter</p>
          <p className="text-para text-darkerGray font-bold">John Doe</p>
          <p>4.8 rating</p>
        </div>
      </div>
      <button
        type="button"
        className="bg-[#dce0f6] py-1 px-4 rounded-sm flex items-center gap-1 text-darkerGray"
      >
        <FaStar /> Reviews
      </button>
    </div>
  );
};

export default SitterProfile;
