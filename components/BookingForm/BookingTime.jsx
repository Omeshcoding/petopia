import React from 'react';

const BookingTime = () => {
  return (
    <section className="">
      <h2 className="title">
        Okay, we’ll take Ginger for a walk. Just tell us when!
      </h2>
      <div>
        <div className="text-left">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between w-[100%] ">
              <div className="flex flex-col mx-auto gap-4 ">
                <label className="text-darkBlue">Frequency</label>

                <div className="flex gap-[50%] border-2 pl-5 border-lightBrown rounded-md py-4 pr-20  ">
                  <p className="mt-0">Recurring</p>
                  <p className="mt-0">Once</p>
                </div>
              </div>
              <div className="flex flex-col mx-auto gap-4">
                <label className="text-darkBlue">
                  Start date{' '}
                  <span className="text-darkGray">Select all that apply</span>{' '}
                </label>
                <input
                  type="text"
                  className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                  placeholder="MM/DD/YYYY"
                />
              </div>
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label className="text-darkBlue">
                Days{' '}
                <span className="text-darkGray">Select all that apply</span>
              </label>
              <div className="flex justify-between w-auto  border-2 px-2 border-lightBrown rounded-md ">
                <p className="mt-0  py-4 px-8">Mon</p>
                <p className="mt-0 border-black border-l-2 py-4 px-11">Tue</p>
                <p className="mt-0  border-black border-l-2 py-4 px-11">Wed</p>
                <p className="mt-0  border-black border-l-2 py-4 px-11">Thur</p>
                <p className="mt-0  border-black border-l-2 py-4 px-11">Fri</p>
                <p className="mt-0  border-black border-l-2 py-4 px-11">Sat</p>
                <p className="mt-0  border-black border-l-2 py-4 px-11">Sun</p>
              </div>
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label className="text-darkBlue">
                Days{' '}
                <span className="text-darkGray">Select all that apply</span>
              </label>
              <div className="flex justify-between w-auto  border-2 px-2 border-lightBrown rounded-md ">
                <p className="mt-0  py-4 px-[6.2rem]">Morning</p>
                <p className="mt-0 border-black border-l-2 py-4 px-[6.2rem]">
                  Afternoon
                </p>
                <p className="mt-0  border-black border-l-2 py-4 px-[6.2rem]">
                  Evening
                </p>
              </div>
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label className="text-darkBlue">Notes for your sitter</label>
              <textarea
                name=""
                id=""
                cols="12"
                rows="7"
                className="w-[50rem] border-black"
                placeholder="Route preferences,leash location, treats given, etc."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTime;
