import React from 'react';

const Payment = () => {
  return (
    <section>
      <h2 className="title ml-16">
        Finally, how would you like to pay for your dog walk?
      </h2>
      <div className="ml-28">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between w-[100%]  ">
            <div className="flex flex-col  gap-4">
              <label>Name on Card</label>
              <input
                type="text"
                className={`border-2 pl-5 w-[30vw] border-lightBrown rounded-md py-4 pr-20 `}
                placeholder="John"
              />
            </div>
          </div>
          <div className="flex justify-between w-[100%] ">
            <div className="flex flex-col  gap-4">
              <label>Card Number</label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 w-[30vw]  pr-20 `}
                placeholder="1234 5678 9012 3456"
              />
            </div>
          </div>
          <div className="flex gap-6 w-[100%]">
            <div className="flex flex-col  gap-4">
              <label>Expiration Date</label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                placeholder="01/12"
              />
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label>CVC</label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
