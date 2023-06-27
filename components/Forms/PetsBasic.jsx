import React from 'react';
import cat from '@public/SVG/cat.svg';
import Image from 'next/image';
const PetsBasics = () => {
  return (
    <section className="ml-6">
      <h2 className="text-4xl mt-20 mb-10">
        Nice to meet you, Meagan. Tell us all about your furry, feathery, or
        scaley friend.
      </h2>
      <div className=" w-[80%] mx-auto">
        <p className="mb-6">Pet Type</p>
        <div className="flex justify-center gap-10 bg-white py-2">
          <Image src={cat} width={80} height={80} alt="pet" />
          <Image src={cat} width={80} height={80} alt="pet" />
          <Image src={cat} width={80} height={80} alt="pet" />
          <Image src={cat} width={80} height={80} alt="pet" />
        </div>
      </div>
    </section>
  );
};

export default PetsBasics;
