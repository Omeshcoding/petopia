import { connectToDB } from '@utils/database';
import BookingForms from '@model/booking';

export const POST = async (req) => {
  const {
    service,
    frequency,
    startDate,
    days,
    times,
    note,
    nameOnCard,
    cardNumber,
    expDate,
    cvc,
  } = await req.json();

  try {
    await connectToDB();
    const newBooking = new BookingForms({
      service,
      frequency,
      startDate,
      days,
      times,
      note,
      nameOnCard,
      cardNumber,
      expDate,
      cvc,
    });
    await newBooking.save();
    console.log(new Response(JSON.stringify(newBooking)));
    return new Response(JSON.stringify(newBooking), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to submit the form', { status: 500 });
  }
};
