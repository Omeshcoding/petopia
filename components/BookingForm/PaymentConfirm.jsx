import React from 'react';

const PaymentConfirm = ({ service, times }) => {
  return (
    <section>
      <h2 className="title ml-16 text-center">
        Almost there, let’s just confirm all the details.
      </h2>
      <div className=" px-10 pb-2 pt-4  shadow-sm rounded-2xl drop-shadow-lg bg-gray-100 mx-auto w-[60%] text-darkGray font-semibold">
        <h4 className="mb-3 text-xl font-semibold  text-center">
          Dog walk for Ginger
        </h4>
        <div className="flex flex-col gap-4 lg:gap-9 w-full bg-lightGray px-14 py-6 rounded-md">
          <div className="flex  justify-between  border-b-white border-b-2 pb-3 ">
            <p>SERVICE TYPE</p>
            <p className="bg-white px-3 py-1 rounded-full font-bold">
              {service}
            </p>
            <p className=" font-bold">$15/walk</p>
          </div>
          <div className="flex  justify-between  border-b-white border-b items-center-2 pb-3">
            <p>SERVICE TIME</p>
            <p className=" font-bold bg-white px-3 py-1 rounded-full ml-[-34px]">
              {times}
            </p>
            <p className=" font-bold">x2</p>
          </div>
          <div className="flex justify-between border-b-white border-b-2 items-center pb-3">
            <p>RECURRING</p>
            <p className="font-bold  bg-white py-1 px-2 rounded-[50%]">M</p>
            <p className="font-bold">x5</p>
          </div>
          <div className="flex justify-between border-b-white border-b-2 items-center pb-3">
            <p>PAYMENT TYPE</p>
            <p className="font-bold bg-white py-1 px-2 rounded-md">
              Mastercard ending 2431 <span className="">^</span>
            </p>
            <p className="font-bold">x5</p>
          </div>
          <hr />
        </div>
        <div className="flex justify-between items-center  font-bold  py-3 w-full mt-4">
          <h4>Total</h4>
          <p>
            {' '}
            $150/week <span>Billed weekly on Sunday</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentConfirm;
