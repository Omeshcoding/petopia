import Logo from '@components/Logo';
import Image from 'next/image';
import React from 'react';
import profileImg from '@public/SVG/ginger.svg';

const PetProfile = () => {
  return (
    <div className="bg-white md:my-4 pb-8 rounded-md px-2">
      <div>
        <Image
          src={profileImg}
          height={100}
          width={100}
          alt="profileimage"
          className="mx-auto rounded-full border-2 border-darkerGray"
        />
        <div className=" text-center capitalize mb-4">
          <h3 className="text-darkerGray font-semibold ">Ginger</h3>
          <p className="text-darkGray ">breed name</p>
        </div>
      </div>
      <div className="text-center">
        <h4 className="uppercase font-bold text-[16px] text-darkGray">
          Favorite Things
        </h4>
        <ul className="flex justify-center gap-5  py-2 flex-wrap">
          {['Barking', 'Snuggling', 'Walks', 'Treats', 'Giving kisses'].map(
            (item, index) => (
              <li
                key={index}
                className=" bg-lightBrown border-lightGray px-4 py-[2px] text-small-text md:text-md rounded-full"
              >
                {item}{' '}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="">
        <ul className="flex gap-5 justify-center uppercase font-bold text-small-text py-2 text-darkGray flex-wrap">
          {['Female', 'Years Old', 'Spayed', '50-100 Pounds'].map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default PetProfile;
