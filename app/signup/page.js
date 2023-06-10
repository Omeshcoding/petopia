import Logo from '@/components/Logo';
import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <article className="flex h-[100vh] ">
      <div className="flex flex-col bg-[#2b2d42] w-[40%] py-20 px-10 gap-6 text-white">
        <Logo />
        <h4 className=" text-2xl font-semibold">Why our service?</h4>
        <ol className="flex-column gap-6">
          <li>We're animal lovers backed by</li>
          <li>Poered by tech, so you can</li>
          <li>Update and pics for every</li>
        </ol>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center w-[60%] capitalize">
        <h2 className="head-text">Sign up to continue</h2>
        <Link href="/" className="btn">
          Sign up with google
        </Link>
      </div>
    </article>
  );
};

export default page;
