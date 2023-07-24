'use client';
import React, { useState } from 'react';
import BookingPlans from '@components/BookingForm/BookingPlans';
import BookingTime from '@components/BookingForm/BookingTime';
import Payment from '@components/BookingForm/Payment';
import PaymentConfirm from '@components/BookingForm/PaymentConfirm';
import { useMultistepForm } from '@hooks/useMultistepForm';

const Booking = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selected, setSelected] = useState(-1);
  const [data, setData] = useState({
    service: '',
    frequency: '',
    startDate: '',
    days: '',
    times: '',
    note: '',
  });
  const BookingFormChange = (a) => {
    setData((prev) => {
      return { ...prev, ...a };
    });
  };
  const handleChange = (selected) => {
    setSelectedCard(selected);
  };
  const onItemsSelected = (i) => {
    console.log('hello', i);
    handleChange(i);
    setSelected(i);
  };

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      // <BookingPlans {...data} BookingFormChange={BookingFormChange} />,
      <BookingTime
        {...data}
        BookingFormChange={BookingFormChange}
        handleChange={handleChange}
        onItemsSelected={onItemsSelected}
      />,
      <Payment />,
      <PaymentConfirm />,
    ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    return next();
  };
  return (
    <form className="bg-white h-[100%]" onSubmit={handleSubmit}>
      {currentStepIndex + 1}/ {steps.length}
      {step}
      <div className="mt-5 h-10 flex gap-2 justify-end items-end mx-10 ">
        {!isFirstStep && (
          <button type="button" className="btn bg-white" onClick={back}>
            Back
          </button>
        )}

        <button className="btn bg-white" type="submit">
          {isLastStep ? 'Confirm' : 'Next'}
        </button>
      </div>
    </form>
  );
};

export default Booking;
