import React, { useEffect, useState } from 'react';

const BookingTime = ({
  frequency,
  startDate,
  note,
  BookingFormChange,
  multiple,
}) => {
  const [selected, setSelected] = useState(multiple && []);
  const [selectedTime, setSelectedTime] = useState(multiple && []);
  const [hasUpdated, setHasUpdated] = useState(false);
  const Days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const onItemsSelected = (name) => {
    if (multiple && name) {
      if (!selected.includes(name)) {
        const selectedIndexes = [...selected, name];
        setSelected(selectedIndexes);
      } else {
        const selectedIndexes = selected.filter((day) => day !== name);
        setSelected(selectedIndexes);
      }
    } else {
      setSelected(name);
    }
    setHasUpdated(true);
  };
  const onTimeSelected = (name) => {
    console.log(name);
    if (multiple && name) {
      if (!selectedTime.includes(name)) {
        const timeSelected = [...selectedTime, name];
        setSelectedTime(timeSelected);
      } else {
        const timeSelected = selectedTime.filter((time) => time !== name);
        setSelectedTime(timeSelected);
      }
    } else {
      setSelectedTime(name);
    }
    setHasUpdated(true);
  };
  console.log(selectedTime);

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
        <div className="text-left">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between w-[100%] ">
              <div className="flex flex-col mx-auto gap-4 ">
                <label className="text-darkBlue">Frequency</label>

                <div className="flex py-2 px-3 border-2  border-lightBrown rounded-lg    ">
                  <input
                    type="button"
                    className="mt-0  px-5 focus:bg-lightBrown rounded-s-lg"
                    value="Recurring"
                    onClick={(e) =>
                      BookingFormChange(() => {
                        frequency: e.target.value;
                      })
                    }
                  />

                  <input
                    type="button"
                    className="mt-0 px-5 text-center py-4  ml-[.1rem] rounded-e-lg focus:bg-lightBrown"
                    value="Once"
                    onClick={(e) =>
                      BookingFormChange({ frequency: e.target.value })
                    }
                  />
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
                  value={startDate}
                  onChange={(e) =>
                    BookingFormChange({ startDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label className="text-darkBlue">
                Days{' '}
                <span className="text-darkGray">Select all that apply</span>
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
                      className=" first:rounded-s-lg last:rounded-e-lg ml-[.1rem]"
                    >
                      <input
                        type="button"
                        className={`
                        ${bgColor}
                        mt-0  first:rounded-s-lg last:rounded-e-lg py-4 px-8 `}
                        value={day}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label className="text-darkBlue">
                Times{' '}
                <span className="text-darkGray">Select all that apply</span>
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
                      className={`mt-0 ${bgColor}  py-4 px-[6.2rem] ml-2 rounded-lg`}
                      onClick={() => onTimeSelected(time)}
                    >
                      <input type="button" value={time} />
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
                className="w-[50rem] border-black p-4"
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
