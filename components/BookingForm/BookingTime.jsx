import React, { useEffect } from 'react';

const BookingTime = ({
  startDate,
  note,
  BookingFormChange,
  changeBg,
  handleStyles,
  onItemsSelected,
  selected,
  selectedTime,
  onTimeSelected,
  hasUpdated,
  setHasUpdated,
}) => {
  const Days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const handleFrequency = (e) => {
    BookingFormChange({ frequency: e.target.value });
  };
  useEffect(() => {
    if (hasUpdated) {
      BookingFormChange({ days: selected });
      BookingFormChange({ times: selectedTime });
      setHasUpdated(true);
    }
  }, [hasUpdated, selected, selectedTime]);

  return (
    <section className="">
      <h2 className="title">
        Okay, we’ll take Ginger for a walk. Just tell us when!
      </h2>
      <div>
        <div className="text-left mx-20">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between px-[11px] w-[100%] ">
              <div className="flex flex-col  gap-4 ">
                <label className="text-darkBlue">Frequency</label>

                <div className="flex py-2 px-3 border-2  border-lightBrown rounded-lg    ">
                  <input
                    type="button"
                    className={`mt-0  px-5 active: rounded-s-lg border-2  border-lightBrown ${
                      changeBg === 'Recurring' && 'bg-lightBrown'
                    }`}
                    value="Recurring"
                    onClick={(e) => {
                      handleStyles(e);
                      handleFrequency(e);
                    }}
                    required
                  />

                  <input
                    type="button"
                    className={`mt-0 px-5 text-center py-4  ml-[.1rem] rounded-e-lg focus:bg-lightBrown border-2  border-lightBrown ${
                      changeBg === 'Once' && 'bg-lightBrown'
                    }`}
                    value="Once"
                    onClick={(e) => {
                      handleStyles(e);
                      handleFrequency(e);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-darkBlue">
                  Start date <span>(DD/MM/YYYY)</span>
                </label>
                <input
                  type="text"
                  className={`border-2 pl-5 border-lightBrown rounded-md mt-2 py-4 pr-20 `}
                  placeholder="DD/MM/YYYY"
                  max="25-07-2123"
                  value={startDate}
                  onChange={(e) =>
                    BookingFormChange({ startDate: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label className="text-darkBlue">
                Days{' '}
                <span className="text-darkGray">(Select all that apply)</span>
              </label>
              <div className="flex justify-between w-auto  border-2 px-2 py-2 border-lightBrown rounded-md ">
                {Days.map((day, index) => {
                  const isSelected = selected.includes(day)
                    ? 'bg-lightBrown'
                    : '';
                  const bgColor = `${isSelected}`;
                  return (
                    <div
                      onClick={() => onItemsSelected(day)}
                      key={index}
                      className=" rounded-lg  border-2 mx-[11px] border-lightBrown"
                    >
                      <input
                        type="button"
                        className={`
                        ${bgColor}
                        mt-0  rounded-lg py-4 px-8 `}
                        value={day}
                        required
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label className="text-darkBlue">
                Times{' '}
                <span className="text-darkGray">(Select all that apply)</span>
              </label>
              <div className="flex justify-between w-auto  border-2 px-2 border-lightBrown  py-2 rounded-lg">
                {['Morning', 'Afternoon', 'Evening'].map((time, index) => {
                  const isSelected = selectedTime.includes(time)
                    ? 'bg-lightBrown'
                    : '';
                  const bgColor = `${isSelected}`;
                  return (
                    <div
                      key={index}
                      className={`mt-0 ${bgColor}  py-4 px-[6.2rem] ml-2 rounded-lg border-2  border-lightBrown`}
                      onClick={() => onTimeSelected(time)}
                    >
                      <input type="button" value={time} required />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label className="text-darkBlue">Notes for your sitter</label>
              <textarea
                name=""
                id=""
                cols="12"
                rows="2"
                value={note}
                onChange={(e) => BookingFormChange({ note: e.target.value })}
                className="w-[52rem] border-black p-6 resize-none rounded-lg"
                placeholder="Route preferences,leash location, treats given, etc."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTime;
