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
  const multiple = true;
  const { data: session } = useSession();
  const [changeBg, setChangeBg] = useState('');
  const [selected, setSelected] = useState(multiple && []);
  const [selectedTime, setSelectedTime] = useState(multiple && []);
  const [selectedPlan, setSelectedPlan] = useState(-1);
  const [hasUpdated, setHasUpdated] = useState(false);
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
  const handleStyles = (e) => {
    setChangeBg(e.target.value);
  };
  const { step, isFirstStep, back, next, isLastStep } = useMultistepForm([
    <BookingPlans
      {...data}
      BookingFormChange={BookingFormChange}
      selectedPlan={selectedPlan}
      setSelectedPlan={setSelectedPlan}
    />,
    <BookingTime
      changeBg={changeBg}
      handleStyles={handleStyles}
      {...data}
      BookingFormChange={BookingFormChange}
      multiple
      onItemsSelected={onItemsSelected}
      selected={selected}
      selectedTime={selectedTime}
      onTimeSelected={onTimeSelected}
      hasUpdated={hasUpdated}
      setHasUpdated={setHasUpdated}
    />,
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

  return (
    <form className="bg-white h-[90%]" onSubmit={handleSubmit}>
      {step}
      <div className="mt-5 h-10 flex gap-2 justify-end items-end mx-10 ">
        {!isFirstStep && (
          <button
            type="button"
            className="btn bg-white rounded-full"
            onClick={back}
          >
            Back
          </button>
        )}

        <button className={`btn rounded-full `} type="submit">
          {isLastStep ? 'Schedule Service' : 'Next'}
        </button>
      </div>
    </form>
  );
};

export default Booking;
