import React, { useState } from 'react';

const SelectedServiceCard = ({
  index,
  logo,
  task,
  price,
  time,
  handleChange,
  serviceType,
  BookingFormChange,
  data,
}) => {
  const [selected, setSelected] = useState(-1);
  let [selectedCard, setSelectedCard] = useState(false);
  let className;
  const onItemsSelected = (i) => {
    handleChange(i);
    setSelected(i);
  };

  return (
    <>
      <div
        onClick={() => {
          BookingFormChange(data);
          onItemsSelected(index);
        }}
        className={`flex justify-center gap-4 py-2 rounded-sm mb-4 ${className} bg-lightBrown `}
      >
        <i className="text-2xl my-auto p-5 bg-white text-cream ml-2 rounded-full">
          {logo}
        </i>
        <div className="">
          <p className="text-xl font-semibold">{serviceType}</p>
          <p className="max-w-sm">{task}</p>
        </div>
        <div className="border-primary border-l-2 px-4 ">
          <p className="text-2xl">{price}</p>
          <p className="w-20">{time} </p>
        </div>
      </div>
    </>
  );
};

export default SelectedServiceCard;
