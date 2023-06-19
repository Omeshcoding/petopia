import MyAccount from '@components/MyAccount';
import React from 'react';

const myaccount = () => {
  return (
    <article className="flex w-[80vw] ">
      <div className="w-[40%] bg-darkBlue ">
        <MyAccount />
      </div>
      <div className="w-[60%] bg-slate-300"></div>
    </article>
  );
};

export default myaccount;
