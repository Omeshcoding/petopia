import BookingPlans from '@components/BookingForm/BookingPlans';
import BookingTime from '@components/BookingForm/BookingTime';
import Payment from '@components/BookingForm/Payment';
import PaymentConfirm from '@components/BookingForm/PaymentConfirm';

import React from 'react';

const Booking = () => {
  return (
    <div>
      <PaymentConfirm />
    </div>
  );
};

export default Booking;
