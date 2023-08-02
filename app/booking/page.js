'use client';
import React, { useState } from 'react';
import BookingPlans from '@components/BookingForm/BookingPlans';
import BookingTime from '@components/BookingForm/BookingTime';
import Payment from '@components/BookingForm/Payment';
import PaymentConfirm from '@components/BookingForm/PaymentConfirm';
import { useMultistepForm } from '@hooks/useMultistepForm';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
const Booking = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [data, setData] = useState({
    service: '',
    frequency: '',
    startDate: '',
    days: [],
    times: [],
    note: '',
    nameOnCard: '',
    cardNumber: '',
    expDate: '',
    cvc: '',
  });
  const BookingFormChange = (a) => {
    setData((prev) => {
      return { ...prev, ...a };
    });
  };
  console.log(data);
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <BookingPlans {...data} BookingFormChange={BookingFormChange} />,
      <BookingTime {...data} BookingFormChange={BookingFormChange} multiple />,
      <Payment {...data} BookingFormChange={BookingFormChange} />,
      <PaymentConfirm {...data} />,
    ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLastStep) return next();
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user.id,
          service: data.service,
          frequency: data.frequency,
          startDate: data.startDate,
          days: data.days,
          times: data.times,
          note: data.note,
          nameOnCard: data.nameOnCard,
          cardNumber: data.cardNumber,
          expDate: data.expDate,
          cvc: data.cvc,
        }),
      });
      if (response.ok) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  return (
    <form className="bg-white h-[90%]" onSubmit={handleSubmit}>
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
